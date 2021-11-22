import React from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";

interface InputProps extends TextInputProps {
  error?: string;
}

const Input = ({ error, ...props }: InputProps) => {
  return (
    <>
      {error && <Error>{error}</Error>}

      <Container error={error} {...props} />
    </>
  );
};

export default Input;
