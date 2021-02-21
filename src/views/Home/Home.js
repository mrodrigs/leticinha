import React from 'react';

import { Page, Header, Logo, Options, Container, Line, InputSearch, TextType } from './styles';
import logo from '../../assets/logo.png';

function Home() {
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
      
    </Container>
    </Page>
  );
}

export default Home;