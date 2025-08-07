import { Image, StyleSheet, Text, View } from "react-native";

export default function Bumpfest() {
  return (
    <View className="mt-[10px] flex-row gap-[16px] mb-[20px] justify-between">
      <View
        style={{
          backgroundColor: "#EF3124",
          height: 238,
          borderRadius: 28,
          paddingTop: 19,
          paddingBottom: 16,
          paddingLeft: 17,
          paddingRight: 21,

          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <View className="items-center gap-[8px]">
          <View className="items-center gap-[6px]">
            <Text style={styles.big}>АЛЬФА–БАМ</Text>
            <View
              style={{
                backgroundColor: "#8FFF00",
                borderRadius: 16,
                paddingVertical: 3,
                paddingHorizontal: 14.5,
                width: "100%",
              }}
            >
              <Text style={styles.big15}>ФЕСТ</Text>
            </View>
          </View>

          <Text
            style={styles.phrase}
            className="self-start z-[1]"
          >{`ДЛЯ СМЕЛЫХ\nИ СВОБОДНЫХ!`}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 19,
            paddingVertical: 10.5,
            borderRadius: 16,
            zIndex: 1,
          }}
        >
          <Text style={styles.date}>12 сентября</Text>
        </View>

        <Image
          style={{
            position: "absolute",
            width: 180,
            height: 130,
            bottom: 0,
            right: 0,
            left: 0,
          }}
          source={require("@assets/images/guys.png")}
        ></Image>
      </View>

      <View style={{ justifyContent: "space-between" }}>
        <View
          style={{
            backgroundColor: "white",

            borderRadius: 28,
            paddingHorizontal: 16,
            paddingTop: 9,
            paddingBottom: 8,
            flexWrap: "nowrap",
            maxWidth: 162,
            justifyContent: "space-between",
          }}
        >
          <Text>
            <Text style={styles.info}>Карьерный форум от</Text>
            <Text style={[styles.info, { color: "#EF3124" }]}>
              {" "}
              changellenge
            </Text>
          </Text>

          <View
            style={{
              backgroundColor: "#8FFF00",
              paddingVertical: 4,
              paddingHorizontal: 6.5,
              borderRadius: 16,
              alignSelf: "center",
              marginTop: 5,
            }}
          >
            <Text>4 сентября</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            height: 153,
            width: 162,
            borderRadius: 28,
          }}
        >
          <View
            style={{
              paddingTop: 11,
              paddingBottom: 12,
              paddingLeft: 16,
              paddingRight: 30,
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View className="gap-[3px]">
              <Text style={styles.info}>
                Почему компании не видят сигналы рынка?
              </Text>
              <View
                style={{
                  backgroundColor: "#8FFF00",
                  alignSelf: "flex-start",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 16,
                }}
              >
                <Text style={{ fontFamily: "StyreneMedium", fontSize: 10 }}>
                  23 августа
                </Text>
              </View>
            </View>

            <Text style={{ fontFamily: "StyreneItalic", fontSize: 9 }}>
              {`Обсудим\nна лекции\nс Николаем\nСоустиным`}
            </Text>
          </View>

          <Image
            source={require("@assets/images/soustin.png")}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 100,
              height: 100,
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 18,
    color: "white",
  },
  big15: {
    fontFamily: "StyreneMedium",
    fontSize: 18,
  },
  phrase: {
    fontFamily: "StyreneItalic",
    fontSize: 12,
    color: "white",
    lineHeight: 12,
  },
  date: {
    fontFamily: "StyreneMedium",
    fontSize: 12,
    color: "#EF3124",
  },
  info: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
  },
});
