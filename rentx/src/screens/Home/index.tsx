import React from 'react'
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles'
import { StatusBar } from 'react-native'

import Car, { CarData } from 'src/components/Car'
import { Logo } from 'src/assets'

import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

const Home = () => {
  const navigation = useNavigation()

  const car: CarData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
    rent: {
      price: 120,
      period: 'Ao dia'
    }
  }

  const handleCarDetails = () => {
    navigation.navigate('CarDetails' as never)
  }

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

      <CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={car} onPress={handleCarDetails} />}
      />
    </Container>
  )
}

export default Home
