import {
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MascotWindow({
  visible,
  setStep,
}: {
  visible: boolean;
  setStep: (step: number) => void;
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            className="gap-[26px] mb-[71px]"
            style={{ paddingHorizontal: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "StyreneRegular",
                fontSize: 25,
              }}
            >
              Выбери себе питомца
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "StyreneRegular",
                fontSize: 15,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Он станет твоим надежным помощником и преданным другом, всегда
              готовым предложить мудрый совет в нужный момент
            </Text>
          </View>
          <View
            style={{
              marginBottom: 86,
            }}
          >
            <Image
              source={require("@assets/images/mascots.png")}
              style={{ width: 414, height: 320 }}
            ></Image>
          </View>

          <TouchableWithoutFeedback onPress={() => setStep(1)}>
            <View
              style={{
                backgroundColor: "#EF3124",
                borderRadius: 16,
                paddingHorizontal: 20,
                paddingVertical: 18,
              }}
            >
              <Text
                style={{
                  fontFamily: "StyreneMedium",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Выборать питомца
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
}
