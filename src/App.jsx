import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home";
import { Order } from "./components/order/Order";
import { Menu } from "./components/menu/menu";
import { Offer } from "./components/offer/offer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/order",
    element: <Order/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  {
  path: "/offer",
  element: <Offer/>,
},
]);
 
function App(){
  return <RouterProvider router={router}/>
}


export default App