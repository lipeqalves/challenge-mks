import {
  Container,
  Content,
  ContainerHeader,
  TextHeader,
  ContainerText,
  ContainerFooter,
  CardClose,
} from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { CardSidebar } from "../CardSidebar";
import { CartContext } from "../../../context/CartContext";
import React, { useContext } from "react";

export const Sidebar = ({ active }) => {
  const { cart, totalPrice } = useContext(CartContext);

  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container>
      <ContainerHeader sidebar={active}>
        <TextHeader>Carrinho de compras</TextHeader>
        <CardClose>
          <AiFillCloseCircle onClick={closeSidebar} />
        </CardClose>
      </ContainerHeader>
      <Content>
        {cart.map((item, index) => (
          <CardSidebar
            key={index}
            id={item.id}
            imgProduct={item.photo}
            nameProduct={item.name}
            priceProduct={item.price}
            qtd={item.qtd}
          />
        ))}
      </Content>
      <ContainerText>
        <TextHeader>Total:</TextHeader>
        <TextHeader>R${totalPrice}</TextHeader>
      </ContainerText>
      <ContainerFooter>Finalizar Compra</ContainerFooter>
    </Container>
  );
};
