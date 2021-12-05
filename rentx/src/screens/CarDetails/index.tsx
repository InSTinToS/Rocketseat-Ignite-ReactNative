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
import {
  Acceleration,
  Exchange,
  Force,
  Gasoline,
  People,
  Speed
} from 'src/assets'

import { useNavigation } from '@react-navigation/native'

const images = [
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
]

const CarDetails = () => {
  const navigation = useNavigation()

  const handleConfirm = () => {
    navigation.navigate('Scheduling' as never)
  }

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle='dark-content'
          backgroundColor='transparent'
        />

        <BackButton onPress={() => {}} />
      </Header>

      <CarContent>
        <CarImages>
          <ImageSlider imageUrls={images} />
        </CarImages>

        <Details>
          <Description>
            <Brand></Brand>
            <Name></Name>
          </Description>

          <Rent>
            <Period></Period>

            <Price></Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='300Km/h' icon={Speed} />
          <Accessory name='3.2s' icon={Acceleration} />
          <Accessory name='800HP' icon={Force} />
          <Accessory name='Gasolina' icon={Gasoline} />
          <Accessory name='300Km/h' icon={Speed} />
          <Accessory name='Auto' icon={Exchange} />
          <Accessory name='2 pessoas' icon={People} />
        </Accessories>

        <About>Este automóvel ...</About>
      </CarContent>

      <Footer>
        <Button
          color='red'
          title='Escolher período do aluguel'
          onPress={handleConfirm}
        />
      </Footer>
    </Container>
  )
}

export default CarDetails
