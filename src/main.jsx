import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />
//       },
//       {
//         path: "/collection",
//         element: <ProductsPage />
//       },
//       {
//         path: "/men",
//         element: <MenPage />,
//       },
//       {
//         path: "/women",
//         element: <WomenPage />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/sign-up",
//         element: <Register />,
//       },
//       {
//         path: `/collection/product/:id`,
//         element: <ProductPage />,
//       },
//       {
//         path: `/men/product/:id`,
//         element: <ProductPage />,
//       },
//       {
//         path: `/women/product/:id`,
//         element: <ProductPage />,
//       },
//       {
//         path: `/home/product/:id`,
//         element: <ProductPage />,
//       },
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
