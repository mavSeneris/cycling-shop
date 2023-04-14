import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home"
import ProductsPage from "./routes/ProductsPage"
import MenPage from "./routes/MenPage"
import WomenPage from "./routes/WomenPage"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ProductPage from "./routes/ProductPage"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="collection" element={<ProductsPage />} />
    <Route path="men" element={<MenPage />} />
    <Route path="women" element={<WomenPage />} />
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="men/product/:id" element={<ProductPage />} />
    <Route path="women/product/:id" element={<ProductPage />} />
    <Route path="home/product/:id" element={<ProductPage />} />
  </Route>

))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
