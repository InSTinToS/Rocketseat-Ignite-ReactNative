import React, { useContext } from "react";

import { RFValue } from "react-native-responsive-fontsize";

import {
  TitleWrapper,
  Title,
  SignInText,
  Footer,
  Header,
  Container,
  FooterWrapper,
} from "./styles";

import LogoSvg from "../../assets/logo.svg";
import SignInSocial from "../../components/SignInSocial";
import GoogleSvg from "../../assets/google.svg";
import AppleSvg from "../../assets/apple.svg";
import { useAuth } from "../../hooks/auth";

const SignIn = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInText>Faça seu login{"\n"}com uma das contas abaixos</SignInText>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocial title="Entrar com Google" svg={GoogleSvg} />

          <SignInSocial title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;
