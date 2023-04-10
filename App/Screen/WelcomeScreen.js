import React, { Component } from "react";
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
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      {/* container: */}
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  EnterButton: {
    justifyContent: "center",
    width: "30%",
    height: "40%",
    backgroundColor: "#86d4e0",
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
