import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { productsContext } from "../../context/ProductContextProvider";

const ProductsList = () => {
  const { getProducts, productsArr } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={2}>
      {productsArr.map((item) => (
        <ProductsCard product={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default ProductsList;
