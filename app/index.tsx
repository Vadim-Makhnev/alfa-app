import MainActivity from "@/components/activities/Activity";
import MainAction from "@/components/cards/Actions";
import ExpensesList from "@/components/lists/ExpensesList";
import Ac2 from "@assets/images/ac2.svg";
import Ac3 from "@assets/images/ac3.svg";
import User from "@assets/images/user.svg";
import { router } from "expo-router";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      <ScrollView className="pt-[8px] px-[30px] flex-1 ">
        <View className="flex-row justify-between mb-[36px]">
          <Image
            source={require("@assets/images/alfa.png")}
            resizeMode="cover"
            style={{ width: 30, height: 43 }}
          ></Image>

          <View className="flex-row items-center gap-[13px]">
            <Text style={[styles.text, { color: "black" }]}>Николай Ч.</Text>
            <User width={43} height={43} />
          </View>
        </View>
        <View
          className="bg-white rounded-[50px] w-full h-[326px] px-[9px] pt-[10px] mb-[24px]"
          style={styles.cardShadow}
        >
          <View className="rounded-[39px] w-full h-[208px] bg-roundedred items-center justify-between pt-[32px] pb-[12px]">
            <Text
              style={[
                styles.text,
                {
                  lineHeight: 17,
                },
              ]}
            >
              RUB
            </Text>

            <Text
              style={[
                styles.text,
                {
                  fontFamily: "StyreneRegular",
                  lineHeight: 16,
                },
              ]}
            >
              основной
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 38,
                  fontFamily: "StyreneBold",
                },
              ]}
            >
              80 936,58 ₽
            </Text>
            <TouchableWithoutFeedback>
              <View className="bg-tpwhite rounded-[65px] px-[20px] py-[15px]">
                <Text
                  style={[
                    styles.text,
                    {
                      fontFamily: "StyreneRegular",
                      lineHeight: 21,
                    },
                  ]}
                >
                  все карты
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View className="flex-row px-[13px] pt-[15px] pb-[24px] justify-between">
            <MainActivity
              text="перевод по телефону"
              pngSource={require("@assets/images/ac1.png")}
            />
            <Image source={require("@assets/images/vec.png")}></Image>
            <MainActivity text="между счетами" Icon={Ac2} />
            <Image source={require("@assets/images/vec.png")}></Image>
            <MainActivity text="сканировать QR-код" Icon={Ac3} />
          </View>
        </View>

        <View>
          <View className="flex-row justify-between items-center mb-[10px] pl-[14px] pr-[15px]">
            <Text style={styles.big}>Твои расходы</Text>
            <Text style={styles.small}>Посмотреть все</Text>
          </View>

          <ExpensesList />
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{ gap: 17 }}
          showsHorizontalScrollIndicator={false}
          className="mt-[24px]"
        >
          <MainAction
            text1="Исследуй продукты"
            text2="и открывай новое"
            pngSource={require("@assets/images/products.png")}
            width={140}
            height={90}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/cashback")}
          >
            <MainAction
              text1="Выбирай кэшбэк на август"
              text2="и экономь месяц"
              pngSource={require("@assets/images/cashbacks.png")}
              width={86}
              height={90}
            />
          </TouchableOpacity>

          <MainAction
            text1="Управляй подписками"
            text2="в одном месте"
            pngSource={require("@assets/images/subs.png")}
            width={100}
            height={115}
          />
        </ScrollView>

        <View className="mt-[27px]">
          <Image
            source={require("@assets/images/bumfest.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 267,
            }}
          ></Image>
        </View>
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
  text: {
    fontFamily: "StyreneMedium",
    color: "white",
    fontSize: 18,
    includeFontPadding: false,
  },
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
  },
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
    color: "#AAAAAA",
  },
});
