import { router } from "expo-router";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function BumpModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      {/* Затемнённый фон */}
      <View style={styles.overlay}>
        {/* Весь остальной код остаётся без изменений */}
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          onPress={() => setVisible(false)}
          activeOpacity={1}
        />
        <View
          style={[
            styles.cardShadow,
            {
              backgroundColor: "white",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingTop: 37,
              paddingBottom: 66,
              paddingLeft: 34,
              paddingRight: 26,
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
            },
          ]}
        >
          <View className="items-center gap-[7px] mb-[24px]">
            <Image
              source={require("@assets/images/tigerbig.png")}
              style={{ width: 120, height: 120 }}
            ></Image>
            <Text style={{ fontFamily: "StyreneMedium", fontSize: 22 }}>
              Тигрик
            </Text>
          </View>

          <View className="gap-[15px] wrap">
            <Text style={[styles.small, { color: "black", fontSize: 15 }]}>
              woow, похоже ты БАМнулся с новым человеком!
            </Text>
            <Text
              style={[styles.small, { color: "black", fontSize: 15 }]}
            >{`хочешь добавить его в друзья? Ты сможешь поделиться своей электронной визиткой и наладить новый контакт!`}</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => (router.push("/business"), setVisible(false))}
          >
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "#EF3124",
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginTop: 35,
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "StyreneMedium",
                  fontSize: 18,
                  color: "white",
                }}
              >
                обменяться контактами
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
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
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 12,
    color: "#AAAAAA",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});
