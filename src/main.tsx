import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import ErrorPage from './error_page.tsx';
import Product from './components/Product.tsx';
import Cart from './components/Cart.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // App = layout (Navbar + Footer)
    errorElement: <ErrorPage />,
    children: [                // ✅ These render inside <Outlet />
      {
        index: true,           // matches exactly "/"
        element: <Home />,
      },
      {
        path: "products",      // matches "/products"
        element: <Product />, // create this page
      },
      {
        path: "cart",          // matches "/cart"
        element: <Cart />,     // create this page
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
