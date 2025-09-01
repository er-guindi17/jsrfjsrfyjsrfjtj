import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Pedido from "./pages/Pedido";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "pedido",
        element: <Pedido />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);