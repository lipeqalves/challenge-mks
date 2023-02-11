import { FiShoppingBag } from "react-icons/fi";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <FiShoppingBag />
      {title}
    </ButtonContainer>
  );
};
