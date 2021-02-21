import React from 'react';

import { Page, Header, Logo, Options, Container, Line, InputSearch, TextType, Text, Title, Item, InfoBox, ItemBox, TitleItem,
        Photo, InfoItem, Button, DataBox, Input } from './styles';
import logo from '../../assets/logo.png';
import Ariel from '../../assets/ariel.jpeg'

function Cart() {
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
      <Title>Itens no seu carrinho</Title>

      <ItemBox>
        <Item>
          <Photo src={Ariel}/>
          <InfoItem>
            <TitleItem> Nome do produto </TitleItem>
            <Text>detalhes do produto</Text>
            <div>
              <Button>Salvar para depois</Button>
              <Button>Remover</Button>
            </div>
          </InfoItem>
          <div className="d-flex justify-content-end"> Preço </div>
        </Item>

        <InfoBox>
          <Title>Meus dados</Title>
          
          <DataBox>
            <Text>Nome</Text>
            <Input placeholder="Nome" type="text"/>
          </DataBox>

          <DataBox>
            <Text>Endereço</Text>
            <Input placeholder="Endereço" type="text"/>
          </DataBox>

          <DataBox>
            <Text>Número</Text>
            <Input placeholder="Nº" type="number"/>

            <Text>Complemento</Text>
            <Input placeholder="Complemento" type="text"/>
          </DataBox>

          <DataBox>
            <Text>Cidade</Text>
            <Input placeholder="Cidade" type="text"/>

            <Text>CEP</Text>
            <Input placeholder="CEP" type="number"/>
          </DataBox>
          
        </InfoBox>
      </ItemBox>
        
    </Container>
    </Page>
  );
}

export default Cart;