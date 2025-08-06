import SubCrad from "@/components/cards/Sub";
import Header from "@/components/ui/Header";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SubscriptionsScreen() {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1">
      <View className="px-[30px] flex-1">
        <Header />

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            paddingBottom: 30,
          }}
        >
          <View className="mt-[24px] gap-[12px]">
            <Text style={styles.text}>Твои подписки</Text>

            <SubCrad
              pngSource={require("@assets/images/yaplus.png")}
              name="Яндекс Плюс"
              price="99 ₽"
              month="в месяц"
            />

            <SubCrad
              pngSource={require("@assets/images/whoosh.png")}
              name="Whoosh"
              price="199 ₽"
              month="в месяц"
            />

            <SubCrad
              pngSource={require("@assets/images/apple.png")}
              name="Apple Music"
              price="99 ₽"
              month="в месяц"
            />

            <SubCrad
              pngSource={require("@assets/images/tbank.png")}
              name="Т-Банк"
              price="299 ₽"
              month="в месяц"
            />
          </View>

          <View className="flex-row justify-between items-center">
            <Text style={[styles.price, { color: "#AAAAAA", fontSize: 16 }]}>
              В месяц на подписки ты тратишь:
            </Text>
            <Text style={styles.price}>696 ₽</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
  },
  price: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
  },
});
