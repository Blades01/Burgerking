import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Burger-King-logo.svg";
import ActiveLastBreadcrumb from "../../components/order/ActiveLastBreadCrumb.jsx";
import { Footer } from "../footer.jsx";
import WhooperSandwich from "../../images/Whopper-Sandw-1024x659.jpg";
import SteakHouse from "../../images/steakhouses-1024x659.jpg";

export const Menu = () => {
  return (
    <>
      <div className="nav">
        <nav className="navbar ">
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

        <nav className="secondary-nav">
          <ul className="navlinks-2">
            <li>
              <Link to="/" className="menulinks">
                Flammed Grilled Burgers
              </Link>
              <Link to="/" className="menulinks">
                Chicken Burgers
              </Link>
              <Link to="/" className="menulinks">
                Sides
              </Link>
              <Link to="/" className="menulinks">
                Drinks
              </Link>
              <Link to="/" className="menulinks">
                Desserts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <ActiveLastBreadcrumb />
      <section className="fgb">
        <div className="fgb-header">
          <h2 className="fgb-title">Flammed Grilled Burgers</h2>
        </div>

        <div className="fgb-img">
          <div className="fgb-img-list">
            <a
              href="https://www.burger-king.ng/menu/flame-grilled-burgers/whopper"
              aria-label="Whopper®"
            >
              <img src={WhooperSandwich} alt="Whopper® image" />
              <h2>Whopper®</h2>
            </a>
          </div>

          <div className="fgb-img-list">
            <a
              href="https://www.burger-king.ng/menu/flame-grilled-burgers/steakhouse"
              aria-label="Whopper®"
            >
              <img src={SteakHouse} alt="Steakhouse image" />
              <h2>Steakhouse</h2>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
