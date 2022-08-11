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

    // Хранятся только дубликаты
    let filterCart = cart.products.filter((elem) => {
      return elem.item.id === productItem.id;
    });
    console.log(filterCart);

    if (filterCart.length > 0) {
      cart.products = cart.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.products.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // ===========================
  const cloud = { addProductCart };
  return <cartContext.Provider value={cloud}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
