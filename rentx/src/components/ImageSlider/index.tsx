import React, { useRef, useState } from 'react'
import { CarImageWrapper, Container, ImageIndexes, Index } from './styles'
import { FlatList, ViewToken } from 'react-native'

import { CarImage } from '../Car/styles'

interface ChangeImageProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

interface Props {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    // ! Exclamação no final = neste caso não é nulo
    setSelectedIndex(info.viewableItems[0].index!)
  })

  return (
    <Container>
      <ImageIndexes>
        {imageUrls.map((_, index) => (
          <Index active={index === selectedIndex} key={index} />
        ))}
      </ImageIndexes>

      <FlatList
        horizontal
        data={imageUrls}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode='contain' />
          </CarImageWrapper>
        )}
      />
    </Container>
  )
}

export default ImageSlider
