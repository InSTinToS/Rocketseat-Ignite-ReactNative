import React from 'react'
import {
  About,
  Accessories,
  Brand,
  CarContent,
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
import { StatusBar } from 'react-native'

import BackButton from 'src/components/BackButton'
import ImageSlider from 'src/components/ImageSlider'
import Accessory from 'src/components/Accessory'
import Button from 'src/components/Button'
import { CarResType } from 'src/types/res/Car'
import { NavigationProps } from 'src/types/react-native/navigation'
import getAccessoryIcon from 'src/utils/getAccessoryIcon'

import { useNavigation, useRoute } from '@react-navigation/native'

interface Params {
  car: CarResType
}

const CarDetails = () => {
  const navigation = useNavigation<NavigationProps<Params | void>>()
  const route = useRoute()

  const { car } = route.params as Params

  const handleConfirm = () => {
    navigation.navigate('Scheduling', { car })
  }

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle='dark-content'
          backgroundColor='transparent'
        />

        <BackButton onPress={() => navigation.navigate('Home')} />
      </Header>

      <CarContent>
        <CarImages>
          <ImageSlider imageUrls={car.photos} />
        </CarImages>

        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>

            <Price>R$ {car.rent.price}</Price>
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

        <About>{car.about}</About>
      </CarContent>

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

export default CarDetails
