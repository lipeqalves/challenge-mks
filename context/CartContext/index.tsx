import { createContext, ReactNode, useState } from "react";
import { IProdutos } from "../../src/common/types/produtos";

interface IContext {
  cart: IProdutos[];
  handleAddItem: (
    name: string,
    photo: string,
    price: string,
    id: number
  ) => void;
  handleRemoveItem: (valor: number) => void;
  totalPrice: string;
  handleRemoveOneItem: (valor: number) => void;
}

interface Iprovaider {
  children: ReactNode;
}
export const CartContext = createContext({} as IContext);

export const CartProvider = ({ children }: Iprovaider) => {
  const [cart, setCart] = useState<IProdutos[]>([]);

  function handleAddItem(
    name: string,
    photo: string,
    price: string,
    id: number
  ) {
    const copyCart = [...cart].find((item) => item.id === id);
    const itemObject = { name, photo, price, id, qtd: 1 };

    if (!copyCart) {
      setCart([...cart, itemObject]);
    } else {
      copyCart.qtd = copyCart.qtd + 1;
      setCart([...cart]);
    }
  }
  function handleRemoveOneItem(id: number) {
    const copyCart = [...cart].find((item) => item.id === id);

    if (copyCart && copyCart.qtd > 1) {
      copyCart.qtd = copyCart.qtd - 1;
      setCart([...cart]);
    }
  }
  function handleRemoveItem(id: number) {
    const filterCard = [...cart].filter((item) => item.id !== id);
    setCart(filterCard);
  }
  const totalPrice = cart
    .reduce((acc, current) => acc + parseInt(current.price) * current.qtd, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItem,
        handleRemoveItem,
        totalPrice,
        handleRemoveOneItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
