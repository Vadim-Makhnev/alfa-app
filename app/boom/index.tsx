import BoomCard from "@/components/cards/BoomCard";
import BoomComponent from "@/components/ui/BoomComponent";
import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoomScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-[30px] flex-1">
        <HeaderWithLogo />

        <View
          style={[
            {
              backgroundColor: "white",
              borderRadius: 50,
              width: "100%",
              paddingRight: 11,
              paddingLeft: 12,
              paddingTop: 23,
              paddingBottom: 26,
            },
            styles.cardShadow,
          ]}
        >
          <BoomComponent />

          <View
            style={{
              marginTop: 12,
              paddingLeft: 19,
              gap: 12,
              paddingRight: 47,
            }}
          >
            <Text style={[styles.textreg, { fontSize: 15, color: "black" }]}>
              ТОП-категорий по БАМам
            </Text>

            <BoomCard
              pngSource={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              percentage="31%"
            />

            <BoomCard
              pngSource={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              percentage="31%"
            />

            <BoomCard
              pngSource={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              percentage="31%"
            />

            <BoomCard
              pngSource={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              percentage="31%"
            />

            <BoomCard
              pngSource={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              percentage="31%"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  textreg: {
    fontFamily: "StyreneRegular",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    includeFontPadding: false,
  },
});
