import React, { useContext, useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { productsContext } from "../../context/ProductContextProvider";
import Filter from "../Filter/Filter";
import "./Products.css";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { getProducts, productsArr } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  console.log(...searchParams);

  const [type, setType] = useState("");

  const paramsWithType = () => {
    return {
      category: type,
    };
  };

  const paramsNoType = () => {
    return {};
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, type]);

  return (
    <div className="main_box">
      <div className="filter">
        <Filter type={type} setType={setType} />
      </div>
      <div className="container1">
        {productsArr.map((item) => (
          <ProductsCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
