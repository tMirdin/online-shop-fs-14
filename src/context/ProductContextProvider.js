import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productsContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...prevState, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  const cloud = {
    getProducts,
    getOneProduct,
    productsArr: state.products,
    productDetails: state.productDetails,
  };

  return (
    <productsContext.Provider value={cloud}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
