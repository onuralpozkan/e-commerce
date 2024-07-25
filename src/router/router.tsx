import { createBrowserRouter } from "react-router-dom";
import { routes } from "~/common/config/routes.config";
import MainLayout from "~/common/layouts/Main.layout";
import CartPage from "~/pages/cart/Cart.page";
import HomePage from "~pages/home/Home.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.cart,
        element: <CartPage />,
      },
    ],
    errorElement: <div>Error</div>,
  },
]);
