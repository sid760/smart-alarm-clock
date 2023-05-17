import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Dimensions } from "react-native";
import dayjs from "dayjs";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";
import { Audio } from "expo-av";
import SQLite from 'expo-sqlite'; 
import mysql from 'mysql2/promise';

function SecondScreen({ navigation }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState(new Date());
  const [buffer, setBuffer] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm A"));
  const [alarms, setAlarms] = useState([]);
  console.log(useState([]))
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm A"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    const subscription = Notifications.addNotificationReceivedListener(async notification => {
      // Handle the incoming notification here
      console.log(notification);
  
      // Display the custom message in an alert
      Alert.alert(notification.request.content.title, notification.request.content.body);
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../assets/notification_sound.mp3")
        );
        await sound.playAsync();
      } catch (error) {
        console.log("Failed to play sound:", error);
      }
    });
  
    return () => {
      subscription.remove();
    };
  }, []);
  

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || input3;
    setShowDatePicker(Platform.OS === "ios");
    setInput3(currentDate);
  };

  const scheduleAlarmNotification = async () => {
    const arrivalTime = input3.getTime();
    const bufferSeconds = Number(buffer);

    if (!input1 || !input2 || !arrivalTime || !bufferSeconds) {
      Alert.alert("Incomplete Details", "Please fill all details");
      return;
    }

    try {
      const { granted } = await Notifications.getPermissionsAsync();
      if (!granted) {
        const { granted: newGranted } =
          await Notifications.requestPermissionsAsync();
        if (!newGranted) {
          Alert.alert(
            "Permissions required",
            "Please grant permission to receive notifications."
          );
          return;
        }
      }

      const alarmTime = arrivalTime + bufferSeconds * 1000;
      const  notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Alarm",
          body: "It's time!",
          sound: true,
        },
        trigger: { seconds: bufferSeconds },
        repeats:false,
      });

      setAlarms([...alarms, { time: alarmTime ,notificationId }]);
      setInput1("");
      setInput2("");
      setInput3(new Date());
      setBuffer("");
      setShowDatePicker(false);
    } catch (error) {
      Alert.alert("Error", "Failed to schedule the alarm");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/anim.jpg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View>
        <Text style={styles.date}>{currentTime}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.text}>Enter the following details</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Train number"
              placeholderTextColor={"white"}
              onChangeText={(text) => setInput1(text)}
              value={input1}
              required
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Station"
              placeholderTextColor={"white"}
              onChangeText={(text) => setInput2(text)}
              value={input2}
              required
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="Enter Date"
                placeholderTextColor={"white"}
                value={dayjs(input3).format("DD MMMM YYYY")}
                editable={false}
                required
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={input3}
                mode="date"
                display="default"
                onChange={handleDateChange}
                required
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Buffer (in seconds)"
              placeholderTextColor={"white"}
              onChangeText={(text) => setBuffer(text)}
              value={buffer}
              keyboardType="numeric"
              required
            />
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={scheduleAlarmNotification}>
              <Text style={styles.buttonText}>Set Alarm</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alarmsContainer}>
          <Text style={styles.alarmsHeading}>Alarm Set:</Text>
          {alarms.map((alarm, index) => (
            <Text key={index} style={styles.alarmItem}>
              {dayjs(alarm.time).format("hh:mm A")}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -90,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 5,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 5,
    borderColor: "white",
    height: "45%",
  },
  input: {
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    borderColor: "white",
    color: "white",
    alignSelf: "stretch",
  },
  text: {
    textShadowColor: "white",
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  date: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 100,
    fontFamily: "",
    color: "white",
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  alarmsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  alarmsHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  alarmItem: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
});

export default SecondScreen;
