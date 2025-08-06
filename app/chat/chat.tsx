import Message from "@/components/ui/Message";
import TigerHeader from "@/components/ui/TigerHeader";
import { Image, TextInput, View } from "react-native";
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

      <View className="flex-row w-full h-[93px] bg-white items-start pt-[9px] pl-[30px] pr-[11px]">
        <View className="flex-row items-center gap-[19px] w-full">
          <Image
            source={require("@assets/images/clip.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <View className="flex-row gap-[9px]">
            <TextInput
              placeholder="Сообщение"
              placeholderTextColor={"#929CA7"}
              style={{
                backgroundColor: "#EFEFF4",
                width: 280,
                height: 46,
                borderRadius: 17,
                paddingLeft: 20,
                fontFamily: "StyreneRegular",
                fontSize: 16,
              }}
            />
            <Image
              source={require("@assets/images/micro.png")}
              style={{ width: 44, height: 44 }}
            ></Image>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
