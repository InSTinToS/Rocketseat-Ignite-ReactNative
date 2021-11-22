import { Formik, FormikValues } from "formik";
import React, { useState } from "react";

import {
  Alert,
  Keyboard,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import Button from "../../components/Form/Button";
import CategorySelect from "../../components/Form/CategorySelect";
import Input from "../../components/Form/Input";
import * as Yup from "yup";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";

import CategoryView, { Category } from "../CategoryView";

import Container, {
  TransactionsTypes,
  Title,
  Header,
  FormContent,
  Fields,
} from "./styles";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor númerico")
    .positive("O valor deve ser positivo")
    .required("Informe um valor"),
});

const Register = () => {
  const [category, setCategory] = useState<Category>({
    name: "category",
    label: "Categoria",
  });
  const [transaction, setTransaction] = useState("");
  const [categoryModal, setCategoryModal] = useState(false);

  const handleRegister = (data: FormikValues) => {
    if (!transaction) return Alert.alert("Selecione o tipo da transação");

    if (category.name === "category")
      return Alert.alert("Selecione uma categoria");

    const requestData = {
      name: data.name,
      amount: data.amount,
      transaction: transaction,
      category: category.name,
    };

    console.log(requestData);
  };

  const handleCloseModal = () => {
    setCategoryModal(false);
  };

  const handleOpenModal = () => {
    setCategoryModal(true);
  };

  const handleTransactionTypeSelect = (type: string) => {
    type !== transaction && setTransaction(type);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Formik
          onSubmit={handleRegister}
          validationSchema={RegisterSchema}
          initialValues={{ name: "", amount: "" }}
        >
          {({ errors, values, handleSubmit, handleChange, handleBlur }) => (
            <FormContent>
              <Fields>
                <Input
                  error={errors.name}
                  placeholder="Nome"
                  value={values.name}
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                />

                <Input
                  error={errors.amount}
                  placeholder="Preço"
                  value={values.amount}
                  keyboardType="numeric"
                  onBlur={handleBlur("amount")}
                  onChangeText={handleChange("amount")}
                />

                <TransactionsTypes>
                  <TransactionTypeButton
                    type="up"
                    title="incoming"
                    isActive={transaction === "up" ? true : false}
                    onPress={() => handleTransactionTypeSelect("up")}
                  />

                  <TransactionTypeButton
                    type="down"
                    title="outcoming"
                    isActive={transaction === "down" ? true : false}
                    onPress={() => handleTransactionTypeSelect("down")}
                  />
                </TransactionsTypes>

                <CategorySelect
                  title={category.label}
                  onPress={handleOpenModal}
                />
              </Fields>

              <Button title="Enviar" onPress={() => handleSubmit()} />
            </FormContent>
          )}
        </Formik>

        <Modal visible={categoryModal}>
          <CategoryView
            category={category}
            setCategory={setCategory}
            closeSelect={handleCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
