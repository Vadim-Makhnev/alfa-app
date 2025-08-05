import Arrow from "@assets/images/arrow.svg";
import User from "@assets/images/user.svg";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center">
      <Arrow />
      <View className="flex-row items-center gap-[13px]">
        <Text style={[styles.text, { color: "black" }]}>Николай Ч.</Text>
        <User />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "StyreneMedium",
    color: "white",
    fontSize: 18,
    includeFontPadding: false,
  },
});
