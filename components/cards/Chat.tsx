import { Image, StyleSheet, Text, View } from "react-native";

type TypeChatCard = {
  pngSource: any;
  name: string;
  msg: string;
  date: string;
  notification?: string;
};

export default function ChatCard({
  pngSource,
  name,
  msg,
  date,
  notification,
}: TypeChatCard) {
  return (
    <View className="flex-row items-center justify-between bg-white rounded-[18px] px-[11px] pt-[13px] pb-[11px]">
      <Image source={pngSource} style={{ width: 65.1, height: 63 }}></Image>
      <View className="flex-row">
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.msg}>{msg}</Text>
        </View>
        <View className="justify-between items-end">
          <Text style={styles.msg}>{date}</Text>
          {notification ? (
            <View
              style={{
                width: 22,
                height: 22,
                backgroundColor: "#EF3124",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[styles.msg, { color: "white" }]}>
                {notification}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "StyreneMedium",
    fontSize: 17,
    includeFontPadding: false,
  },
  msg: {
    fontFamily: "StyreneRegular",
    fontSize: 13,
    includeFontPadding: false,
    color: "#8E8E92",
  },
});
