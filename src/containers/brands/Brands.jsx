import React from "react";
import "./brands.css";

import { logos, images } from "../../constants";

const Brands = () => {
  return (
    <div className="brands">
      <div className="line-1">
        <h3>Brands</h3>
      </div>
      <div className="line-2">
        <p>Brands who love our work</p>
      </div>
      <div className="line-3">
        <div>
          <img src={logos.pinterest} width={142} alt="" />
        </div>
        <div>
          <img src={logos.tiktok} width={124} alt="" />
        </div>
        <div>
          <img src={logos.google} width={150.48} alt="" />
        </div>
        <div>
          <img src={logos.airbnb} width={166.41} alt="" />
        </div>
        <div>
          <img src={logos.ubereats} width={166.41} alt="" />
        </div>
        <div style={{ position: "relative", top: 8 }}>
          <img src={logos.amazon} width={141.55} alt="" />
        </div>
      </div>
      <div className="brands-desc">
        <div>
          <div>
            <p>We are here to help you build your brand</p>
          </div>
          <div>
            <h3>
              <span>100k+ </span> Active Users
            </h3>
            <div id="au-container">
              <div>
                <img src={images.au1} width={66} alt="" />
              </div>
              <div>
                <img src={images.au2} width={66} alt="" />
              </div>
              <div>
                <img src={images.au4} width={66} alt="" />
              </div>
              <div>
                <img src={images.au5} width={66} alt="" />
              </div>
              <div>
                <img src={images.au2} width={66} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
