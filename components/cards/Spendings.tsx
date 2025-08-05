import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type TypeSpendings = {
  color: string;
  text1: string;
  text2: string;
  bgcolor: string;
};

export default function Spendings({
  color,
  text1,
  text2,
  bgcolor,
}: TypeSpendings) {
  return (
    <View
      className="flex-row py-[3px] pl-[5.5px] pr-[8.5px] items-center justify-between gap-[4px]"
      style={{ backgroundColor: bgcolor, borderRadius: 16 }}
    >
      <Svg width={14} height={14}>
        <Circle r={7} cx={7} cy={7} fill={color}></Circle>
      </Svg>
      <View className="flex-row gap-[3px]">
        <Text style={styles.small}>{text1}</Text>
        <Text style={styles.small}>{text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 9,
    color: "#7F7F7F",
  },
});
