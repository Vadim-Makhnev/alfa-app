import { FC } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

type MainActivityProps = {
  text: string;
  Icon?: FC<SvgProps>;
  pngSource?: ImageSourcePropType;
};

export default function MainActivity({
  text,
  Icon,
  pngSource,
}: MainActivityProps) {
  return (
    <View className="gap-[15px] w-[93px] items-center">
      {Icon ? (
        <Icon width={31} height={31} />
      ) : pngSource ? (
        <Image source={pngSource} style={{ width: 31, height: 31 }} />
      ) : null}
      <Text
        style={{
          fontFamily: "StyreneRegular",
          fontSize: 12,
          textAlign: "center",
          lineHeight: 14,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
