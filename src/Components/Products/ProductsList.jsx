import React, { useContext, useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { productsContext } from "../../context/ProductContextProvider";
import Filter from "../Filter/Filter";
import "./Products.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const ProductsList = () => {
  const { getProducts, productsArr, pageTotalCount } =
    useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  // console.log(searchParams);

  const [type, setType] = useState(searchParams.get("category") || "all");

  const [price, setPrice] = useState([0, 200000]);

  const [page, setPage] = useState(1);

  const paramsWithType = () => {
    return {
      category: type,
      q: searchParams.get("q"),
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q"),
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    };
  };

  useEffect(() => {
    getProducts();
    if (searchParams.get("category")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, type, price, page]);

  return (
    <>
      <div className="main_box">
        <div className="filter">
          <Filter
            type={type}
            setType={setType}
            price={price}
            setPrice={setPrice}
          />
        </div>
        <div className="container1">
          {productsArr.map((item) => (
            <ProductsCard product={item} key={item.id} />
          ))}
        </div>
      </div>
      <div style={{ margin: "50px auto", textAlign: "center" }}>
        <Pagination
          count={+pageTotalCount}
          variant="outlined"
          shape="rounded"
          page={+page}
          onChange={(e, pageVal) => {
            setPage(pageVal);
          }}
        />
      </div>
    </>
  );
};

export default ProductsList;
