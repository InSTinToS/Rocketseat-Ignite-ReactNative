import React from 'react'
import { CarImageWrapper, Container, ImageIndexes, Index } from './styles'

import { CarImage } from '../Car/styles'

interface Props {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: Props) => {
  return (
    <Container>
      <ImageIndexes>
        <Index active={true} />
        <Index active={false} />
        <Index active={false} />
        <Index active={false} />
        <Index active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imageUrls[0] }} resizeMode='contain' />
      </CarImageWrapper>
    </Container>
  )
}

export default ImageSlider
