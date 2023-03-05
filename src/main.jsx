import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ProductsPage from './routes/ProductsPage';
import App from './App'
import Login from './pages/Login';
import Register from './pages/Register';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>
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
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
