import { Image, StyleSheet, Text, View } from "react-native";

type TypeBoomCard = {
  pngSource: any;
  name: string;
  category: string;
  percentage: string;
};

export default function BoomCard({
  pngSource,
  name,
  category,
  percentage,
}: TypeBoomCard) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row gap-[12px] items-center">
        <Image source={pngSource} style={{ width: 31, height: 31 }}></Image>

        <View>
          <Text style={styles.textreg}>{name}</Text>
          <Text style={[styles.textreg, { color: "#AAAAAA", fontSize: 12 }]}>
            {category}
          </Text>
        </View>
      </View>

      <Text style={styles.textmed}>{percentage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textreg: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
    includeFontPadding: false,
  },
  textmed: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
    includeFontPadding: false,
  },
});
