import HeaderWithLogo from "@/components/ui/HeaderWithLogo";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Bump from "@assets/images/bumps.svg";
import Star from "@assets/images/star.svg";
import TBump from "@assets/images/textbump.svg";

import BumpModal from "@/components/ui/BumpModalWindow";
import { useEffect, useMemo, useState } from "react";

export default function MapScreen() {
  const [isActive, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const opacity = useMemo(() => new Animated.Value(0), []);
  const scale = useMemo(() => new Animated.Value(1), []);
  const leftTigerX = useMemo(() => new Animated.Value(0), []);
  const rightTigerX = useMemo(() => new Animated.Value(0), []);
  const leftTigerY = useMemo(() => new Animated.Value(0), []);
  const rightTigerY = useMemo(() => new Animated.Value(0), []);
  const opacitybg = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (isActive) {
      // 1. Появление иконок
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // 2. Через 1 сек — запускаем "прыжок" и оверлей
      Animated.sequence([
        Animated.delay(1000),
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 2.0,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(leftTigerX, {
            toValue: -20,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
          Animated.spring(rightTigerX, {
            toValue: 15,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
          Animated.spring(leftTigerY, {
            toValue: -40,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
          Animated.spring(rightTigerY, {
            toValue: -40,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
          Animated.spring(opacitybg, {
            toValue: 1,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }),
        ]),
      ]).start();

      // 3. Через 2 секунды — плавно вернуть всё назад
      const timer = setTimeout(() => {
        Animated.parallel([
          // Уменьшаем иконки
          Animated.timing(scale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          // Возвращаем позиции
          Animated.timing(leftTigerX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(rightTigerX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(leftTigerY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(rightTigerY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          // Скрываем иконки

          // Скрываем оверлей
          Animated.timing(opacitybg, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setActive(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 500); // сбрасываем состояние
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [
    isActive,
    opacity,
    scale,
    leftTigerX,
    rightTigerX,
    leftTigerY,
    rightTigerY,
    opacitybg,
  ]);

  function onPress() {
    setActive(true); // запускаем анимацию
  }

  return (
    <SafeAreaView edges={[]} className="flex-1">
      <View className="flex-1 relative">
        <View className="px-[20px] pt-[48px]">
          <HeaderWithLogo margin={13} />

          <View className="gap-[10px]">
            <View
              className="px-[8px] px-[10px] bg-white"
              style={[
                {
                  borderRadius: 25,
                  alignSelf: "center",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                },
                styles.cardShadow,
              ]}
            >
              <Text style={{ fontFamily: "StyreneMedium", fontSize: 17 }}>
                Центральный район
              </Text>
            </View>
          </View>
        </View>

        <TouchableWithoutFeedback onLongPress={onPress}>
          <Image
            source={require("@assets/images/map.png")}
            style={{
              position: "absolute",
              resizeMode: "cover",
              width: "100%",
              height: "100%",
              zIndex: -1,
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
            }}
          ></Image>
        </TouchableWithoutFeedback>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <Animated.Image
            source={require("@assets/images/fulltiger.png")}
            style={[
              {
                width: 66,
                height: 74,
                position: "absolute",
                right: 190,
                bottom: 250,
              },
              {
                transform: [
                  { scale: scale },
                  { translateX: leftTigerX },
                  { translateY: leftTigerY },
                ],
              },
            ]}
          ></Animated.Image>

          <Animated.Image
            source={require("@assets/images/wtiger.png")}
            style={[
              {
                width: 66,
                height: 79,
                position: "absolute",
                right: 130,
                bottom: 250,
              },
              {
                transform: [
                  { scale: scale },
                  { translateX: rightTigerX },
                  { translateY: rightTigerY },
                ],
              },
            ]}
          ></Animated.Image>
        </View>

        <Animated.View
          style={{
            opacity,
            position: "absolute",
            bottom: 130,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <Bump />
        </Animated.View>

        <Animated.View
          style={{
            zIndex: 1,
            backgroundColor: "red",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: "absolute",
            alignItems: "center",
            justifyContent: "space-evenly",
            opacity: opacitybg,
          }}
        >
          <Animated.View className="items-center">
            <TBump />
            <Star />
          </Animated.View>
        </Animated.View>
      </View>

      <BumpModal visible={isVisible} setVisible={setIsVisible} />
    </SafeAreaView>
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
});
