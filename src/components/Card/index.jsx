import React from "react";
import { Button } from "../Button";
import {
  CardContainer,
  CardImg,
  TextProduct,
  TextPrice,
  TextDescription,
  Row,
} from "./styles";

export const Card = ({
  imgProduct,
  nameProduct,
  praceProduct,
  descriptionProduct,
  onClick,
}) => {
  return (
    <CardContainer>
      <CardImg src={imgProduct} />
      <Row>
        <TextProduct>{nameProduct}</TextProduct>
        <TextPrice>{praceProduct}</TextPrice>
      </Row>
      <TextDescription>{descriptionProduct}</TextDescription>
      <Button title="COMPRAR" onClick={onClick} />
    </CardContainer>
  );
};
