import Arrow from "@assets/images/arrow.svg";
import User from "@assets/images/user.svg";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type TypeHeader = {
  display?: boolean;
};

export default function Header({ display = true }: TypeHeader) {
  return (
    <View
      className="flex-row justify-between items-center"
      style={{ backgroundColor: "#F3F3F3", marginBottom: 36 }}
    >
      <TouchableOpacity
        hitSlop={20}
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <View>
          <Arrow width={11} height={18} />
        </View>
      </TouchableOpacity>

      {display ? (
        <View className="flex-row items-center gap-[13px]">
          <Text style={[styles.text, { color: "black" }]}>Николай Ч.</Text>
          <TouchableWithoutFeedback onPress={() => router.push("/profile")}>
            <User />
          </TouchableWithoutFeedback>
        </View>
      ) : null}
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
