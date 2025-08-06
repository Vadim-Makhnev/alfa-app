import { Image, StyleSheet, Text, View } from "react-native";

type TypeMessage = {
  pngSource: any;
  msg: string;
  side: string;
};

export default function Message({ pngSource, msg, side }: TypeMessage) {
  return (
    <View className="flex-row items-end gap-[8px]">
      {side === "left" ? (
        <>
          <Image style={{ width: 40, height: 40 }} source={pngSource}></Image>

          <View
            style={{
              flexWrap: "nowrap",
              width: 236,
              backgroundColor: "white",
              paddingVertical: 9,
              paddingHorizontal: 9,
              borderRadius: 10,
              marginRight: 48,
            }}
          >
            <Text style={styles.desc}>{msg}</Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              flexWrap: "nowrap",
              width: 236,
              backgroundColor: "white",
              paddingVertical: 9,
              paddingHorizontal: 9,
              borderRadius: 10,
              marginLeft: 48,
            }}
          >
            <Text style={styles.desc}>{msg}</Text>
          </View>

          <Image style={{ width: 40, height: 40 }} source={pngSource}></Image>
        </>
      )}

      <View style={{ position: "absolute", bottom: 7, right: 56 }}>
        <Text style={styles.date}>23:03</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontFamily: "StyreneRegular",
    fontSize: 14,
    color: "#001A34",
  },
  date: {
    fontFamily: "StyreneRegular",
    fontSize: 10,
    color: "#8E8E92",
  },
});
