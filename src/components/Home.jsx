import { Download } from "../components/Download"
import Navbar from "../components/Navbar"
import { News } from "../components/News"
import Storelocator from "../components/store-location"
import { Swipe } from "../components/Swipe"
import { Footer } from "../components/footer"


export const Home = () => {
    return<>
    <Navbar/>
    <Swipe/>
    <Storelocator/>
    <Download/>
    <News/>
    <Footer/>
  </>
}