import React, { createContext } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const addProductCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let newProduct = {
      item: productItem,
    };
    cart.products.push(newProduct);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // ===========================
  const cloud = { addProductCart };
  return <cartContext.Provider value={cloud}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
