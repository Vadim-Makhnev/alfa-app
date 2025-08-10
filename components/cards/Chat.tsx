import People from "@assets/images/people.svg";
import { Image, StyleSheet, Text, View } from "react-native";

type TypeChatCard = {
  pngSource: any;
  name: string;
  msg: string;
  date: string;
  notification?: string;
  from?: string;
  sum?: string;
  group?: boolean;
  noname?: boolean;
};

export default function ChatCard({
  pngSource,
  name,
  msg,
  date,
  notification,
  from,
  sum,
  group,
  noname,
}: TypeChatCard) {
  return (
    <View className="flex-row items-center justify-between bg-white rounded-[18px] px-[7px] pt-[13px] pb-[11px]">
      <Image source={pngSource} style={{ width: 65.1, height: 63 }}></Image>

      <View className="flex-row">
        <View style={{ flexWrap: "nowrap", width: 225 }}>
          {group ? (
            <View className="flex-row gap-[2px]">
              <People />
              <Text style={styles.text}>{name}</Text>
            </View>
          ) : (
            <Text style={styles.text}>{name}</Text>
          )}

          {sum && from ? (
            <Text>
              <Text style={{ fontFamily: "StyreneRegular", fontSize: 15 }}>
                {from}
              </Text>
              <Text
                style={{
                  fontFamily: "StyreneRegular",
                  fontSize: 15,
                  color: "#80E400",
                }}
              >
                {sum}
              </Text>
            </Text>
          ) : null}

          {!noname ? (
            <Text style={styles.msg}>
              {from ? from : null} {msg}
            </Text>
          ) : (
            <Text style={styles.msg}>{msg}</Text>
          )}
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
