import React from 'react'
import { StatusBar } from 'react-native'
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title
} from './styles'

import BackButton from 'src/components/BackButton'
import Button from 'src/components/Button'
import Calendar from 'src/components/Calendar'
import { Arrow } from 'src/assets'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

const Scheduling = () => {
  const theme = useTheme()

  const navigation = useNavigation()

  const handleConfirm = () => {
    navigation.navigate('SchedulingDetails' as never)
  }

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />

        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma data{'\n'} de início e {'\n'} fim do aluguel.
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>22/02/10</DateValue>
          </DateInfo>

          <Arrow />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirm} />
      </Footer>
    </Container>
  )
}

export default Scheduling
