import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatWithTiger() {
  return (
    <SafeAreaView edges={[]} className="flex-1">
      <View
        className="bg-white w-full h-[111px] pt-[56px] pl-[35px] pb-[15px]"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text>Hello</Text>
      </View>
      <ScrollView className="pt-[8px] px-[30px] flex-1"></ScrollView>
    </SafeAreaView>
  );
}
