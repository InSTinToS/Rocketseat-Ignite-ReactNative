import React from 'react'
import { Container, Title } from './styles'
import { ActivityIndicator } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

interface Props extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
}

const Button = ({
  title,
  enabled = true,
  color,
  loading = false,
  ...props
}: Props) => {
  const theme = useTheme()

  return (
    <Container color={color} enabled={enabled} {...props}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}

export default Button
