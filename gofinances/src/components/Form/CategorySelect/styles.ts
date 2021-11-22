import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Container = styled.TouchableOpacity.attrs({ actieOpacity: 0.7 })`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 18px 16px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
