import React, { useState } from "react";

import "./getverified.css";

import { images } from "../../constants";

import { TextField } from "@mui/material";

import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  outline: 0;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  backgroundColor: "white";
  padding: 12px 12px;
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

const GetVerified = () => {
  const [email, setEmail] = useState("");
  console.log("this is email: ", email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("https://api.sheetmonkey.io/form/rjGkPBqGZjqXs9uw6GBPxt", {
    //   method: "POST",
    //   body: JSON.stringify(email),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log("Success:", JSON.stringify(response)))
    //   .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="px-8 lg:px-20 mt-36 mb-32">
      <div className="get-verified-box py-10 lg:py-16 xl:py-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="gvb-left px-10 lg:px-20 xl:relative xl:bottom-4 text-white">
          <h2 className="text-4xl leading-tight font-medium">
            Get Brandkart Verified
          </h2>
          <p className="mt-4 md:mt-2 text-base ss:text-lg">
            We Connect Brands to Influencers
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 lg:mt-0 lg:flex-1 flex flex-col justify-center px-10"
        >
          <div className="lg:flex w-full">
            <div className="flex bg-white xl:w-10/12 rounded-full xl:justify-end justify-center md:justify-start overflow-hidden">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-10/12 lg:w-8/12 px-0 md:pl-8 xl:pl-0 py-5 text-base rounded-full outline-0"
                placeholder="Enter your email address"
                type="text"
              />
              {/* <TextField
                className="outline"
                name="name"
                className="w-full"
                variant="outlined"
                label="Full Name"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}
              {/* <CustomInput
                aria-label="Demo input"
                placeholder="Type something..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}
              <div
                style={{ height: "70%" }}
                className="hidden my-auto mr-5 lg:flex"
              >
                <button
                  className="bg-purple rounded-3xl px-8 text-white text-base"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center mt-10">
            <button
              type="submit"
              className="bg-purple px-7 py-4 text-white text-base font-medium rounded-full"
            >
              Signup Now
            </button>
          </div>
        </form>
      </div>
      <img id="blue-dots" src={images.dots_blue} width={160} />
    </div>
  );
};

export default GetVerified;
