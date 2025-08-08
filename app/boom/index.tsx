import BoomCard from "@/components/cards/BoomCard";
import BoomComponent from "@/components/ui/BoomComponent";
import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

import Wave1 from "@assets/images/wave1.svg";
import Wave2 from "@assets/images/wave2.svg";
import Wave3 from "@assets/images/wave3.svg";
import Wave4 from "@assets/images/wave4.svg";
import Wave5 from "@assets/images/wave5.svg";
import Wave6 from "@assets/images/wave6.svg";

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
            paddingLeft: 36,
            paddingRight: 29,
            paddingTop: 23,
            paddingBottom: 12,
            borderRadius: 50,
            marginBottom: 24,
          }}
        >
          <Text style={[styles.textmed, { paddingBottom: 10 }]}>
            Твои группы
          </Text>
          <View className="flex-row justify-between">
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

                <Svg width={123} height={123}>
                  <Circle
                    r={61.5}
                    cx={61.5}
                    cy={61.5}
                    fill={"#FFF0EF"}
                  ></Circle>
                </Svg>

                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 123,
                    height: 123,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    paddingVertical: 25,
                    paddingLeft: 5,
                    zIndex: 4,
                  }}
                >
                  <Image
                    source={require("@assets/images/ilya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />
                  <Image
                    source={require("@assets/images/vadim.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />
                  {/* Третья фотка — можно сделать "перенос" */}
                  <Image
                    source={require("@assets/images/kolya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      position: "absolute",
                      top: 63,
                      right: 43,
                    }}
                  />
                </View>
              </View>

              {/** Первый круг */}
              <Text style={[styles.textreg, { color: "balck", fontSize: 15 }]}>
                База
              </Text>
              <Text style={[styles.textreg, { color: "#AAAAAA" }]}>
                3 участника
              </Text>
            </View>

            {/**Блок 1 */}

            {/**Блок 2 */}

            <View className="items-center">
              <View
                style={{
                  position: "relative",
                  borderRadius: 61.5,
                  overflow: "hidden",
                }}
              >
                <Wave4
                  style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 3,
                  }}
                />
                <Wave5
                  style={{
                    position: "absolute",
                    bottom: 15,
                    zIndex: 2,
                  }}
                />
                <Wave6
                  style={{
                    position: "absolute",
                    bottom: 15,
                    zIndex: 1,
                  }}
                />

                <Svg width={123} height={123}>
                  <Circle
                    r={61.5}
                    cx={61.5}
                    cy={61.5}
                    fill={"#FFF0EF"}
                  ></Circle>
                </Svg>

                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 123,
                    height: 123,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",

                    rowGap: 2,
                    columnGap: 6,
                    paddingVertical: 25,
                    paddingLeft: 5,
                    zIndex: 4,
                  }}
                >
                  <Image
                    source={require("@assets/images/ilya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />
                  <Image
                    source={require("@assets/images/nastya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />

                  <Image
                    source={require("@assets/images/olya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />

                  <Image
                    source={require("@assets/images/vadim.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                    }}
                  />
                  {/* Третья фотка — можно сделать "перенос" */}
                  <Image
                    source={require("@assets/images/kolya.png")}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      position: "absolute",
                      top: 41,
                      right: 42,
                    }}
                  />
                </View>
              </View>
              <Text style={[styles.textreg, { color: "balck", fontSize: 15 }]}>
                Гринчи
              </Text>
              <Text style={[styles.textreg, { color: "#AAAAAA" }]}>
                5 участников
              </Text>
            </View>

            {/**Блок 2 */}
          </View>
          {/** Вот тут общий блок двух групп */}
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
