import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import ErrorPage from './error_page.tsx';
import Product from './components/Product.tsx';
import Cart from './components/Cart.tsx';
import axios from 'axios';
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';

// axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// axios.defaults.baseURL = import.meta.env.DEV
//   ? "http://localhost:5000/"
//   : "/";
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

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false}  />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
