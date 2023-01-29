import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddItem(photo, name, price, id) {
    const copyCart = [...cart].find((item) => item.id === id);
    const itemObject = { photo, name, price, id, qtd:1 };

    if (!copyCart) {
      setCart([...cart, itemObject]);
      
    } else {
      copyCart.qtd = copyCart.qtd + 1;
      setCart([...cart]);
    }
    
  }
   function handleRemoveOneItem(id) {
    const copyCart = [...cart].find((item) => item.id === id);
    
    if (copyCart.qtd > 1) {
      copyCart.qtd = copyCart.qtd - 1;
      setCart([...cart]);
     }
  }
  function handleRemoveItem(id) {
    const filterCard = [...cart].filter((item) => item.id !== id);
    setCart(filterCard);
  }

  const totalPrice = cart
    .reduce((acc, current) => acc + +current.price * current.qtd, 0)
    .toFixed(2);


  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItem,
        handleRemoveItem,
        totalPrice,
        handleRemoveOneItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
