import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails from "../pages/Home/Products/ProductDetails/ProductDetails";
import AllProducts from "../pages/Dashboard/AllProducts/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/products/"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
