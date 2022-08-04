import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
        </Routes>
    );
};

export default MyRoutes;
