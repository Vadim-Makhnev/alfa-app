import Chart from "@/components/bars/Chart";
import Pie from "@/components/bars/Pie";
import SpendingList from "@/components/lists/SpendingList";
import Header from "@/components/ui/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Spend() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <ScrollView className="pt-[8px] px-[30px] flex-1">
        <Header />

        <View className="mt-[36px] h-[200px] w-full bg-white rounded-[50px] pl-[22px] py-[23px] pr-[15px] justify-between">
          <View className="pl-[6px] mb-[6px]">
            <Text style={styles.big}>Траты по месяцам</Text>
            <Text style={styles.small}>и прогноз на август</Text>
          </View>

          <View className="flex-row w-full justify-between items-end">
            <Chart width={52} height={23} sum="22 981 ₽" month="апрель" />
            <Chart width={52} height={44} sum="41 328 ₽" month="май" />
            <Chart width={52} height={40} sum="37 476 ₽" month="июнь" />
            <Chart width={52} height={72} sum="80 936 ₽" month="июль" />
            <Chart
              width={52}
              height={63}
              sum="63 548 ₽"
              month="август"
              color="#AAAAAA"
            />
          </View>
        </View>

        <View className="mt-[24px] w-full rounded-[50px] pt-[23px] pb-[18px] pl-[27px] pr-[50px] bg-white">
          <Pie />
        </View>

        <View className="bg-white pt-[22px] pb-[27px] pl-[30px] pr-[25px] rounded-[50px] mt-[24px] mb-[24px]">
          <Text style={[styles.small, { marginBottom: 8 }]}>4 июля</Text>
          <View className="gap-[19px]">
            <SpendingList
              source={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              sum="–260,00 ₽"
              cashback="+ 14 ₽"
            />

            <SpendingList
              source={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              sum="–260,00 ₽"
              cashback="+ 14 ₽"
            />

            <SpendingList
              source={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              sum="–260,00 ₽"
              isTransfer={true}
            />

            <SpendingList
              source={require("@assets/images/cofix.png")}
              name="Cofix"
              category="Рестораны"
              sum="–260,00 ₽"
              cashback="+ 14 ₽"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
  },
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
    color: "#AAAAAA",
  },
});
