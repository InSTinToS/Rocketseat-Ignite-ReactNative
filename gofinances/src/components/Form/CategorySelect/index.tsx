import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Category, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

const CategorySelect = ({ title, ...props }: Props) => {
  return (
    <Container {...props}>
      <Category>{title}</Category>

      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
