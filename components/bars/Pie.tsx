import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import Spendings from "../cards/Spendings";

export default function Pie({
  radius = 94.5,
  radius2 = 78.5,
  radius3 = 62.5,
  radius4 = 46.5,
  strokeWidth = 16,
  percentage = 83,
  secondary = 80,
  third = 75,
  fourth = 50,
}) {
  const normalizedRadius = radius - strokeWidth / 2;
  const normalizedRadius2 = radius2 - strokeWidth / 2;
  const normalizedRadius3 = radius3 - strokeWidth / 2;
  const normalizedRadius4 = radius4 - strokeWidth / 2;

  const circumference = 2 * Math.PI * normalizedRadius;
  const circumference2 = 2 * Math.PI * normalizedRadius2;
  const circumference3 = 2 * Math.PI * normalizedRadius3;
  const circumference4 = 2 * Math.PI * normalizedRadius4;

  const strokeDashoffset = circumference - (circumference * percentage) / 100;
  const secondaryOffset = circumference2 - (circumference2 * secondary) / 100;
  const thirdOffset = circumference3 - (circumference3 * third) / 100;
  const fourthOffset = circumference4 - (circumference4 * fourth) / 100;

  return (
    <View>
      <View>
        <Text style={styles.big}>80 936,58 ₽</Text>
        <Text style={styles.small}>Твои расходы</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: 6,
          paddingLeft: 25,
        }}
      >
        <Svg height="189" width="189">
          <Circle
            cx={radius}
            cy={radius}
            r={normalizedRadius4}
            stroke="#A36DFF"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference4} ${circumference4}`}
            strokeDashoffset={fourthOffset}
            fill="transparent"
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius}) scale(1 -1) translate(0 ${
              -2 * radius
            })`}
          />

          <Circle
            cx={radius}
            cy={radius - normalizedRadius4}
            r={3}
            fill="#FFFFFF"
            transform={`scale(-1 1) translate(${-2 * radius} 0)`}
          />

          <SvgText
            x={radius + 11}
            y={radius - normalizedRadius4 + 4}
            fill="rgba(0,0,0,0.6)"
            fontSize="14"
            fontFamily="StyreneRegular"
            transform={`scale(1 1) translate(0 0)`}
          >
            {`${fourth}%`}
          </SvgText>

          <Circle
            cx={radius}
            cy={radius}
            r={normalizedRadius3}
            stroke="#8FFF00"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference3} ${circumference3}`}
            strokeDashoffset={thirdOffset}
            fill="transparent"
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius}) scale(1 -1) translate(0 ${
              -2 * radius
            })`}
          />

          <Circle
            cx={radius}
            cy={radius - normalizedRadius3}
            r={3}
            fill="#FFFFFF"
            transform={`scale(-1 1) translate(${-2 * radius} 0)`}
          />

          <SvgText
            x={radius + 11}
            y={radius - normalizedRadius3 + 4}
            fill="rgba(0,0,0,0.6)"
            fontSize="14"
            fontFamily="StyreneRegular"
            transform={`scale(1 1) translate(0 0)`}
          >
            {`${third}%`}
          </SvgText>

          <Circle
            cx={radius}
            cy={radius}
            r={normalizedRadius2}
            stroke="#FBCBC8"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference2} ${circumference2}`}
            strokeDashoffset={secondaryOffset}
            fill="transparent"
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius}) scale(1 -1) translate(0 ${
              -2 * radius
            })`}
          />

          <Circle
            cx={radius}
            cy={radius - normalizedRadius2}
            r={3}
            fill="#FFFFFF"
            transform={`scale(-1 1) translate(${-2 * radius} 0)`}
          />

          <SvgText
            x={radius + 11}
            y={radius - normalizedRadius2 + 4}
            fill="rgba(0,0,0,0.6)"
            fontSize="14"
            fontFamily="StyreneRegular"
            transform={`scale(1 1) translate(0 0)`}
          >
            {`${secondary}%`}
          </SvgText>

          <Circle
            cx="94.5"
            cy="94.5"
            r={normalizedRadius}
            stroke="#EF3124"
            strokeWidth={strokeWidth}
            strokeDashoffset={strokeDashoffset}
            strokeDasharray={`${circumference} ${circumference}`}
            fill="transparent"
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius}) scale(1 -1) translate(0 ${
              -2 * radius
            })`}
          />

          <Circle
            cx={radius}
            cy={radius - normalizedRadius}
            r={3}
            fill="#FFFFFF"
            transform={`scale(-1 1) translate(${-2 * radius} 0)`}
          />

          <SvgText
            x={radius + 11}
            y={radius - normalizedRadius + 4}
            fill="rgba(0,0,0,0.6)"
            fontSize="14"
            fontFamily="StyreneRegular"
            transform={`scale(1 1) translate(0 0)`}
          >
            {`${percentage}%`}
          </SvgText>
        </Svg>
      </View>

      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100%",
          marginTop: 15,
          rowGap: 6,
          columnGap: 5,
        }}
      >
        <Spendings
          color="#EF3124"
          text1="Рестораны"
          text2="45 324 ₽"
          bgcolor="#FFDCDA"
        />

        <Spendings
          color="#FBCBC8"
          text1="Супермаркеты"
          text2="19 424 ₽"
          bgcolor="#FFEDEC"
        />

        <Spendings
          color="#8FFF00"
          text1="Развлечения"
          text2="10 521 ₽"
          bgcolor="#DEFFB3"
        />

        <Spendings
          color="#A36DFF"
          text1="Другое"
          text2="5665 ₽"
          bgcolor="#DECBFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    fontFamily: "StyreneMedium",
    fontSize: 20,
  },
  small: {
    fontFamily: "StyreneRegular",
    fontSize: 15,
    color: "#AAAAAA",
  },
});
