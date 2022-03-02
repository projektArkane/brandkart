import React from "react";
import "./footer.css";

import { logos } from "../../constants";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-8 md:px-20 md:flex md:justify-between sm:items-start">
      <div>
        <div className="flex items-center">
          <div className="w-8">
            <img src={logos.brandkart} alt="logo" />
          </div>
          <span className="ml-3 text-base">BrandKart</span>
        </div>
        <p style={{ color: "#717885" }} className="mt-6 text-xs lg:text-sm">
          © 2022 Brandkart.Co. All Rights Reserved
        </p>
      </div>

      <ul className="mt-5 flex md:hidden gap-4">
        <li>
          <div
            style={{ backgroundColor: "#3B5998" }}
            className="p-2 sm:p-3 rounded-full text-white"
          >
            <FaFacebookF />
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#55ACEE" }}
            className="p-2 sm:p-3 rounded-full text-white"
          >
            <FaTwitter />
          </div>
        </li>
        <li>
          <div className="insta-bg p-2 sm:p-3 rounded-full text-white">
            <a href="https://www.instagram.com/brandkart.co/">
              <FaInstagram />
            </a>
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#007AB9" }}
            className="p-2 sm:p-3 rounded-full text-white"
          >
            <FaLinkedinIn />
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#E85959" }}
            className="p-2 sm:p-3 rounded-full text-white"
          >
            <FaYoutube />
          </div>
        </li>
      </ul>

      <div
        style={{ color: "#545960", lineHeight: "2rem" }}
        className="flex mt-5 md:mt-0 gap-4 lg:gap-32 xl:gap-44"
      >
        <ul>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              Terms of Use
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              Platform Guidlines
            </a>
          </li>
          <li>
            <a className="text-xs lg:text-sm" href="#">
              Content & Creation Guidelines
            </a>
          </li>
        </ul>
      </div>

      <ul className="hidden xl:relative xl:right-10 md:flex sm:gap-2">
        <li>
          <div
            style={{ backgroundColor: "#3B5998" }}
            className="p-3 sm:p-2 md:p-3 rounded-full text-white"
          >
            <FaFacebookF />
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#55ACEE" }}
            className="p-3 sm:p-2 md:p-3 rounded-full text-white"
          >
            <FaTwitter />
          </div>
        </li>
        <li>
          <div className="p-3 sm:p-2 md:p-3 insta-bg rounded-full text-white">
            <a href="https://www.instagram.com/brandkart.co/">
              {" "}
              <FaInstagram />
            </a>
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#007AB9" }}
            className="p-3 sm:p-2 md:p-3 rounded-full text-white"
          >
            <FaLinkedinIn />
          </div>
        </li>
        <li>
          <div
            style={{ backgroundColor: "#E85959" }}
            className="p-3 sm:p-2 md:p-3 rounded-full text-white"
          >
            <FaYoutube />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
