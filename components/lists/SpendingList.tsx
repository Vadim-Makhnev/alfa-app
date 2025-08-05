import { Image, StyleSheet, Text, View } from "react-native";

type TypeSpendingList = {
  source: any;
  name: string;
  category: string;
  sum: string;
  cashback: string;
};

export default function SpendingList({
  source,
  name,
  category,
  sum,
  cashback,
}: TypeSpendingList) {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row gap-[12px] items-center">
        <Image source={source} style={{ width: 31, height: 31 }}></Image>
        <View>
          <Text style={[styles.small, { fontSize: 15 }]}>{name}</Text>
          <Text style={[styles.small, { fontSize: 12, color: "#AAAAAA" }]}>
            {category}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text style={[styles.big, { color: "#7F7F7F" }]}>{sum}</Text>
        <Text style={[styles.small, { color: "#7F7F7F", fontSize: 9 }]}>
          {cashback}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
  },
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
  },
});
