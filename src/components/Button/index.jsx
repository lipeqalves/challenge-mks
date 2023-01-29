import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { ButtonContainer } from "./styles";

export const Button = ({ title, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            <FiShoppingBag />
            {title}
        </ButtonContainer>
    );
};
