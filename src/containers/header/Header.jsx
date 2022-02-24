import React from "react";
import "./header.css";

import { images, logos } from "../../constants";

const Header = () => {
  return (
    <div className="app-header">
      <div className="header-left">
        <h1 className="header-title">Brand Requirements Simplified</h1>
        <p className="header-discription">
          All branding requirements at one place. Connect with Influencers, Sign
          brand ambassadors, Partner with movies, shows, events.
        </p>
        <button className="header-button">Get Started</button>
      </div>
      <div className="header-right">
        <img src={images.hero_image} width={594} alt="hero-image" />
      </div>
    </div>
  );
};

export default Header;
