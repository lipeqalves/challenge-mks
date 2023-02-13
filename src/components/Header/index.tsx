import { useState, useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Sidebar } from "../Siderbar";
import { CartContext } from "../../../context/CartContext";
import {
  Container,
  TextMks,
  TextSistemas,
  ContainerText,
  BtnCarrinho,
} from "./styles";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  const { cart } = useContext(CartContext);

  return (
    <Container>
      <ContainerText>
        <TextMks>MKS</TextMks>
        <TextSistemas>Sistemas</TextSistemas>
      </ContainerText>
      <BtnCarrinho onClick={showSiderbar}>
        <BsCart4 /> {cart.length}
      </BtnCarrinho>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};
