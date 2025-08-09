import { Image, Text, View } from "react-native";

type TypeSocialCard = {
  width: number;
  height: number;
  pngSource: any;
  bgcolor: string;
  text?: string;
};

export default function SocialCard({
  width,
  height,
  pngSource,
  bgcolor,
  text,
}: TypeSocialCard) {
  if (text) {
    return (
      <View
        style={{
          backgroundColor: bgcolor,
          paddingVertical: 14,
          paddingHorizontal: 12,
          gap: 8,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          width: 115,
        }}
      >
        <Image
          source={pngSource}
          style={{ width: width, height: height }}
        ></Image>
        <Text
          style={{
            color: "#EF3124",
            fontFamily: "StyreneRegular",
            fontSize: 12,
          }}
        >
          {text}
        </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: bgcolor,
        padding: 22.15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
      }}
    >
      <Image
        source={pngSource}
        style={{ width: width, height: height }}
      ></Image>
    </View>
  );
}
