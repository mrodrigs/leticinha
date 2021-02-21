import React from 'react';

import { Page, Header, Logo, Options, Container, Line, InputSearch, TextType, Card, Title, Box } from './styles';
import logo from '../../assets/logo.png';
import { TitleItem } from '../Cart/styles';

function Confirm() {
  return (
    <Page>
     <Header>
       <Logo src={logo}/>
        <InputSearch placeholder="Buscar" type="text"/>
     </Header>
     <Options>
        <TextType>Pronta entrega</TextType>
        <TextType>Amigurumi</TextType>
        <TextType>Para bebês</TextType>
        <TextType>Tricotin</TextType>
        <TextType>Personalizando</TextType>
        <TextType>Sobre mim</TextType>
      </Options>
      <Line/>

    <Container>
      <Card>
        <Title>Resumo da compra</Title>
        <Box> 
            <TitleItem>Nome do produto</TitleItem>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh purus, euismod in egestas vel, consectetur quis ante. Pellentesque urna tellus, pulvinar ut augue sed, pharetra tristique metus. </span>
        </Box>
        <Box> 
            <TitleItem>Seus dados</TitleItem>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh purus, euismod in egestas vel, consectetur quis ante. Pellentesque urna tellus, pulvinar ut augue sed, pharetra tristique metus. </span>
        </Box>
        <TitleItem>Entrega prevista para 00/00/00</TitleItem>
      </Card>
    </Container>
    </Page>
  );
}

export default Confirm;