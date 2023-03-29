import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <Text>This is a smart alarm clock</Text>
      <StatusBar style="auto" />
      <Button onPress={() => setCount(count + 1)} title="Click me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
