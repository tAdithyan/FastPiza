import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Neworder from './features/order/CreateOrder.jsx'
import Order from './features/order/Order.jsx'
import AppLayout from "./ui/AppLayout.jsx";
const router = createBrowserRouter([
  {
    
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
      ,
      {
        path: "/order/new",
        element: <Neworder />
      }
      ,
      {
        path: "/order/:orderId",
        element: <Order />
      }

    ]
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
