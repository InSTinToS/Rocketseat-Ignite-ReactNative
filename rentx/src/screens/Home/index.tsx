import React, { useEffect, useState } from 'react'
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles'
import { BackHandler, StatusBar, StyleSheet } from 'react-native'

import Car from 'src/components/Car'
import { Logo } from 'src/assets'
import api from 'src/services/api'
import { CarResType } from 'src/types/res/Car'
import { Load } from 'src/components'
import { NavigationProps } from 'src/types/react-native/navigation'
import AnimatedLoading from 'src/components/AnimatedLoading'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

interface CarDetailsParams {
  car: CarResType
}

type Params = CarDetailsParams | void

// const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState<CarResType[]>()
  const navigation = useNavigation<NavigationProps<Params>>()

  // const positionY = useSharedValue(0)
  // const positionX = useSharedValue(0)

  // const onGestureEvent = useAnimatedGestureHandler({
  //   onStart: (_: any) => {},
  //   onActive: event => {
  //     positionX.value = event.translationX
  //     positionY.value = event.translationY
  //   },
  //   onEnd: () => {
  //     positionX.value = withSpring(0)
  //     positionY.value = withSpring(0)
  //   }
  // })

  // const myCarsButtonStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     { translateX: positionX.value },
  //     { translateY: positionY.value }
  //   ]
  // }))

  // const theme = useTheme()

  const handleCarDetails = (car: CarResType) => {
    navigation.navigate('CarDetails', { car })
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars')
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
  })

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />

        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          {!loading && (
            <TotalCars>Total de {cars ? cars.length : 0} Carros</TotalCars>
          )}
        </HeaderContent>
      </Header>

      {loading ? (
        <AnimatedLoading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      {/* <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              right: 22,
              bottom: 13
            }
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name='ios-car-sport'
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler> */}
    </Container>
  )
}

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 60,
//     height: 60,
//     borderRadius: 30
//   }
// })

export default Home
