import React from 'react'
import {
  Accessories,
  Brand,
  CalendarIcon,
  CarContent,
  CarImages,
  Container,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles'
import { StatusBar } from 'react-native'

import { Accessory, BackButton, Button, ImageSlider } from 'src/components'
import {
  Acceleration,
  Exchange,
  Force,
  Gasoline,
  People,
  Speed
} from 'src/assets'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

const images = [
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
]

const ShedulingDetails = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  const handleConfirm = () => {
    navigation.navigate('SchedulingComplete' as never)
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/08/2001</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/08/2001</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </CarContent>

      <Footer>
        <Button
          title='Alugar agora'
          onPress={handleConfirm}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  )
}

export default ShedulingDetails
