import React, { FC } from 'react'
import { Container, Name } from './styles'

import { SvgProps } from 'react-native-svg'

interface Props {
  name: string
  icon: FC<SvgProps>
}

const Accessory = ({ icon: Icon, name }: Props) => {
  return (
    <Container>
      <Icon width={32} height={32} />

      <Name>{name}</Name>
    </Container>
  )
}

export default Accessory
