import LottieView from "lottie-react-native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, Component } from "react";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

// const App = () => {
//   const [dimensions, setDimensions] = useState({
//     window: windowDimensions,
//     screen: screenDimensions,
//   });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       "change",
//       ({ window, screen }) => {
//         setDimensions({ window, screen });
//       }
//     );
//     return () => subscription?.remove();
//   });
//   return null;
// };

// for debugging only
const width = window.innerWidth;
const height = window.innerHeight;
console.log(`The viewport's width is ${width} and the height is ${height}.`);

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require("../assets/Anime.json")}
        autoPlay
        loop={true}
        speed={0.3}
      />

      <Text style={styles.textOverlay}>Travel alarm clock</Text>
      <Text style={styles.textOverlay2}>
        Your personalized wake-up ~{"\n"}call starts here
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: "100%",
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "White",
    zIndex: 999,
    transform: [{ translateX: -134 }, { translateY: -90 }],

    position: "absolute",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    zIndex: 999,
    fontWeight: "900",
    position: "absolute",
    fontSize: 20,
    borderWidth: 2, // Add border width
    borderColor: "white", // Add border color
    borderRadius: 7,
  },
  textOverlay: {
    position: "absolute",
    top: "45%",
    left: "40%",
    transform: [{ translateX: -100 }, { translateY: -270 }],
    zIndex: 999,
    color: "white",
    fontWeight: "900",
    fontSize: 30,
  },
  textOverlay2: {
    position: "absolute",
    top: "50%",
    left: "66%",
    transform: [{ translateX: -220 }, { translateY: -250 }],
    zIndex: 999,
    color: "white",
    fontWeight: "900",
    fontSize: 15,
  },
});

export default WelcomeScreen;
3