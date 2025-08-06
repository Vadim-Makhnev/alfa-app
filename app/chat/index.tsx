import ChatCard from "@/components/cards/Chat";
import Search from "@assets/images/search.svg";
import User from "@assets/images/user.svg";
import {
  Image,
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
      <ScrollView className="pt-[8px] px-[30px] flex-1 ">
        <View className="flex-row justify-between mb-[14px]">
          <Image
            source={require("@assets/images/alfa.png")}
            resizeMode="cover"
            style={{ width: 30, height: 43 }}
          ></Image>

          <View className="flex-row items-center gap-[13px]">
            <Text style={styles.text}>Николай Ч.</Text>
            <User width={43} height={43} />
          </View>
        </View>

        <View
          className="w-full rounded-[10px]"
          style={{ backgroundColor: "#DCDCDC", marginBottom: 14 }}
        >
          <View className="flex-row items-center justify-center gap-[12px] h-[38px]">
            <Search />
            <Text style={[styles.text, { color: "#AAAAAA" }]}>Поиск</Text>
          </View>
        </View>

        <View className="gap-[8px]">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("Chat with tiger")}
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
            pngSource={require("@assets/images/tiger.png")}
            name="Тигрик"
            msg={`Николай, привет!\nЯ твой личный AI-помощник...`}
            date="31.07"
            notification="1"
          />

          <ChatCard
            pngSource={require("@assets/images/tiger.png")}
            name="Тигрик"
            msg={`Николай, привет!\nЯ твой личный AI-помощник...`}
            date="31.07"
            notification="1"
          />

          <ChatCard
            pngSource={require("@assets/images/tiger.png")}
            name="Тигрик"
            msg={`Николай, привет!\nЯ твой личный AI-помощник...`}
            date="31.07"
            notification="1"
          />

          <ChatCard
            pngSource={require("@assets/images/tiger.png")}
            name="Тигрик"
            msg={`Николай, привет!\nЯ твой личный AI-помощник...`}
            date="31.07"
            notification="1"
          />
        </View>
      </ScrollView>
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
