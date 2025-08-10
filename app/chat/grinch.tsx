import Message from "@/components/ui/Message";
import TigerHeader from "@/components/ui/TigerHeader";
import { Image, ScrollView, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GrinchChat() {
  return (
    <SafeAreaView edges={[]} className="flex-1">
      <View
        className="bg-white w-full h-[111px] pt-[56px] pl-[35px] pb-[15px]"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <TigerHeader
          pngSource={require("@assets/images/grinch.png")}
          name="Гринчи"
          desc="5 участников"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-end gap-[19px] mb-[18px]">
          <Message
            pngSource={require("@assets/images/olyachat.png")}
            msg={`очень классная прогулка вышла, нужно будет обязательно прийти в тот парк еще раз`}
            side="left"
          />

          <Message
            pngSource={require("@assets/images/nastyachat.png")}
            msg={`не хотите сходить поиграть в какие-нибудь автоматы?`}
            side="left"
          />

          <Message
            pngSource={require("@assets/images/ilyachat.png")}
            msg={`вообще можно было бы единственное я не знаю, где в мск их прям много`}
            side="left"
          />

          <Message
            pngSource={require("@assets/images/cuser.png")}
            msg={`давайте у бота спросим`}
            side="right"
          />

          <Message
            pngSource={require("@assets/images/cuser.png")}
            msg={`/aibot`}
            side="right"
          />

          <Message
            pngSource={require("@assets/images/ctiger.png")}
            msg={`Привет! Я ваш личный AI-помощник. Что подсказать?`}
            side="left"
          />

          <Message
            pngSource={require("@assets/images/cuser.png")}
            msg={`Где в москве можно поиграть в автоматы?`}
            side="right"
          />

          <Message
            pngSource={require("@assets/images/ctiger.png")}
            msg={`Нашел классное место – Музей Пинбола GoPinball!\nВот адрес: Россия, Москва, улица Крымский Вал`}
            side="left"
          />
        </View>
      </ScrollView>

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
                width: "80%",
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
