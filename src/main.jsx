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
import Home from './routes/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/collection",
        element: <ProductsPage />
      },
      {
        path: "/men",
        element: <MenPage />,
      },
      {
        path: "/women",
        element: <WomenPage />,
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
        path: `/collection/product/:id`,
        element: <ProductPage />,
      },
      {
        path: `/men/product/:id`,
        element: <ProductPage />,
      },
      {
        path: `/women/product/:id`,
        element: <ProductPage />,
      },
      {
        path: `/home/product/:id`,
        element: <ProductPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
