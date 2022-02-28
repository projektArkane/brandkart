import React from "react";
import "./navbar.css";

import { logos } from "../../constants";
import { BiMenu } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="navbar-container"
      className="px-8 md:px-20 flex items-center pt-10 pb-5"
    >
      <div className="md:hidden mr-2">
        <BiMenu className="text-3xl" color="black" onClick={() => null} />
      </div>
      <div className="flex items-center">
        <div className="flex-shrink-0 w-8 md:w-9">
          <Link to="/">
            <img src={logos.brandkart} alt="logo" />
          </Link>
        </div>
        <div className="ml-2 md:ml-3">
          <Link to="/">
            <span className="text-base md:text-lg lg:text-xl">BrandKart</span>
          </Link>
        </div>
      </div>

      <ul className="flex-1 flex items-center justify-end">
        <li className="mr-10 hidden md:flex">
          <a className="text-xs md:text-base" href="#services-section">
            Services
          </a>
        </li>
        <li className="mr-10 hidden md:flex">
          <a className="text-xs md:text-base" href="#testimonials-section">
            Our Work
          </a>
        </li>

        <li>
          <Link to="/getstarted">
            <button
              className="text-xs md:text-base border-solid border-2 border-purple bg-purple text-white px-3 lg:px-4 py-2 rounded-md"
              type="button"
            >
              Get Started
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
