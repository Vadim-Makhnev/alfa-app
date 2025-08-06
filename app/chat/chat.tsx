import Message from "@/components/ui/Message";
import TigerHeader from "@/components/ui/TigerHeader";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatWithTiger() {
  return (
    <SafeAreaView edges={[]} className="flex-1">
      <View
        className="bg-white w-full h-[111px] pt-[56px] pl-[35px] pb-[15px]"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <TigerHeader />
      </View>

      <View className="flex-1 items-center justify-end gap-[19px] mb-[18px]">
        <Message
          pngSource={require("@assets/images/ctiger.png")}
          msg={`Николай, привет!\nЯ твой личный AI-помощник. Хочешь расскажу что я умею?`}
          side="left"
        />

        <Message
          pngSource={require("@assets/images/cuser.png")}
          msg={`привет, что ты умеешь?`}
          side="right"
        />

        <Message
          pngSource={require("@assets/images/ctiger.png")}
          msg={`Я могу построить финансовый план, оптимизировать траты, помочь по вопросам, связанным с банком и многое другое :) Что тебя интересует?`}
          side="left"
        />
      </View>
    </SafeAreaView>
  );
}
