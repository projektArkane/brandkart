import React from "react";
import "./navbar.css";

import { logos } from "../../constants";
import { BiMenu } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bk-navbar">
      <div className="bk-navbar-smallscreen">
        <BiMenu color="black" fontSize={30} onClick={() => null} />
      </div>
      <div className="leftSide">
        <div className="bk-logo">
          <Link to="/">
            <img src={logos.brandkart} alt="logo" />
          </Link>
        </div>
        <div className="brand-title">
          <Link to="/">
            <span>BrandKart</span>
          </Link>
        </div>
      </div>

      <ul className="rightSide bk-navbar-links">
        <div className="bk-navbar-links-largescreen">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Our Work</a>
          </li>
          <li>
            <button className="login-btn" type="button">
              Login
            </button>
          </li>
        </div>

        <div>
          <li>
            <Link to="/getstarted">
              <button className="getstarted-btn-lg" type="button">
                Get Started
              </button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="bk__navbar-links">
        <div className="bk__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="bk__navbar-links_container">
          <p><a href="#services">Services</a></p>
          <p><a href="#services">Our Work</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#services">Services</a></p>
        </div>
      </div> */
}
