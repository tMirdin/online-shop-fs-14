import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Auth/Authorization";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import ProductsDetails from "./Components/Products/ProductsDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/details/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
