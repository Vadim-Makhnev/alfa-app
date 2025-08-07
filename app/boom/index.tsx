import BoomCard from "@/components/cards/BoomCard";
import BoomComponent from "@/components/ui/BoomComponent";
import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

import Wave1 from "@assets/images/wave1.svg";
import Wave2 from "@assets/images/wave2.svg";
import Wave3 from "@assets/images/wave3.svg";

export default function BoomScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <ScrollView className="px-[30px] flex-1">
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

        {/**Нижний блок с группами */}
        <View
          style={{
            backgroundColor: "white",
            marginTop: 24,
            width: "100%",
            paddingHorizontal: 17,
            paddingTop: 23,
            paddingBottom: 12,
            borderRadius: 50,
          }}
        >
          <Text style={[styles.textmed, { paddingLeft: 11, paddingBottom: 1 }]}>
            Твои группы
          </Text>

          <View className="flex-row">
            {/**Блок 1 */}
            <View className="items-center">
              {/** Первый круг */}

              <View
                style={{
                  position: "relative",
                  borderRadius: 61.5,
                  overflow: "hidden",
                }}
              >
                <Svg width={123} height={123}>
                  <Circle
                    r={61.5}
                    cx={61.5}
                    cy={61.5}
                    fill={"#FFF0EF"}
                  ></Circle>
                </Svg>

                <Wave1
                  style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 3,
                  }}
                />
                <Wave2
                  style={{
                    position: "absolute",
                    bottom: 6.4,
                    zIndex: 2,
                  }}
                />
                <Wave3
                  style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 1,
                  }}
                />
              </View>

              {/** Первый круг */}
              <Text>База</Text>
              <Text>3 участника</Text>
            </View>
            {/**Блок 1 */}

            {/**Блок 2 */}
            <View></View>

            {/**Блок 2 */}
          </View>
        </View>

        {/**Нижний блок с группами */}
      </ScrollView>
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

  textmed: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
    includeFontPadding: false,
  },
});
