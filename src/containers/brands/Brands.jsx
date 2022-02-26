import React from "react";
import "./brands.css";

import { logos, images } from "../../constants";

const Brands = () => {
  return (
    <div className="brands mt-10">
      <div className="flex justify-center">
        <h3 className="text-purple text-lg md:text-xl font-semibold uppercase">
          Brands
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 font-semibold text-center text-2xl md:text-4xl xl:text-secHeading xl:leading-secHeading">
          Brands who love our work
        </p>
      </div>
      <div className="line-3">
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.google} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.tiktok} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.airbnb} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.ubereats} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.pinterest} alt="" />
        </div>
        <div
          className="w-20 sm:w-28 md:w-32 lg:w-36"
          style={{ position: "relative", top: 8 }}
        >
          <img src={logos.amazon} alt="" />
        </div>
      </div>
      <div className="brands-desc flex justify-center mt-20 xl:mt-40">
        <div
          className="w-11/12 py-6 lg:bg-gray-100
        lg:px-14 xl:py-12
        flex flex-col lg:flex-row lg:rounded-full"
        >
          <div className="flex justify-center items-center flex-1">
            <p className="md:text-3xl lg:text-4xl xl:text-brandsDesc xl:leading-brands-desc font-semibold text-center lg:text-left">
              We are here to help you build your brand
            </p>
          </div>
          <div className="flex-1 flex xl:items-center">
            <h3 className="mt-8 xl:mt-0 text-center xl:text-left">
              <span>100k+ </span> Active Users
            </h3>
            <div className="mt-4 lg:mt-0 flex justify-center xl:justify-start xl:relative xl:right-6">
              <img src={images.auimages} width={190} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
