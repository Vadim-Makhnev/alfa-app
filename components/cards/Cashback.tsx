import Sign from "@assets/images/sign.svg";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type TypeCashbackCard = {
  pngSource: any;
  percentage: string;
  text: string;
  fill?: string;
};

export default function CashbackCard({
  pngSource,
  percentage,
  text,
  fill,
}: TypeCashbackCard) {
  return (
    <View className="flex-row items-center justify-between">
      <View
        style={{
          backgroundColor: "#91DB6A",
          width: 50,
          height: 50,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 16,
        }}
      >
        <Image
          source={pngSource}
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
          }}
        ></Image>
      </View>
      <View className="flex-row gap-[3px]">
        <Text style={styles.small}>{percentage}</Text>
        <Text style={styles.small}>{text}</Text>
      </View>
      <View className="flex-row items-center gap-[13px] ml-[38px]">
        <View
          style={{
            backgroundColor: "#F2F2F2",
            width: 23,
            height: 23,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Sign width={15} height={15} />
        </View>
        <Svg style={{ width: 23, height: 23 }}>
          <Circle
            cx={11.5}
            cy={11.5}
            r={11}
            fill={fill || "none"}
            stroke={fill && fill !== "none" ? "none" : "#AAAAAA"}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
  },
});
