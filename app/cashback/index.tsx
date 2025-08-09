import CashbackCard from "@/components/cards/Cashback";
import Header from "@/components/ui/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CashbackScreen() {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 ">
      <ScrollView stickyHeaderIndices={[0]} className="px-[20px] flex-1">
        <Header />

        <View className="bg-white rounded-[50px] py-[23px] px-[28px]">
          <Text style={styles.big}>Какие 5 категорий</Text>
          <Text style={[styles.big, { marginBottom: 19 }]}>
            выбираешь на август?
          </Text>

          <View className="gap-[16px] mb-[34px]">
            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
              fill="red"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
              fill="red"
            />
          </View>

          <View className="mb-[19px]">
            <Text style={styles.big}>Выбери 1 кэшбэк из</Text>
            <Text style={styles.big}>любимых категорий БАМов</Text>
            <Text style={styles.small}>
              за заполнение шкалы лояльности в июле
            </Text>
          </View>

          <View className="gap-[16px]">
            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
            />

            <CashbackCard
              pngSource={require("@assets/images/star.png")}
              percentage="1%"
              text="За все покупки"
              fill="red"
            />

            <View className="gap-[5px]">
              <View
                className="w-full px-[36px] py-[7px] rounded-[16px] h-[47px]"
                style={{
                  backgroundColor: "#F2F2F2",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.middle}>Готово</Text>
              </View>
              <Text
                style={[
                  styles.small,
                  { textAlign: "center", textDecorationLine: "underline" },
                ]}
              >
                Условия программы лояльности
              </Text>
            </View>
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
    fontSize: 12,
    color: "#AAAAAA",
  },
  middle: {
    fontFamily: "StyreneMedium",
    fontSize: 15,
    color: "#AAAAAA",
  },
});
