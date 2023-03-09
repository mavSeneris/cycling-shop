import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ProductsPage from './routes/ProductsPage';
import Login from './routes/Login';
import Register from './routes/Register';
import WomenPage from './routes/WomenPage';
import MenPage from './routes/MenPage';
import ProductPage from './routes/ProductPage';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/collection",
    element: <ProductsPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/women",
    element: <WomenPage />,
  },
  {
    path: "/men",
    element: <MenPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
