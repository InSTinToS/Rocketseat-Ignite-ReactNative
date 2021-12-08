import React from 'react'
import { Text } from 'react-native'
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from './styles'

import { Gasoline } from 'src/assets'
import { CarResType } from 'src/types/res/Car'
import getAccessoryIcon from 'src/utils/getAccessoryIcon'

import { RectButtonProps } from 'react-native-gesture-handler'

export interface CarData {
  thumbnail: string
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
}

interface Props extends RectButtonProps {
  data: CarResType
}

const Car = ({ data, ...props }: Props) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type)

  return (
    <Container {...props}>
      <Details>
        <Brand>{data.brand}</Brand>

        <Name>{data.name} </Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>

            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage resizeMode='contain' source={{ uri: data.thumbnail }} />
    </Container>
  )
}

export default Car
