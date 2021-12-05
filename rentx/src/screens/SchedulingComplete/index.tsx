import React from 'react'
import { Container, Content, Footer, Message, Title } from './styles'
import { StatusBar, useWindowDimensions } from 'react-native'

import { BrandBackground, Done } from 'src/assets'
import { ConfirmButton } from 'src/components'

import { useNavigation } from '@react-navigation/native'

const SchedulingComplete = () => {
  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  const handleConfirm = () => {
    navigation.navigate('Home' as never)
  }
  return (
    <Container>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />

      <BrandBackground width={width} />

      <Content>
        <Done />
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária do RENTX{'\n'}
          pegar o seu atomóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Footer>
    </Container>
  )
}

export default SchedulingComplete
