import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Home from "./modules/Home";

function App() {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories/:id" element={<CategoryProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>404</div>} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;