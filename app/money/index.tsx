import Header from "@/components/ui/Header";
import { Image, Text, View } from "react-native";

export default function MoneyScreen() {
  return (
    <View className="flex-1">
      <View
        className="bg-white w-full h-[111px] pt-[56px] pl-[35px] pb-[15px] pr-[30px] mb-[24px]"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Header bg="#FFFFFF" />
      </View>
      <View className="flex-1 justify-center items-center gap-[27px] px-[20px]">
        <View style={{ marginLeft: 40 }}>
          <Image
            source={require("@assets/images/notfound.png")}
            style={{ width: 228, height: 296 }}
          ></Image>
        </View>
        <View className="items-center gap-[6px]">
          <Text
            style={{ fontFamily: "StyreneMedium", fontSize: 20 }}
          >{`эта страница пока не готова :(`}</Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "StyreneRegular",
              fontSize: 15,
            }}
          >
            возвращайся чуть позже, а мы порадуем новыми и интересными
            продуктами!
          </Text>
        </View>
      </View>
    </View>
  );
}
