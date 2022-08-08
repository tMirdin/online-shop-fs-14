import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductContextProvider";

const ProductsDetails = () => {
  const { getOneProduct, productDetails } = useContext(productsContext);

  let { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);
  console.log(Boolean({}));

  return (
    <div>
      {productDetails ? <h1>{productDetails.title}</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default ProductsDetails;
