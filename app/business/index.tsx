import SocialCard from "@/components/cards/Socials";
import Profile from "@assets/images/profile.svg";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function BusinessCrad() {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          position: "relative",
          marginBottom: 88,
        }}
      >
        <Svg width="440" height="227" viewBox="0 0 440 227">
          <Circle
            cx={"219.5"}
            cy={"-13.5"}
            r={"240.5"}
            fill={"#EF3124"}
          ></Circle>
        </Svg>

        <Image
          source={require("@assets/images/nastyap.png")}
          style={{ width: 197, height: 197, position: "absolute", top: 90 }}
        ></Image>
      </View>

      <View className="px-[20px] items-center">
        <View className="items-center gap-[14px] mb-[51px]">
          <View className="items-center gap-[2px]">
            <Text style={styles.big}>Патрикеева Анастасия</Text>
            <Text style={styles.middle}>Бизнес-аналитик</Text>
          </View>
          <View
            className="flex-row"
            style={{
              backgroundColor: "#EF3124",
              paddingVertical: 11,
              paddingHorizontal: 21,
              borderRadius: 16,
              alignItems: "center",
              gap: 8,
            }}
          >
            <Profile />
            <Text
              style={{
                fontFamily: "StyreneMedium",
                fontSize: 15,
                color: "white",
              }}
            >
              Добавить в контакты
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text
            style={[
              styles.middle,
              { marginBottom: 11, alignSelf: "center", color: "black" },
            ]}
          >
            Мои контакты в социальных сетях
          </Text>
          <View className="flex-row justify-between w-full">
            <SocialCard
              width={53.8}
              height={53.8}
              pngSource={require("@assets/images/telegram.png")}
              bgcolor="#EF3124"
            />

            <SocialCard
              width={53.8}
              height={53.8}
              pngSource={require("@assets/images/vk.png")}
              bgcolor="#EF3124"
            />

            <SocialCard
              width={53.8}
              height={53.8}
              pngSource={require("@assets/images/whatsapp.png")}
              bgcolor="#EF3124"
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text
            style={[
              styles.middle,
              { marginBottom: 11, alignSelf: "center", color: "black" },
            ]}
          >
            Полезная информация обо мне
          </Text>
          <View className="flex-row justify-between w-full">
            <SocialCard
              width={55.36}
              height={55.36}
              pngSource={require("@assets/images/education.png")}
              bgcolor="white"
              text="Образование"
            />

            <SocialCard
              width={55.36}
              height={55.36}
              pngSource={require("@assets/images/cv.png")}
              bgcolor="white"
              text="Биография"
            />

            <SocialCard
              width={55.36}
              height={55.36}
              pngSource={require("@assets/images/education.png")}
              bgcolor="white"
              text="Портфолио"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 22,
            width: "100%",
            borderRadius: 16,
            marginTop: 20,
          }}
        >
          <Text style={styles.middle}>Пропустить</Text>
        </View>
      </View>
    </View>
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
