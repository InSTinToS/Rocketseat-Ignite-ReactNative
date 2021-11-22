import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, Icon, Button } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

const TransactionTypeButton = ({ title, type, isActive, ...props }: Props) => {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...props}>
        <Icon name={icons[type]} type={type} />

        <Title>{title}</Title>
      </Button>
    </Container>
  );
};

export default TransactionTypeButton;
