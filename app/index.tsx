import MainActivity from "@/components/activities/Activity";
import MainAction from "@/components/cards/Actions";
import ExpensesList from "@/components/lists/ExpensesList";
import Bumpfest from "@/components/ui/Bumfest";
import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import MascotWindow from "@/components/ui/MascotWindow";
import ModalWindow from "@/components/ui/ModalWinndows";
import NameMascotWindow from "@/components/ui/NameMascotWindow";
import Ac2 from "@assets/images/ac2.svg";
import Ac3 from "@assets/images/ac3.svg";
import { router } from "expo-router";
import { useState } from "react";

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
  const [step, setStep] = useState(0);
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      <ScrollView className="px-[20px] flex-1 ">
        <HeaderWithLogo />

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
            <TouchableOpacity
              onPress={() => router.push("/spend")}
              activeOpacity={0.7}
            >
              <Text style={styles.small}>Посмотреть все</Text>
            </TouchableOpacity>
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

          <TouchableOpacity
            onPress={() => router.push("/subscriptions")}
            activeOpacity={0.7}
          >
            <MainAction
              text1="Управляй подписками"
              text2="в одном месте"
              pngSource={require("@assets/images/subs.png")}
              width={100}
              height={115}
            />
          </TouchableOpacity>
        </ScrollView>

        <View className="mt-[27px]">
          <View className="pl-[14px]">
            <Text style={styles.big}>Предстоящие мероприятия</Text>
          </View>
          <Bumpfest />
        </View>
      </ScrollView>
      <MascotWindow visible={step === 0} setStep={setStep} />
      <NameMascotWindow visible={step === 1} setStep={setStep} />
      <ModalWindow visible={step === 2} setStep={setStep} />
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
