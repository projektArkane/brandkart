import React from "react";
import "./header.css";

import { images, logos } from "../../constants";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import { styled } from "@mui/material/styles";

const purple = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#6E53CB",
  borderColor: "#6E53CB",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "rgba(110, 83, 203, 0.90)",
    color: "black",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Header = () => {
  return (
    <div
      id="header-container"
      className="flex flex-col lg:flex-row px-8 lg:px-20"
    >
      <div className="flex-1">
        <h1 className="mt-20 text-bkBlack2 text-center leading-snug lg:leading-hero-title lg:text-left lg:pr-32 text-4xl lg:text-headerTitle font-bold">
          Brand Requirements Simplified
        </h1>
        <p className="mt-6 text-renownBlack text-base md:text-lg text-center lg:text-left lg:leading-hero-desc md:px-24 lg:pl-0 lg:pr-44">
          All branding requirements at one place. Connect with Influencers, Sign
          brand ambassadors, Partner with movies, shows, events.
        </p>
        <div className="flex justify-center lg:justify-start">
          {/* <button className="header-button">Get Started</button> */}
          <Link to="/getstarted">
            <Button
              sx={{ backgroundColor: "#6E53CB", marginTop: 6 }}
              variant="contained"
            >
              Get Started
            </Button>
          </Link>
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
