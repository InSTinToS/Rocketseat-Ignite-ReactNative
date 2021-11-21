import React from "react";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard, {
  TransactionCardData,
} from "../../components/TransactionCard";
import Container, {
  Header,
  Avatar,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  LogoutIcon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface TransactionsData extends TransactionCardData {
  id: string;
}

const Dashboard = () => {
  const transactionsData: TransactionsData[] = [
    {
      id: "1",
      date: "13/04/2020 ",
      type: "positive",
      amount: "R$ 12.000,00",
      title: "Desenvolvimento de site",
      category: {
        icon: "dollar-sign",
        label: "Vendas",
      },
    },
    {
      id: "2",
      date: "10/04/2020 ",
      type: "negative",
      amount: "R$ 59,00",
      title: "Hamburgueria Pizzy",
      category: {
        icon: "coffee",
        label: "Alimentação",
      },
    },
    {
      id: "3",
      date: "10/04/2020 ",
      type: "negative",
      amount: "R$ 1.200,00",
      title: "Aluguel do apartamento",
      category: {
        icon: "home",
        label: "Casa",
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/52141015?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>

              <UserName>Miguel</UserName>
            </User>
          </UserInfo>

          <LogoutIcon />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril."
        />

        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril."
        />

        <HighlightCard
          title="Total"
          amount="R$ 16.141,34"
          lastTransaction="01 à 16 de abril."
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={transactionsData}
          renderItem={({ item }) => {
            //new () => FlatList<TransactionsData> not working
            const typedItem = item as TransactionCardData;

            return <TransactionCard data={typedItem} />;
          }}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
