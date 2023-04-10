import React from "react";
import WelcomeScreen from "./App/Screen/WelcomeScreen";
import SecondScreen from "./App/Screen/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const config = {
  animation: "",
  config: {
    stiffness: 100,
    damping: 1,
    mass: 1,
    overshootingClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

// const config = {
//   animation: "decay",
//   velocity: 50,
//   deceleration: -0.99,
//   useNativeDriver: true,
// };

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: null }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
