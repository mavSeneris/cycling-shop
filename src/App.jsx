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
import MenPage, {loader as menProductsLoader} from "./routes/MenPage"
import WomenPage, {loader as womenProductsLoader} from "./routes/WomenPage"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ProductPage from "./routes/ProductPage"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route
      path="collection"
      element={<ProductsPage />}
      loader={productsLoader}
    />
    <Route path="men" element={<MenPage />} loader={menProductsLoader}/>
    <Route path="women" element={<WomenPage />} loader={womenProductsLoader}/>
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="collection/product/:id" element={<ProductPage />} />
    <Route path="men/product/:id" element={<ProductPage />} />
    <Route path="women/product/:id" element={<ProductPage />} />
  </Route>

))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
