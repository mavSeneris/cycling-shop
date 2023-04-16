import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home"
import ProductsPage, { loader as productsLoader } from "./routes/ProductsPage"
import MenPage, { loader as menProductsLoader } from "./routes/MenPage"
import WomenPage, { loader as womenProductsLoader } from "./routes/WomenPage"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ProductPage, { loader as productLoader } from "./routes/ProductPage"
import CategoryLayout from "./components/CategoryLayout";
import TestRoute, { loader as testLoader } from "./routes/Category";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    
    {/*! Under maintenance do not uncomment */}
    {/* <Route path="category" element={<CategoryLayout />}>
      <Route
        index
        element={<TestRoute />}
        loader={testLoader}
      />
      <Route path="men" element={<MenPage />} loader={menProductsLoader} />
      <Route path="women" element={<WomenPage />} loader={womenProductsLoader} /> 
    </Route> */}

    <Route
      path="collection"
      element={<ProductsPage />}
      loader={productsLoader}
    />
    <Route path="men" element={<MenPage />} loader={menProductsLoader} />
    <Route path="women" element={<WomenPage />} loader={womenProductsLoader} />
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="collection/product/:id" element={<ProductPage />} loader={productLoader} />
    <Route path="men/product/:id" element={<ProductPage />} loader={productLoader} />
    <Route path="women/product/:id" element={<ProductPage />} loader={productLoader} />
  </Route>

))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
