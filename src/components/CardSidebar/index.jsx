import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartContext } from "../../../context/CartContext";
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
  imgProduct,
  nameProduct,
  priceProduct,
  id,
  qtd,
}) => {
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
        <CardImg src={imgProduct} />
        <TextProduct>{nameProduct}</TextProduct>
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
                handleAddItem(imgProduct, nameProduct, priceProduct, id);
              }}
            >
              <BtnText>+</BtnText>
            </BtnSelecao>
          </BoxBtn>
          <TextPrice>R${qtd * priceProduct}</TextPrice>
        </ContainerBtnPrice>
      </Row>
    </CardContainer>
  );
};
