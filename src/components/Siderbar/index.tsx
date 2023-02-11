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
import { useContext } from "react";


interface SidebarProps{
  active: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Sidebar = ({ active }:SidebarProps) => {

  const { cart, totalPrice } = useContext(CartContext);
console.log(totalPrice)
console.log(cart)
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container>
      <ContainerHeader >
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
            photo={item.photo}
            name={item.name}
            price={item.price}
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
