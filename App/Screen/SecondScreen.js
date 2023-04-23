import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Dimensions } from "react-native";
import dayjs from "dayjs";
import { ScrollView } from "react-native-gesture-handler";

function SecondScreen({ navigation }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  return (
    <ImageBackground
      source={require("../assets/anim.jpg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.text}>Enter the following details </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Train number"
              placeholderTextColor={"black"}
              onChangeText={(text) => setInput1(text)}
              value={input1}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Station"
              placeholderTextColor={"black"}
              onChangeText={(text) => setInput2(text)}
              value={input2}
            />
            <TextInput
              style={styles.input}
              placeholder="Buffer"
              placeholderTextColor={"black"}
              onChangeText={(text) => setInput3(text)}
              value={input3}
            />
          </ScrollView>
        </View>
        <View>
          <Text style={styles.date}>{dayjs().format("hh:mm")}</Text>
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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderRadius: 20,
    paddingHorizontal: 5,
    // marginTop: 75,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 5,
    // flex: 1,
    height: "40%",
    // maxHeight: 400,
  },
  input: {
    // height: 50,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    borderColor: "grey",
    // width: 200,
    color: "grey",
    alignSelf: "stretch", // Stretch the text input boxes to fill the width of the parent container
  },
  text: {
    textShadowColor: "black",
    color: "grey",
    fontWeight: "900",
    fontSize: 20,
    // marginTop: 3, // Adjust this value to control the margin from the top
  },
  date: {
    fontSize: 40,
    fontFamily: "",
    color: "grey",
  },
});

export default SecondScreen;
