import React from "react";
import { CartProvider } from "../context/CartContext";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
};
