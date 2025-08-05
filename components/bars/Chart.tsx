import { StyleSheet, Text, View } from "react-native";

type TypeChart = {
  width: number;
  height: number;
  sum: string;
  month: string;
  color?: string;
};

export default function Chart({ width, height, sum, month, color }: TypeChart) {
  return (
    <View className="items-center gap-[2px]">
      <Text style={styles.top}>{sum}</Text>
      <View
        style={{
          width: width,
          height: height,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: color ? color : "#EF3124",
        }}
      ></View>
      <Text style={[styles.top, { color: "#AAAAAA" }]}>{month}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    fontFamily: "StyreneRegular",
    fontSize: 10,
  },
});
