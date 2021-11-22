import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import Dashboard from "./src/screens/Dashboard";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import Register from "./src/screens/Register";

import CategoryView from "./src/screens/CategoryView";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}

      <Register />

      {/* <CategoryView /> */}
    </ThemeProvider>
  );
};

export default App;
