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
              width={35}
              height={35}
              fill="#EF3124"
            />

            <CashbackCard
              pngSource={require("@assets/images/burger.png")}
              percentage="7%"
              text="Фастфуд"
              bg="#01E7E5"
              width={28}
              height={28}
              fill="#EF3124"
            />

            <CashbackCard
              pngSource={require("@assets/images/beauty.png")}
              percentage="2%"
              text="Красота"
              bg="#B7B0FD"
              width={35}
              height={35}
              fill="#EF3124"
            />

            <CashbackCard
              pngSource={require("@assets/images/train.png")}
              percentage="4%"
              text="Ж/д билеты"
              bg="#F9B9AD"
              width={35}
              height={35}
            />

            <CashbackCard
              pngSource={require("@assets/images/drug.png")}
              percentage="5%"
              text="Аптеки"
              bg="#DCD0EE"
              width={30}
              height={30}
            />

            <CashbackCard
              pngSource={require("@assets/images/bone.png")}
              percentage="5%"
              text="Зоомагазины"
              width={35}
              height={35}
              bg="#FF8B83"
            />

            <CashbackCard
              pngSource={require("@assets/images/sim.png")}
              percentage="100%"
              text="Альфа-Мобайл"
              width={35}
              height={35}
              fill="#EF3124"
            />

            <CashbackCard
              pngSource={require("@assets/images/restaurants.png")}
              percentage="1%"
              text="За все покупки"
              fill="#EF3124"
              width={35}
              height={35}
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
              pngSource={require("@assets/images/cofix.png")}
              percentage="10%"
              text="Cofix"
              width={50}
              height={50}
            />

            <CashbackCard
              pngSource={require("@assets/images/french.png")}
              percentage="10%"
              text="French Bakery"
              width={50}
              height={50}
              fill="#EF3124"
            />

            <CashbackCard
              pngSource={require("@assets/images/whoosh.png")}
              percentage="10%"
              text="Whoosh"
              width={50}
              height={50}
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
