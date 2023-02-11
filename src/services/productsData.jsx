import { useEffect, useState } from "react";
import { api } from "./api";

export const productsData = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("").then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products)
      setIsLoading(false);
    });
  }, []);

  return {
    products,
    isLoading,
  };
};
