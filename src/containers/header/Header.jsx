import React from "react";
import "./header.css";

import { images, logos } from "../../constants";

import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 lg:px-20">
      <div className="flex-1">
        <h1 className="mt-20 text-center leading-snug lg:leading-hero-title lg:text-left lg:pr-32 text-4xl lg:text-headerTitle font-bold">
          Brand Requirements Simplified
        </h1>
        <p className="mt-6 lg:text-lg text-center lg:text-left lg:leading-hero-desc md:px-24 lg:pl-0 lg:pr-44">
          All branding requirements at one place. Connect with Influencers, Sign
          brand ambassadors, Partner with movies, shows, events.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="header-button">Get Started</button>
          {/* <Button variant="container">Get Started</Button> */}
        </div>
      </div>
      <div className="mt-20 lg:mt-16 flex-1 flex justify-center">
        <img
          className="object-contain"
          src={images.hero_image}
          width={594}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Header;
