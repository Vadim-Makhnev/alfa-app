import CartIcon from "@assets/icons/CartIcon.svg";
import HomeIcon from "@assets/icons/HomeIcon.svg";
import MapIcon from "@assets/icons/MapIcon.svg";
import MoneyIcon from "@assets/icons/MoneyIcon.svg";
import ChatIcon from "@assets/icons/MsgIcon.svg";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import "./globals.css";

SplashScreen.preventAutoHideAsync();
enableScreens();

function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    StyreneBold: require("../assets/fonts/StyreneAWeb-Bold.ttf"),
    StyreneMedium: require("../assets/fonts/StyreneAWeb-Medium.ttf"),
    StyreneRegular: require("../assets/fonts/StyreneAWeb-Regular.ttf"),
    StyreneItalic: require("../assets/fonts/StyreneAWeb-Italic.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded || error) {
      setAppIsReady(true);
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    if (appIsReady) {
      const hideSplash = async () => {
        await SplashScreen.hideAsync();
      };
      hideSplash();
    }
  }, [appIsReady]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      console.log("Forcing SplashScreen to hide after 5s");
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!appIsReady) {
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
        animation: "shift",
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
              fill={focused ? "#EF3124" : "#EFEFF4"}
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
              fill={focused ? "#EF3124" : "#EFEFF4"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="money/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MoneyIcon
              width={35}
              height={35}
              fill={focused ? "#EF3124" : "transparent"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="spend/index"
        options={{ headerShown: false, href: null, animation: "shift" }}
      />

      <Tabs.Screen
        name="explore/index"
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
        name="subscriptions/index"
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
        name="boom/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CartIcon
              width={27.5}
              height={28.6}
              fill={focused ? "#EF3124" : "#EFEFF4"}
            />
          ),
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
          href: null,
          tabBarStyle: {
            height: 0,
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="map/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MapIcon
              width={27.5}
              height={28.6}
              fill={focused ? "#EF3124" : "#EFEFF4"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
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

      <Tabs.Screen
        name="business/index"
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
        name="chat/grinch"
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
