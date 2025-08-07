import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function BoomComponent() {
  const photos = [
    require("@assets/images/ilya.png"),
    require("@assets/images/nastya.png"),
    require("@assets/images/olya.png"),
    require("@assets/images/vadim.png"),
  ];

  return (
    <View>
      <Text
        style={[
          styles.text,
          { marginBottom: 10, paddingLeft: 16, color: "black" },
        ]}
      >
        Твои БАМнутые траты
      </Text>

      <View
        style={{
          backgroundColor: "#EF3124",
          borderRadius: 45,
          paddingHorizontal: 14,
          paddingTop: 21,
          paddingBottom: 18,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Шкала лояльности</Text>
          <Text style={styles.textreg}>делай БАМ и повышай кэшбэк!</Text>
        </View>

        <View
          style={{
            height: 19,
            width: "100%",
            backgroundColor: "white",
            borderRadius: 40,
            paddingVertical: 4,
            paddingHorizontal: 11,
            position: "relative",
            marginBottom: 30,
          }}
        >
          {/** Большое кольцо */}
          <Svg
            width={28}
            height={28}
            style={{ position: "absolute", left: 0, bottom: -4, zIndex: 1 }}
          >
            <Circle
              cx={14}
              cy={14}
              r={11.5}
              strokeWidth={5}
              fill={"#EF3124"}
              stroke={"#FFFFFF"}
            />
          </Svg>

          {/** Большое кольцо */}

          {/** Маденькие кольца*/}

          <Svg
            width={16}
            height={16}
            style={{
              position: "absolute",
              left: 64,
              bottom: 1,
              zIndex: 1,
            }}
          >
            <Circle
              cx={8}
              cy={8}
              r={6.5}
              strokeWidth={3}
              fill={"none"}
              stroke={"#FFFFFF"}
            />

            <Text
              style={[
                styles.text,
                {
                  position: "absolute",
                  width: 22,
                  bottom: -35,
                  left: 0,
                  right: 0,
                  fontSize: 12,
                },
              ]}
            >
              3%
            </Text>
          </Svg>

          <Svg
            width={16}
            height={16}
            style={{
              position: "absolute",
              left: 129,
              bottom: 1,
              zIndex: 1,
            }}
          >
            <Circle
              cx={8}
              cy={8}
              r={6.5}
              strokeWidth={3}
              fill={"none"}
              stroke={"#FFFFFF"}
            />

            <Text
              style={[
                styles.text,
                {
                  position: "absolute",
                  width: 22,
                  bottom: -35,
                  left: 0,
                  right: 0,
                  fontSize: 12,
                },
              ]}
            >
              5%
            </Text>
          </Svg>

          <Svg
            width={16}
            height={16}
            style={{
              position: "absolute",
              bottom: 1,
              right: 10,
              zIndex: 1,
            }}
          >
            <Circle
              cx={8}
              cy={8}
              r={6.5}
              strokeWidth={3}
              fill={"none"}
              stroke={"#FFFFFF"}
            />

            <Text
              style={[
                styles.text,
                {
                  position: "absolute",
                  width: 25,
                  bottom: -35,
                  left: 0,
                  right: 0,
                  fontSize: 12,
                },
              ]}
            >
              10%
            </Text>
          </Svg>

          {/** Маденькие кольца*/}

          {/** Внутренний блок*/}
          <View
            style={{
              backgroundColor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "#EF3124",
                height: "100%",
                width: 148,
              }}
            ></View>
          </View>

          {/** Внутренний блок */}
        </View>

        {/** Специальные часы */}

        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.text, { fontSize: 15 }]}>
            🔥 Специальные часы:
          </Text>
          <Text style={[styles.textreg, { color: "white" }]}>
            совершай БАМы с 13:00 до 15:00 и получай x2 заполнение шкалы
          </Text>
        </View>

        {/** Специальные часы */}

        {/** Коллаж */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
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

          <Text style={[styles.textreg, { fontSize: 10, color: "white" }]}>
            + еще 12 бамов
          </Text>
        </View>

        {/** Коллаж */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "StyreneMedium",
    color: "white",
    fontSize: 20,
    includeFontPadding: false,
  },
  textreg: {
    fontFamily: "StyreneRegular",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    includeFontPadding: false,
  },
});
