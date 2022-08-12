import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const productsContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...prevState,
        products: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  //   Хук useLocation возвращает объект location, представляющий текущий URL. Его можно рассматривать как useState, который возвращает новое местоположение при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента веб-аналитики.

  // console.log(location);

  const getProducts = async () => {
    const res = await axios(`${API}${location.search}`);
    console.log(res);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
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
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <productsContext.Provider value={cloud}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
