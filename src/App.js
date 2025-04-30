import React from "react";
import Header from "./component/header";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const isValid = localStorage.getItem("isAdmin") === "true";
  console.log("isValid",isValid)
  return (
    <CartProvider>
   <BrowserRouter>
   {
    isValid ? (
     <PrivateRoute/>
    ):(
      <PublicRoute/>
    )
   }
   </BrowserRouter>
   </CartProvider>
  );
};

export default App;
