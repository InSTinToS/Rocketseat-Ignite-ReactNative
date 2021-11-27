import React from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";

interface InputProps extends TextInputProps {
  error?: string;
  touched?: boolean;
}

const Input = ({ touched, error, ...props }: InputProps) => {
  return (
    <>
      {error && touched && <Error>{error}</Error>}

      <Container error={!!error && touched} {...props} />
    </>
  );
};

export default Input;
