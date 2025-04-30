import React from "react";
import { Route, Routes } from "react-router-dom";
import Homes from "../Home";
import Header from "../component/header";
import ProductList from "../pages/Product/ProductList";
import ProductDetails from "../pages/Product/ProductDetails";
import CartPage from "../pages/Product/CartPage";

const PrivateRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/home" element={<Homes />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
