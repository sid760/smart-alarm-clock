import React, { Component } from "react";
import LottieView from "lottie-react-native";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageBackground,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <LottieView
      style={styles.background}
      source={require("../assets/Welcome.json")}
      autoPlay
    >
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      {/* container: */}
      <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </View>
      </TouchableOpacity>
    </LottieView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default WelcomeScreen;
