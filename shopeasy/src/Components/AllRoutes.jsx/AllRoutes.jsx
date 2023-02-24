import React from "react";
import { Header } from "../Header";
import {Navbar} from "../Navbar"
import HomePage from "../HomePage"
import {Footer} from "../Footer"
import { Route, Routes } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import IndividualproductPage from "../Pages/IndividualproductPage";
import Checkout from "../Pages/Checkout";
import Payment from "../Pages/Payment";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import OrderPlaced from "../Pages/OrderPlaced";
import Mybag from "../Pages/Mybag";
const AllRoutes = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<IndividualproductPage />} />
        <Route path="/cart" element={<Mybag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
