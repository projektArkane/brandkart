import React from "react";

import "./getverified.css";

import { images } from "../../constants";

const GetVerified = () => {
  return (
    <div className="get-verified">
      <div className="get-verified-box">
        <div className="gvb-left">
          <h2>Get Brandkart Verified</h2>
          <p>We Connect Brands to Influencers</p>
        </div>
        <div className="gvb-right">
          <div className="searchbox">
            <div>
              <input placeholder="Enter your email address" type="text" />
            </div>
            <div>
              <button type="button">Signup Now</button>
            </div>
          </div>
        </div>
      </div>
      <img id="blue-dots" src={images.dots_blue} width={160} />
    </div>
  );
};

export default GetVerified;
