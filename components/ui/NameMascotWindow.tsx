import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function NameMascotWindow({
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
            <Text style={{ fontFamily: "StyreneMedium", fontSize: 22 }}>?</Text>
          </View>

          <View className="gap-[15px] wrap">
            <Text style={[styles.small, { color: "black", fontSize: 18 }]}>
              Пррривет! *радостное рычание* Рад с тобой познакомиться! Меня
              зовут... пока что меня никак не зовут, но ты можешь назвать меня
              как тебе угодно! В рамках приличия, конечно :)
            </Text>
            <TextInput
              style={{
                paddingVertical: 12,
                backgroundColor: "#EDEDED",
                borderRadius: 22,
                paddingLeft: 21,
                fontFamily: "StyreneRegular",
                fontSize: 18,
              }}
            >
              Тигрик
            </TextInput>
          </View>
          <TouchableWithoutFeedback onPress={() => setStep(2)}>
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "#EF3124",
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginTop: 42,
                borderRadius: 22,
              }}
            >
              <Text
                style={{
                  fontFamily: "StyreneMedium",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Готово!
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
