import React from "react";

import Container, {
  Amount,
  Title,
  Icon,
  Category,
  CategoryName,
  Date,
  Footer,
} from "./styles";

interface Category {
  label: string;
  icon: string;
}

export interface TransactionCardData {
  type: "positive" | "negative";
  date: string;
  title: string;
  amount: string;
  category: Category;
}

interface Props {
  data: TransactionCardData;
}

const TransactionCard = ({
  data: { date, title, amount, category, type },
}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        {type === "negative" && "- "}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />

          <CategoryName>{category.label}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
