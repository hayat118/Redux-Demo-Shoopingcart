import React from "react";
import Navbar from "../component/Navbar";
import ProductCard from "../component/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../component/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />}>
            {" "}
          </Route>
          <Route path="/cart" element={<CartPage />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
