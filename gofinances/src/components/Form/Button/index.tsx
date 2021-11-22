import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
