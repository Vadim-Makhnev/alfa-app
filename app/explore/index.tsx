import ExploreCard from "@/components/cards/ExploreCard";
import Header from "@/components/ui/Header";
import { View } from "react-native";

export default function ExploreProducts() {
  return (
    <View className="flex-1">
      <View
        className="bg-white w-full h-[111px] pt-[56px] pl-[35px] pb-[15px] pr-[30px] mb-[24px]"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Header bg="#FFFFFF" />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 20,
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-evenly",
        }}
      >
        <ExploreCard
          pngSource={require("@assets/images/newcard.png")}
          name="новая карта"
          width={83}
          height={68}
        />

        <ExploreCard
          pngSource={require("@assets/images/money.png")}
          name="накопления"
          width={83}
          height={68}
        />

        <ExploreCard
          pngSource={require("@assets/images/mobile.png")}
          name="мобильная связь"
          width={83}
          height={72}
        />

        <ExploreCard
          pngSource={require("@assets/images/alfabum.png")}
          name="новая карта"
          width={83}
          height={72}
        />

        <ExploreCard
          pngSource={require("@assets/images/invest.png")}
          name="новая карта"
          width={83}
          height={68}
        />

        <ExploreCard
          pngSource={require("@assets/images/own.png")}
          name="новая карта"
          width={83}
          height={68}
        />
      </View>
    </View>
  );
}
