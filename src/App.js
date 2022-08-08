import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
      <MainRoutes />
      <Footer />
    </ProductContextProvider>
  );
};

export default App;
