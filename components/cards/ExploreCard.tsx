import { Image, StyleSheet, Text, View } from "react-native";

type TypeExploreCard = {
  name: string;
  pngSource: any;
  width: number;
  height: number;
  newItem?: boolean;
};

export default function ExploreCard({
  name,
  pngSource,
  width,
  height,
  newItem,
}: TypeExploreCard) {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          width: 160,
          paddingTop: 35,
          paddingBottom: 40,
          borderRadius: 28,
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
        },
        styles.cardShadow,
      ]}
    >
      <View
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: 50,
          width: 85,
          height: 85,
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          source={pngSource}
          style={{ width: width, height: height }}
        ></Image>
      </View>
      {newItem ? (
        <Image
          source={require("@assets/images/new.png")}
          style={{
            width: 68,
            height: 40,
            position: "absolute",
            top: -12,
            right: -14,
          }}
        ></Image>
      ) : null}
      <Text style={{ fontFamily: "StyreneMedium", fontSize: 15 }}>{name}</Text>
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
});
