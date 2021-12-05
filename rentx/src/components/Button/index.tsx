import React from 'react'
import { Container, Title } from './styles'

import { RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  title: string
  color?: string
}

const Button = ({ title, color, ...props }: Props) => {
  return (
    <Container color={color} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
