import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, { loader as MenuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {action, action as createOrderAction} from './features/order/CreateOrder'
import Order, {loader, loader as orderLoader} from './features/order/Order'
import AppLayout from './ui/AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader, 
        errorElement: <Error/>
      }, {
        path: "cart",
        element: <Cart />
      }, {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      }, {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error/>,
        loader: orderLoader
      }
    ]
  },
])


function App() {


  return <RouterProvider router={router} />;
}

export default App
