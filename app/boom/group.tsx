import Header from "@/components/ui/Header";
import Edit from "@assets/images/edit.svg";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoomGroup() {
  const photos = [
    require("@assets/images/ilya.png"),
    require("@assets/images/nastya.png"),
    require("@assets/images/olya.png"),
    require("@assets/images/vadim.png"),
  ];

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View className="flex-1 px-[20px]">
        <Header path={"/boom"} />

        {/**Основной блок со всеми элементами*/}
        <View
          style={[
            {
              width: "100%",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 28,
              paddingTop: 23,
              paddingBottom: 25,
              borderRadius: 50,
              marginBottom: 24,
            },
            styles.cardShadow,
          ]}
        >
          {/**Вложенный блок со всеми компонентами */}

          <View>
            {/** Первый блок с текстом и аватарками*/}

            <View style={{ gap: 10, marginBottom: 15 }}>
              <Text style={styles.textmed}>Группа: Гринчи</Text>

              {/**Внутренний блок аватары и значок карандаша*/}

              <View className="flex-row items-center gap-[10px]">
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {photos.map((uri, index) => (
                      <Image
                        key={index}
                        source={uri}
                        style={{
                          width: 32,
                          height: 32,
                          marginLeft: index === 0 ? 0 : -8,
                        }}
                      />
                    ))}
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: 50,
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Edit width={15} height={15} />
                </View>
              </View>

              {/**Внутренний блок аватары и значок карандаша*/}
            </View>

            {/** Первый блок с текстом и аватарками*/}

            {/**Блок 1 */}
            <View className="flex-row justify-between items-center mb-[14px]">
              <View
                style={[
                  {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 28,
                    alignItems: "center",
                    paddingHorizontal: 9,
                    paddingTop: 19,
                    paddingBottom: 32,
                    gap: 20,
                  },
                  styles.cardShadow,
                ]}
              >
                <View className="gap-[3px] items-center">
                  <Text
                    style={[styles.textmed, { fontSize: 18, color: "#EF3124" }]}
                  >
                    Ваша цель
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#8FFF00",
                      borderRadius: 16,
                      paddingHorizontal: 28,
                      paddingVertical: 5,
                    }}
                  >
                    <Text>Путешествия</Text>
                  </View>
                </View>
                <Text style={styles.italic}>
                  {`Заполняйте шкалу\nи получайте\nгарантированный\nкэшбэк на цель!`}
                </Text>
              </View>

              <Image
                source={require("@assets/images/wavesper.png")}
                style={{ width: 123, height: 123 }}
              ></Image>
            </View>

            {/**Блок 1 */}

            <View className="flex-row gap-[14px] mb-[18px]">
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 13,
                  borderRadius: 22,
                  backgroundColor: "#EF3124",
                }}
              >
                <Text style={[styles.textmed, { color: "white" }]}>
                  20 145,00 ₽
                </Text>
                <Text style={[styles.textreg, { color: "#F0F0F0" }]}>
                  Общие траты
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 13,
                  borderRadius: 22,
                  backgroundColor: "#EF3124",
                }}
              >
                <Text style={[styles.textmed, { color: "white" }]}>112</Text>
                <Text style={[styles.textreg, { color: "#F0F0F0" }]}>
                  БАМов совершено
                </Text>
              </View>
            </View>

            <View>
              <Text style={[styles.textmed, { fontSize: 14 }]}>
                🔥 Кажется вы давно не БАМпились:
              </Text>
              <Text style={[styles.textreg, { color: "black" }]}>
                совершайте новые БАМы и получите х2 заполнение групповой шкалы
              </Text>
            </View>
          </View>

          {/**Вложенный блок со всеми компонентами */}
        </View>

        {/**Основной блок со всеми элементами*/}

        <View className="gap-[10px]">
          <Text
            style={[styles.textmed, { fontSize: 15, paddingLeft: 14 }]}
          >{`Посетите мероприятие вместе\nи повысьте групповую шкалу!`}</Text>
          <View
            style={{
              paddingVertical: 11,
              backgroundColor: "white",
              overflow: "hidden",
              paddingLeft: 16,
              position: "relative",
              borderRadius: 28,
            }}
          >
            <View>
              <Text>
                <Text style={{ fontFamily: "StyreneMedium", fontSize: 12 }}>
                  Стратегическая слепота:
                </Text>
                <Text style={{ fontFamily: "StyreneRegular", fontSize: 12 }}>
                  {" "}
                  Почему
                </Text>
              </Text>
              <Text style={{ fontFamily: "StyreneRegular", fontSize: 12 }}>
                компании не видят сигналы рынка?
              </Text>

              <View
                style={{
                  backgroundColor: "#8FFF00",
                  borderRadius: 16,
                  paddingVertical: 6,
                  paddingHorizontal: 18,
                  alignSelf: "flex-start",
                  marginTop: 7,
                }}
              >
                <Text style={{ fontFamily: "StyreneMedium", fontSize: 10 }}>
                  23 августа
                </Text>
              </View>

              <Text
                style={{
                  marginTop: 7,
                  fontFamily: "StyreneItalic",
                  fontSize: 9,
                  color: "#AAAAAA",
                }}
              >
                {`Обсудим на лекции с Николаем Соустиным,\nпрофессором маркетинга НИУ ВШЭ`}
              </Text>

              <Image
                source={require("@assets/images/soustin.png")}
                style={{
                  width: 110,
                  height: 110,
                  position: "absolute",
                  bottom: -12,
                  right: 10,
                }}
              ></Image>
            </View>
          </View>
        </View>
      </View>
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
  textreg: {
    fontFamily: "StyreneRegular",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    includeFontPadding: false,
  },

  textmed: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
    includeFontPadding: false,
  },
  italic: {
    fontFamily: "StyreneItalic",
    fontSize: 12,
    color: "#AAAAAA",
  },
});
