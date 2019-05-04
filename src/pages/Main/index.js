import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197,98</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Tranfesrência de R$ 20,00 recebida de Willamis da Silva às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
