import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
