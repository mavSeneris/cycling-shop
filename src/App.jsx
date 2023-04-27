import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage"
import MenPage, { loader as menProductsLoader } from "./pages/MenPage"
import WomenPage, { loader as womenProductsLoader } from "./pages/WomenPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProductPage, { loader as productLoader } from "./pages/ProductPage"
import AdminLayout from "./components/AdminLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="collection" element={<ProductsPage />} loader={productsLoader} />
    <Route path="men" element={<MenPage />} loader={menProductsLoader} />
    <Route path="women" element={<WomenPage />} loader={womenProductsLoader} />
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="collection/product/:id" element={<ProductPage />} loader={productLoader} />
    <Route path="men/product/:id" element={<ProductPage />} loader={productLoader} />
    <Route path="women/product/:id" element={<ProductPage />} loader={productLoader} />
    <Route path="admin" element={<AdminLayout/>}></Route>
  </Route>

))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
