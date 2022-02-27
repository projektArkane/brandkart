import React from "react";

import "./getverified.css";

import { images } from "../../constants";

import { Button } from "@mui/material";

const GetVerified = () => {
  return (
    <div className="px-8 lg:px-20 mt-24">
      <div className="get-verified-box py-10 lg:py-16 xl:py-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="gvb-left px-10 lg:px-20 xl:relative xl:bottom-4 text-white">
          <h2 className="text-4xl font-medium">Get Brandkart Verified</h2>
          <p className="text-lg">We Connect Brands to Influencers</p>
        </div>
        <div className="mt-10 lg:mt-0 lg:flex-1 flex flex-col justify-center px-10">
          <div className="lg:flex w-full">
            <div className="flex bg-white xl:w-10/12 rounded-full xl:justify-end justify-center md:justify-start">
              <input
                className="w-10/12 lg:w-8/12 px-6 xl:pl-0 py-5 text-base rounded-full outline-0"
                placeholder="Enter your email address"
                type="text"
              />
              <div
                style={{ height: "70%" }}
                className="hidden my-auto mr-5 lg:flex"
              >
                <button
                  className="bg-purple rounded-3xl px-8 text-white text-base"
                  type="button"
                >
                  Signup
                </button>
                {/* <Button variant="contained">Sign Up</Button> */}
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center mt-10">
            <button className="bg-purple px-10 py-5 text-white text-xl font-semibold rounded-full">
              Signup Now
            </button>
          </div>
        </div>
      </div>
      <img id="blue-dots" src={images.dots_blue} width={160} />
    </div>
  );
};

export default GetVerified;
