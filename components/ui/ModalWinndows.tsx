import { router } from "expo-router";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function ModalWindow({
  visible,
  setStep,
}: {
  visible: boolean;
  setStep: (step: number) => void;
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      {/* Затемнённый фон */}
      <View style={styles.overlay}>
        {/* Весь остальной код остаётся без изменений */}

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
              Привет!
            </Text>
            <Text
              style={[styles.small, { color: "black", fontSize: 15 }]}
            >{`Вижу, что твои расходы увеличиваются каждый месяц(`}</Text>
            <Text style={[styles.small, { color: "black", fontSize: 15 }]}>
              Давай посмотрим как мы можем их оптимизировать?
            </Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => (setStep(3), router.push("/spend"))}
          >
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "#8FFF00",
                paddingVertical: 7,
                paddingHorizontal: 20,
                marginTop: 35,
                borderRadius: 16,
              }}
            >
              <Text style={{ fontFamily: "StyreneMedium", fontSize: 18 }}>
                Погнали!
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
