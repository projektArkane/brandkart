import React from "react";
import "./header.css";

import { images } from "../../constants";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const Header = () => {
  return (
    <div
      id="header-container"
      className="flex flex-col lg:flex-row px-8 lg:px-20"
    >
      {/* <div className="gradient-green-container gradient-green"></div> */}
      {/* <div className="gradient-red-container gradient-red"></div> */}
      {/* <div className="gradient-purple-container gradient-purple"></div> */}
      <div className="flex-1 z-10">
        <h1 className="mt-20 text-bkBlack2 text-center leading-snug lg:leading-hero-title lg:text-left lg:pr-32 text-4xl md:text-5xl lg:text-headerTitle font-bold">
          Brand Requirements Simplified
        </h1>
        <p className="mt-6 text-renownBlack text-base md:text-lg text-center lg:text-left lg:leading-hero-desc md:px-24 lg:pl-0 lg:pr-44">
          All branding requirements at one place. Connect with Influencers, Sign
          brand ambassadors, Partner with movies, shows, events.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link to="/getstarted">
            <Button
              sx={{
                backgroundColor: "#6E53CB",
                marginTop: 6,
                paddingTop: 1.2,
                paddingBottom: 1.2,
                borderRadius: 1.25,
              }}
              variant="contained"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20 lg:mt-16 flex-1 flex justify-center z-10">
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
