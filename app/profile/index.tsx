import User from "@/components/cards/User";
import Header from "@/components/ui/Header";
import Barrow from "@assets/images/barrow.svg";
import Edit2 from "@assets/images/edit-2.svg";
import Lock from "@assets/images/lock.svg";
import Secret from "@assets/images/secret.svg";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = ["Моя визитка", "Коллекция", "Знакомые"];
  const secret = ["Звезда танцпола", "Секретное движение"];
  const collection1 = [
    "Привет-Привет!",
    "Уже бегу",
    "Режим перезагрузки",
    "В игре!",
  ];

  const images = [
    require("@assets/images/hello.png"),
    require("@assets/images/run.png"),
    require("@assets/images/reboot.png"),
    require("@assets/images/game.png"),
  ];

  const images2 = [
    require("@assets/images/dance.png"),
    require("@assets/images/secret.svg"),
  ];

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <View
            className="gap-[17px] py-[23px] pl-[24px] pr-[25px]"
            style={{ backgroundColor: "white", borderRadius: 50 }}
          >
            <Text style={{ fontFamily: "StyreneMedium", fontSize: 20 }}>
              Так выглядит твоя визитка
            </Text>
            <Image
              source={require("@assets/images/business-card.png")}
              style={{ height: 218, width: "100%" }}
            ></Image>
            <Text
              style={{
                fontFamily: "StyreneRegular",
                fontSize: 12,
                color: "#AAAAAA",
              }}
            >
              Посмотреть полностью
            </Text>
          </View>
        );
      case 1:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View className="mb-[13px]">
                <Text
                  style={{
                    fontFamily: "StyreneMedium",
                    fontSize: 20,
                  }}
                >
                  Стандартная коллекция
                </Text>
                <Text
                  style={{
                    fontFamily: "StyreneRegular",
                    fontSize: 15,
                    color: "#AAAAAA",
                  }}
                >
                  БАМпайся и открывай новые движения!
                </Text>
              </View>

              <View
                className="flex-row gap-[16px] justify-evenly"
                style={{ flexWrap: "wrap" }}
              >
                {collection1.map((col, i) => (
                  <View
                    key={i}
                    style={[
                      {
                        backgroundColor: "white",
                        width: 168,
                        height: 174,
                        alignItems: "center",
                        gap: 11,
                        justifyContent: "center",
                        borderRadius: 28,
                      },
                      styles.cardShadow,
                      i === 3 && { opacity: 0.5 },
                    ]}
                  >
                    <Image
                      source={images[i]}
                      style={{ width: 104, height: 104 }}
                    ></Image>
                    <Text style={{ fontFamily: "StyreneMedium", fontSize: 12 }}>
                      {col}
                    </Text>

                    {i === 3 ? (
                      <View
                        style={{
                          position: "absolute",
                          top: 7,
                          right: 7,
                          backgroundColor: "#E5E5E5",
                          padding: 7,
                          borderRadius: 50,
                        }}
                      >
                        <Lock />
                      </View>
                    ) : null}
                  </View>
                ))}
              </View>
            </View>

            <View className="mt-[24px] mb-[20px]">
              <View className="mb-[13px]">
                <Text style={{ fontFamily: "StyreneMedium", fontSize: 20 }}>
                  Редкая коллекция
                </Text>
                <Text
                  style={{
                    fontFamily: "StyreneRegular",
                    fontSize: 15,
                    color: "#AAAAAA",
                  }}
                >
                  Создавай группы, выбирай цель и открывай!
                </Text>
              </View>

              <View
                className="flex-row gap-[16px] justify-evenly"
                style={{ flexWrap: "wrap" }}
              >
                {secret.map((col, i) => (
                  <View
                    key={i}
                    style={[
                      {
                        backgroundColor: "white",
                        width: 168,
                        height: 174,
                        alignItems: "center",
                        gap: 11,
                        justifyContent: "center",
                        borderRadius: 28,
                      },
                      styles.cardShadow,
                      i === 1 && { opacity: 0.5 },
                    ]}
                  >
                    {i === 0 ? (
                      <Image
                        source={images2[i]}
                        style={{ width: 104, height: 104 }}
                      ></Image>
                    ) : (
                      <View
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: 20,
                          width: 104,
                          height: 104,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Secret />
                      </View>
                    )}

                    <Text style={{ fontFamily: "StyreneMedium", fontSize: 12 }}>
                      {col}
                    </Text>
                    {i === 1 ? (
                      <View
                        style={{
                          position: "absolute",
                          top: 7,
                          right: 7,
                          backgroundColor: "#E5E5E5",
                          borderRadius: 50,
                          padding: 7,
                        }}
                      >
                        <Lock />
                      </View>
                    ) : null}
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        );
      case 2:
        return (
          <View>
            <View className="mb-[16px]">
              <Text style={{ fontFamily: "StyreneMedium", fontSize: 20 }}>
                Тут собраны все твои знакомые
              </Text>
              <Text
                style={{
                  fontFamily: "StyreneRegular",
                  fontSize: 15,
                  color: "#AAAAAA",
                }}
              >
                БАМпайся и получай полезные контакты!
              </Text>
            </View>

            <View
              style={{
                alignSelf: "flex-end",
                marginRight: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                backgroundColor: "#E5E5E5",
                paddingVertical: 10.5,
                paddingHorizontal: 20,
                borderRadius: 16,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "StyreneRegular",
                  fontSize: 12,
                  color: "#AAAAAA",
                }}
              >
                Все
              </Text>
              <Barrow width={9} height={9} />
            </View>

            <View className="gap-[13px]">
              <User
                pngSource={require("@assets/images/ilya4.png")}
                name="Портнов Илья"
                job="Продуктовый аналитик"
              />

              <User
                pngSource={require("@assets/images/nastya4.png")}
                name="Патрикеева Анастасия"
                job="Бизнес-аналитик"
              />

              <User
                pngSource={require("@assets/images/olya4.png")}
                name="Волчкова Ольга"
                job="Финансовый аналитик"
              />

              <User
                pngSource={require("@assets/images/vadim4.png")}
                name="Махнев Вадим"
                job="Разработчик"
              />
            </View>
          </View>
        );
    }
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View className="flex-1 px-[15px]">
        <Header display={false} />
        <View style={{ marginBottom: 22 }}>
          <View className="items-center">
            <View>
              <Image
                source={require("@assets/images/kolya3x.png")}
                style={{ width: 140, height: 140, position: "relative" }}
              ></Image>

              <View
                style={{
                  position: "absolute",
                  right: 5,
                  top: 5,
                  backgroundColor: "#E5E5E5",
                  padding: 7,
                  borderRadius: 50,
                }}
              >
                <Edit2 width={14} height={14} />
              </View>
            </View>
            <Text style={{ fontFamily: "StyreneMedium", fontSize: 20 }}>
              Николай Ч.
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between mb-[16px]">
          {buttons.map((btn, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveIndex(i)}
              style={{
                paddingVertical: 10.5,
                paddingHorizontal: 15.5,
                backgroundColor: activeIndex === i ? "#EF3124" : "#E5E5E5",
                borderRadius: 16,
              }}
            >
              <Text
                style={[
                  styles.med,
                  { color: activeIndex === i ? "white" : "#AAAAAA" },
                ]}
              >
                {btn}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {renderContent()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  med: {
    fontFamily: "StyreneMedium",
    fontSize: 12,
    color: "#AAAAAA",
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 5,
  },
});
