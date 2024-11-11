import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home";
import { Order } from "./components/order/Order";
import { Menu } from "./components/menu/menu";
import { Offer } from "./components/offer/offer";
import { Restuarant } from "./components/Restuarant/Restuarant";
import { Career } from "./components/Career/Career";
import { News } from "./components/News/News";


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
{
  path: "/restaurants",
  element: <Restuarant />,
},
{
  path: "/Careers",
  element: <Career/>,
},
{
  path: "/News",
  element: <News/>,
}
]);
 
function App(){
  return <RouterProvider router={router}/>
}


export default App