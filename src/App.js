import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    // <AuthContextProvider>
    <ProductContextProvider>
      <NavBar />
      <MainRoutes />
      <Footer />
    </ProductContextProvider>
    // </AuthContextProvider>
  );
};

export default App;
