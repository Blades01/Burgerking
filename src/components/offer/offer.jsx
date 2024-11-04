import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Burger-King-logo.svg";
import { Footer } from "../footer.jsx";
export const Offer = () => {
  return (
    <>
        <nav className="navbarr ">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Burger King Logo" />
            </Link>
          </div>
          <ul className="navlinks-1">
            <li>
              <Link to="/order" className="nav-links">
                Order
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-links">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/offer" className="nav-links">
                Offer
              </Link>
            </li>
            <li>
              <Link to="/restaurants" className="nav-links">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/careers" className="nav-links">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/news" className="nav-links">
                News
              </Link>
            </li>
          </ul>
        </nav>     
    


      <div className="offer-texts-parent">
        <div className="offer-texts">
        <h1>No coupons available at the moment</h1>
        </div>
        
     </div>
      
      <Footer />
    </>
  );
};
