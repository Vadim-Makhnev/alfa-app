import { Image, StyleSheet, Text, View } from "react-native";

type TypeUserCard = {
  pngSource: any;
  name: string;
  job: string;
};

export default function User({ pngSource, name, job }: TypeUserCard) {
  return (
    <View
      style={[
        styles.cardShadow,
        {
          paddingVertical: 12,
          paddingLeft: 14,
          paddingRight: 14,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 28,
          justifyContent: "space-between",
        },
      ]}
    >
      <View className="flex-row gap-[10px]">
        <Image
          source={pngSource}
          style={{ width: 47, height: 47, borderRadius: 10 }}
        ></Image>

        <View>
          <Text style={{ fontFamily: "StyreneMedium", fontSize: 12 }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: "StyreneRegular",
              fontSize: 12,
              color: "#AAAAAA",
            }}
          >
            {job}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#EF3124",
          borderRadius: 16,
          paddingHorizontal: 20,
          paddingVertical: 10.5,
        }}
      >
        <Text
          style={{ fontFamily: "StyreneMedium", fontSize: 12, color: "white" }}
        >
          Визитка
        </Text>
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
});
