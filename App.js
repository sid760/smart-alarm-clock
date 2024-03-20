import React from "react";
import WelcomeScreen from "./App/Screen/WelcomeScreen";
import SecondScreen from "./App/Screen/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const config = {
  animation: "decay",
  config: {
    stiffness: 10,
    damping: 0.5,
    mass: 0.5,
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
            headerMode: "float",
            animation: "decay",
          },
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
