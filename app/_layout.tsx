import HomeIcon from "@assets/images/home.svg";
import ChatIcon from "@assets/images/message.svg";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [fontsLoaded] = useFonts({
    StyreneBold: require("../assets/fonts/StyreneAWeb-Bold.ttf"),
    StyreneMedium: require("../assets/fonts/StyreneAWeb-Medium.ttf"),
    StyreneRegular: require("../assets/fonts/StyreneAWeb-Regular.ttf"),
    StyreneItalic: require("../assets/fonts/StyreneAWeb-Italic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={27.5}
              height={28.6}
              fill={focused ? "#ff0000ff" : "#ffffff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="chat/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ChatIcon
              width={27.5}
              height={28.6}
              fill={focused ? "#ff0000ff" : "#ffffff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="spend/index"
        options={{ headerShown: false, href: null }}
      />

      <Tabs.Screen
        name="subscriptions/index"
        options={{ headerShown: false, href: null }}
      />

      <Tabs.Screen
        name="boom/index"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cashback/index"
        options={{
          headerShown: false,
          href: null,
          tabBarStyle: {
            height: 0,
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="boom/group"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="chat/chat"
        options={{
          headerShown: false,
          href: null,
          tabBarStyle: {
            height: 0,
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}

export default RootLayout;

//npx expo start --no-dev --minify
//npx expo prebuild --clean
