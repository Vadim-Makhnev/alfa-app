import User from "@assets/images/user.svg";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HeaderWithLogo() {
  return (
    <View className="flex-row justify-between mb-[36px]">
      <Image
        source={require("@assets/images/alfa.png")}
        resizeMode="cover"
        style={{ width: 30, height: 43 }}
      ></Image>

      <View className="flex-row items-center gap-[13px]">
        <Text style={[styles.text, { color: "black" }]}>Николай Ч.</Text>
        <User width={43} height={43} />
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
