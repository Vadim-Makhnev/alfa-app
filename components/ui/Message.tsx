import { Image, StyleSheet, Text, View } from "react-native";

type TypeMessage = {
  pngSource: any;
  msg: string;
  side: string;
};

export default function Message({ pngSource, msg, side }: TypeMessage) {
  return (
    <View style={styles.container}>
      {/* Контейнер для одной строки: аватарка + сообщение */}
      <View
        style={[styles.row, side === "left" ? styles.rowLeft : styles.rowRight]}
      >
        {side === "left" && <Image style={styles.avatar} source={pngSource} />}

        {/* Сообщение — всегда в одной и той же позиции */}
        <View style={styles.messageBubble}>
          <Text style={styles.desc}>{msg}</Text>
          <Text style={styles.date}>23:03</Text>
        </View>

        {side === "right" && <Image style={styles.avatar} source={pngSource} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Основной контейнер — по вертикали
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 30,
    marginVertical: 2,
    gap: 5,
  },
  rowLeft: {
    justifyContent: "flex-start", // аватарка слева, сообщение справа
  },
  rowRight: {
    justifyContent: "flex-end", // сообщение слева, аватарка справа
  },
  avatar: {
    width: 40,
    height: 40,
  },
  messageBubble: {
    maxWidth: "80%",
    backgroundColor: "white",
    paddingVertical: 9,
    paddingHorizontal: 11,
    paddingRight: 45,
    borderRadius: 10,
    position: "relative",
  },
  desc: {
    fontFamily: "StyreneRegular",
    fontSize: 14,
    color: "#001A34",
  },
  date: {
    position: "absolute",
    bottom: 5,
    right: 5,
    fontFamily: "StyreneRegular",
    fontSize: 10,
    color: "#8E8E92",
  },
});
