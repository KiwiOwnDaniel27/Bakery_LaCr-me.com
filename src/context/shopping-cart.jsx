import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const ShoppingCartContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: () => {},
  removeProduct: () => {},
  clearShoppingCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const totalAmount = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  }, []);

  const removeProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  const clearShoppingCart = useCallback(() => {
    setProducts([]);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        totalAmount,
        addProduct,
        removeProduct,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);