import React, { useContext, useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartContext } from "../../../context/CartContext";
import { ContainerCard, Container } from "./styles";
import { productsData } from "../../services/productsData";
import { Success } from "../../services/alert_sucesso";
import { CardSkeleton } from "../../components/cardSkeleton";
import { FooterSketeton } from "../../components/FooterSkeleton";
import { HeaderSkeleton } from "../../components/HeaderSkeleton";

export const Home = () => {
  const { products, isLoading } = productsData();
  const { handleAddItem } = useContext(CartContext);
  return (
    <Container>
      {isLoading?<HeaderSkeleton />:<Header />}
      <ContainerCard>
        {isLoading ? (
          <CardSkeleton cards={12}/>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              imgProduct={product.photo}
              nameProduct={product.name}
              praceProduct={product.price}
              descriptionProduct={product.description}
              onClick={() => {
                handleAddItem(
                  product.name,
                  product.photo,
                  product.price,
                  product.id,
                );
                Success()
              }}
            />
          ))
        )}
      </ContainerCard>
      {isLoading ? <FooterSketeton />:<Footer />}
    </Container>
  );
};
