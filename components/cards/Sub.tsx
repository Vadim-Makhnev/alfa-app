import { Image, StyleSheet, Text, View } from "react-native";

type TypeSubCard = {
  pngSource: any;
  name: string;
  price: string;
  month: string;
};

export default function SubCrad({
  pngSource,
  name,
  price,
  month,
}: TypeSubCard) {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          height: 75,
          borderRadius: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 22,
          paddingLeft: 30,
          paddingRight: 25,
        },
        styles.cardShadow,
      ]}
    >
      <View className="flex-row items-center gap-[12px]">
        <Image
          source={pngSource}
          style={{ width: 31, height: 31, borderRadius: 50 }}
        ></Image>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View className="flex-row items-center gap-[3px]">
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.price}>{month}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
  },
  price: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 5,
  },
});
