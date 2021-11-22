import React from "react";

import { Text, TouchableOpacityProps } from "react-native";

import { Container, Title, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
  type: "up" | `down`;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

const TransactionTypeButton = ({ title, type, isActive, ...props }: Props) => {
  return (
    <Container isActive={isActive} type={type} {...props}>
      <Icon name={icons[type]} type={type} />

      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
