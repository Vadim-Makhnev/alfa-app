import { View } from "react-native";
import ExpenseCard from "../cards/Expense";

const CARD_HEIGHT = 63; // высота одной карточки
const STEP = 7;

export default function ExpensesList() {
  const cards = [
    {
      pngSource: require("@assets/images/cofix.png"),
      name: "Cofix",
      time: "10 мин. назад",
      sum: "-260 ₽",
      color: "#FFFFFF",
    },
    {
      pngSource: require("@assets/images/cofix.png"),
      name: "Cofix",
      time: "10 мин. назад",
      sum: "-260 ₽",
      color: "#F8F8F8",
    },
    {
      pngSource: require("@assets/images/cofix.png"),
      name: "Cofix",
      time: "10 мин. назад",
      sum: "-260 ₽",
      color: "#F6F6F6",
    },
  ];

  return (
    <View
      style={{
        position: "relative",
        height: CARD_HEIGHT + STEP * (cards.length - 1),
      }}
    >
      {cards.map((card, index) => (
        <View
          key={index}
          style={{
            position: "absolute",
            top: index * STEP, // лесенка
            width: "100%",
            zIndex: cards.length - index, // верхняя карточка выше
          }}
        >
          <ExpenseCard {...card} />
        </View>
      ))}
    </View>
  );
}
