import React from 'react'

import theme from './src/styles/theme'
import Routes from 'src/routes'

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
