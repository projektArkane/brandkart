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
    <div className="footer">
      <div>
        <div>
          <img src={logos.brandkart} width={36} alt="logo" />
          <span>BrandKart</span>
        </div>
        <p>© 2022 Brandkart.Co. All Rights Reserved</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Platform Guidlines</a>
          </li>
          <li>
            <a href="#">Content & Creation Guidelines</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <FaFacebookF />
            </div>
          </li>
          <li>
            <div>
              <FaTwitter />
            </div>
          </li>
          <li>
            <div>
              <FaInstagram />
            </div>
          </li>
          <li>
            <div>
              <FaLinkedinIn />
            </div>
          </li>
          <li>
            <div>
              <FaYoutube />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
