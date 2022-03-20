import React, { useEffect } from "react";
import { Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

const HomeScreen = () => {
    useEffect(() => {
        SplashScreen.hide();

    }, []);

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>;
}

export default HomeScreen;
