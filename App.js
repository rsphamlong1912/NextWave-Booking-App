import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "./constants/colors";
import BookingHistory from "./screens/BookingHistory";

export default function App() {
  return (
    <View style={styles.container}>
      <BookingHistory />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
