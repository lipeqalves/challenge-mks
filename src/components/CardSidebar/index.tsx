import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartContext } from "../../../context/CartContext";
import { IProdutos } from "../../common/types/produtos";
import {
  CardContainer,
  CardImg,
  TextProduct,
  TextPrice,
  CardClose,
  Row,
  BoxBtn,
  BtnSelecao,
  BtnText,
  ContainerBtnPrice,
} from "./styles";

export const CardSidebar = ({
  photo,
  name,
  price,
  id,
  qtd,
}:IProdutos) => {
  const { handleRemoveItem, handleAddItem, handleRemoveOneItem } =
    useContext(CartContext);

  return (
    <CardContainer>
      <CardClose>
        <AiFillCloseCircle
          onClick={() => {
            handleRemoveItem(id);
          }}
        />
      </CardClose>
      <Row>
        <CardImg src={photo} />
        <TextProduct>{name}</TextProduct>
        <ContainerBtnPrice>
          <BoxBtn>
            <BtnSelecao
              onClick={() => {
                handleRemoveOneItem(id);
              }}
            >
              <BtnText>-</BtnText>
            </BtnSelecao>
            <BtnText>{qtd}</BtnText>
            <BtnSelecao
              onClick={() => {
                //handleAddItem(photo, name, price, id);
              }}
            >
              <BtnText>+</BtnText>
            </BtnSelecao>
          </BoxBtn>
          <TextPrice>R${qtd * +price}</TextPrice>
        </ContainerBtnPrice>
      </Row>
    </CardContainer>
  );
};
