import React, { useEffect, useState } from 'react'
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars
} from './styles'
import { StatusBar } from 'react-native'

import Car from 'src/components/Car'
import { Logo } from 'src/assets'
import api from 'src/services/api'
import { CarResType } from 'src/types/res/Car'
import { Load } from 'src/components'
import { NavigationProps } from 'src/types/react-native/navigation'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

interface CarDetailsParams {
  car: CarResType
}

type Params = CarDetailsParams | void

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState<CarResType[]>()
  const navigation = useNavigation<NavigationProps<Params>>()

  const theme = useTheme()

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

          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  )
}

export default Home
