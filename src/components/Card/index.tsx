import { Button } from "../Button";
import {
  CardContainer,
  CardImg,
  TextProduct,
  TextPrice,
  TextDescription,
  Row,
} from "./styles";

interface CardProps{
  imgProduct: string
  nameProduct: string,
  praceProduct: string,
  descriptionProduct:string,
  onClick: () => void,
}

export const Card = ({
  imgProduct,
  nameProduct,
  praceProduct,
  descriptionProduct,
  onClick
}:CardProps) => {
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
