import React from 'react'
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent
} from './styles'
import { StatusBar, StyleSheet } from 'react-native'

import BackButton from 'src/components/BackButton'
import ImageSlider from 'src/components/ImageSlider'
import Accessory from 'src/components/Accessory'
import Button from 'src/components/Button'
import { CarResType } from 'src/types/res/Car'
import { NavigationProps } from 'src/types/react-native/navigation'
import getAccessoryIcon from 'src/utils/getAccessoryIcon'

import { useNavigation, useRoute } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import { useTheme } from 'styled-components'

interface Params {
  car: CarResType
}

const CarDetails = () => {
  const theme = useTheme()
  const navigation = useNavigation<NavigationProps<Params | void>>()
  const route = useRoute()

  const scrollY = useSharedValue(0)

  const sliderCarsStyleAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0])
  }))

  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [200, 90], Extrapolate.CLAMP)
  }))

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const { car } = route.params as Params

  const handleConfirm = () => {
    navigation.navigate('Scheduling', { car })
  }

  return (
    <Container>
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary }
        ]}
      >
        <Header>
          <StatusBar
            translucent
            barStyle='dark-content'
            backgroundColor='transparent'
          />

          <BackButton onPress={() => navigation.navigate('Home')} />
        </Header>

        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider imageUrls={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        // 16 porque 1000/60 = 16.6 = 60fps
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          alignItems: 'center'
        }}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>

            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessorie => (
            <Accessory
              key={accessorie.type}
              name={accessorie.name}
              icon={getAccessoryIcon(accessorie.type)}
            />
          ))}
        </Accessories>

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button
          color='red'
          onPress={handleConfirm}
          title='Escolher período do aluguel'
        />
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1
  }
})

export default CarDetails
