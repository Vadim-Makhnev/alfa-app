import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

type Card = {
  Icon?: FC<SvgProps>;
  pngSource?: any;
  name: string;
  time: string;
  sum: string;
  color: string;
};

export default function ExpenseCard({
  Icon,
  pngSource,
  name,
  time,
  sum,
  color,
}: Card) {
  return (
    <View>
      <View
        className="flex-row items-center justify-between pl-[21px] pt-[15px] pb-[14px] pr-[35px] rounded-[20px] relative"
        style={[{ backgroundColor: color }, styles.cardShadow]}
      >
        <View className="flex-row items-center gap-[12px]">
          {Icon ? (
            <Icon width={31} height={31} />
          ) : pngSource ? (
            <Image source={pngSource} style={{ width: 31, height: 31 }} />
          ) : null}

          <View>
            <Text style={styles.brand}>{name}</Text>
            <Text style={styles.small}>{time}</Text>
          </View>
        </View>
        <Text style={styles.sum}>{sum}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 5,
  },
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
  },
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
    color: "#AAAAAA",
  },
  brand: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
  },
  sum: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
    color: "#EF3124",
  },
});
