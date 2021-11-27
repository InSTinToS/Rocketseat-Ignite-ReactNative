import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/app.routes";
import { StatusBar } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
