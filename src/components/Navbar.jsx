import burger from "../assets/Burger-King-logo.svg"
import {Link} from "react-router-dom"
const Nav = () => {
    return(
       <nav className="container">
        <Link to="/"><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="navlinks">
           <Link to="/order">Order</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/offer">offers</Link>
           <Link to="#">Restaurant</Link>
           <Link to="#">Careers</Link>
           <Link to="#">News</Link>
        </div> 
      </nav>
    )
}

export default Nav