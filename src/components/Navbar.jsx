import burger from "../assets/Burger-King-logo.svg"
import {Link} from "react-router-dom"
const Nav = () => {
    return(
       <nav className="container">
        <Link to="/"><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="navlinks">
           <Link to="/order" className="nav-links">Order</Link>
           <Link to="/menu" className="nav-links">Menu</Link>
           <Link to="/offer" className="nav-links">offers</Link>
           <Link to="/restaurants" className="nav-links">Restaurant</Link>
           <Link to="/Careers" className="nav-links">Careers</Link>
           <Link to="/News" className="nav-links">News</Link>
        </div> 
      </nav>
    )
}

export default Nav