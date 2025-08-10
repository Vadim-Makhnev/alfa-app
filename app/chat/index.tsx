import ChatCard from "@/components/cards/Chat";
import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import Search from "@assets/images/search.svg";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      <View className="px-[20px] flex-1 ">
        <HeaderWithLogo />

        <View
          className="w-full rounded-[10px]"
          style={{ backgroundColor: "#DCDCDC", marginBottom: 14 }}
        >
          <View className="flex-row items-center justify-center gap-[12px] h-[38px]">
            <Search />
            <Text style={[styles.text, { color: "#AAAAAA" }]}>Поиск</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-[8px] mb-[24px]">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/chat/chat")}
            >
              <ChatCard
                pngSource={require("@assets/images/tiger.png")}
                name="Тигрик"
                msg={`Николай, привет!\nЯ твой личный AI-помощник...`}
                date="31.07"
                notification="1"
              />
            </TouchableOpacity>

            <ChatCard
              pngSource={require("@assets/images/familia.png")}
              name="Семья"
              msg={`Сыночке-корзиночке на кофе`}
              date="09:23"
              notification="2"
              group={true}
              from="Мама:"
              sum=" + 1000 ₽"
              noname={true}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/chat/grinch")}
            >
              <ChatCard
                pngSource={require("@assets/images/grinch.png")}
                name="Гринчи"
                msg={`я в груше на покре, срочно нужен бам!!!!`}
                date="08:57"
                notification="1"
                group={true}
                from={"Илья:"}
              />
            </TouchableOpacity>

            <ChatCard
              pngSource={require("@assets/images/olyachat.png")}
              name="Ольга В."
              msg={`за пиццу и... спасибо за бам`}
              date="31.07"
              from={"Ольга В.:"}
              sum={" + 300 ₽"}
              noname={true}
            />

            <ChatCard
              pngSource={require("@assets/images/nastyachat.png")}
              name="Настя П."
              msg={`ты где? го бампнимся в кофиксе?))`}
              date="29.07"
              noname={true}
            />

            <ChatCard
              pngSource={require("@assets/images/ilyachat.png")}
              name="Илья П."
              msg="сейчас подойду"
              date="29.07"
              noname={true}
            />

            <ChatCard
              pngSource={require("@assets/images/vadimchat.png")}
              name="Вадим М."
              msg={`хочу повысить кэшбек на дринкит, может сходим туда?`}
              date="28.07"
              noname={true}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "StyreneMedium",
    fontSize: 18,
    includeFontPadding: false,
  },
});
