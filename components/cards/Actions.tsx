import { Image, StyleSheet, Text, View } from "react-native";

type Action = {
  text1: string;
  text2: string;
  pngSource: any;
  width: number;
  height: number;
};

export default function MainAction({
  text1,
  text2,
  pngSource,
  width,
  height,
}: Action) {
  return (
    <View
      className="pt-[18px] pl-[14px] pr-[8px] h-[180px] w-[136px] rounded-[28px] bg-white relative overflow-hidden"
      style={styles.cardShadow}
    >
      <Text style={styles.small}>{text1}</Text>
      <Text style={[styles.small, { color: "#AAAAAA" }]}>{text2}</Text>
      <Image
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: width, // подбери размер под макет
          height: height,
        }}
        source={pngSource}
        resizeMode="cover"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 5,
  },
});
