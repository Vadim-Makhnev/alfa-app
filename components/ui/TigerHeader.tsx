import Arrow from "@assets/images/arrow.svg";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TigerHeader({
  pngSource,
  name = "Тигрик",
  desc = "Помощник по всем вопросам",
}: {
  pngSource?: any;
  name?: string;
  desc?: string;
}) {
  return (
    <View className="flex-row items-center gap-[16px]">
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={20}
        onPress={() => router.replace("/chat")}
      >
        <View>
          <Arrow width={11} height={18} />
        </View>
      </TouchableOpacity>
      {!pngSource ? (
        <Image
          style={{ width: 40, height: 40 }}
          source={require("@assets/images/ctiger.png")}
        ></Image>
      ) : (
        <Image style={{ width: 40, height: 40 }} source={pngSource}></Image>
      )}
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: "StyreneMedium",
    fontSize: 17,
  },
  desc: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.4)",
  },
});
