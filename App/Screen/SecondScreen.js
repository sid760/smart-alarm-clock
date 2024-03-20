import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Dimensions, ToastAndroid } from "react-native";
import dayjs from "dayjs";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

function SecondScreen({ navigation }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState(new Date());
  const [input4, setInput4] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:MM"));
  const [alarmConfirmation, setAlarmConfirmation] = useState(false);

  const showToast = () => {
    ToastAndroid.show("Alarm Set!", ToastAndroid.SHORT);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format("HH:MM"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || input3;
    setShowDatePicker(Platform.OS === "ios");
    setInput3(currentDate);
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
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Enter the following details </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Train number"
              placeholderTextColor={"white"}
              onChangeText={(text) => setInput1(text)}
              value={input1}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Station"
              placeholderTextColor={"white"}
              onChangeText={(text) => setInput2(text)}
              value={input2}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder=" Enter Date"
                placeholderTextColor={"white"}
                value={dayjs(input3).format("DD MMMM YYYY")}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={input3}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Buffer"
              placeholderTextColor={"white"}
              onChangeText={(text) => setInput4(text)}
              value={input4}
            />
          </ScrollView>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            showToast();
          }}
        >
          <Text>Set Alarm</Text>
        </Pressable>
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
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    // overflow: "visible",
    position: "relative",
    flex: 1,
    // height: "content-height",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    paddingHorizontal: 5,
    marginTop: 125,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 5,
    borderColor: "white",
    // flex: 1,
    // height: "100%",
    maxHeight: "55%",
  },
  input: {
    // height: 50,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    borderColor: "white",
    // width: 200,
    color: "white",
    alignSelf: "stretch", // Stretch the text input boxes to fill the width of the parent container
    fontSize: 21,
    fontWeight: "700",
  },
  text: {
    textShadowColor: "white",
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    // marginTop: 3, // Adjust this value to control the margin from the top
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    // fontWeight: "900",
    margin: 20,
  },
  date: {
    fontSize: 40,
    // fontWeight:700,
    marginTop: 100,
    fontFamily: "",
    color: "white",
  },
});

export default SecondScreen;
