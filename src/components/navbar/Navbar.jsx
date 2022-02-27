import React from "react";
// import "./navbar.css";

import { logos } from "../../constants";
import { BiMenu } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 md:px-20 flex items-center pt-10 pb-5">
      <div className="md:hidden mr-2">
        <BiMenu className="text-2xl" color="black" onClick={() => null} />
      </div>
      <div className="flex items-center">
        <div className="flex-shrink-0 w-6">
          <Link to="/">
            <img src={logos.brandkart} alt="logo" />
          </Link>
        </div>
        <div className="ml-2">
          <Link to="/">
            <span className="text-base md:text-lg lg:text-xl">BrandKart</span>
          </Link>
        </div>
      </div>

      <ul className="flex-1 flex items-center justify-end">
        <li className="mr-10 hidden md:flex">
          <a className="text-xs md:text-base" href="#">
            Services
          </a>
        </li>
        <li className="mr-10 hidden md:flex">
          <a className="text-xs md:text-base" href="#">
            Our Work
          </a>
        </li>
        <li className="hidden lg:flex mr-10">
          <button
            className="text-xs md:text-base border-solid border-2 border-purple px-3 lg:px-5 py-2 rounded-md"
            id="login-btn"
            type="button"
          >
            Login
          </button>
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
