import { Dimensions } from 'react-native'

import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IndexProps {
  active: boolean
}

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`

export const CarImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  height: 132px;
  width: ${Dimensions.get('window').width}px;
`

export const Index = styled.View<IndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: ${RFPercentage(50)}px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;

  padding-right: 24px;
`

export const Container = styled.View`
  width: 100%;
`
