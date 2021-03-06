import React from "react";
import "./brands.css";

import { logos, images } from "../../constants";

const Brands = () => {
  return (
    <div className="brands mt-10">
      {/* <div className="gradient-cyan-container gradient-cyan"></div> */}
      {/* <div className="gradient-cyan-container"></div> */}
      <div className="flex justify-center">
        <h3 className="text-purple text-lg md:text-xl font-medium uppercase">
          Brands
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 text-subhead font-semibold text-center text-2xl ss:text-3xl md:text-4xl xl:text-secHeading xl:leading-secHeading">
          Brands who love our work
        </p>
      </div>
      <div className="line-3">
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.nestle} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-28">
          <img src={logos.haier} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.hoichoi} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.milaap} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-24">
          <img src={logos.grb} alt="" />
        </div>
        <div className="w-20 sm:w-28 md:w-32 lg:w-36">
          <img src={logos.myprotein} alt="" />
        </div>
      </div>
      <div className="brands-desc flex justify-center mt-20 xl:mt-40">
        <div
          className="w-11/12 py-6 lg:bg-gray-100
        lg:px-14 xl:py-12
        flex flex-col lg:flex-row lg:rounded-full"
        >
          <div className="flex justify-center items-center flex-1">
            <p className="text-xl md:text-3xl xl:text-brandsDesc xl:leading-brands-desc font-semibold text-center lg:text-left xl:pl-8">
              We are here to help you build your brand
            </p>
          </div>
          <div className="flex-1 flex xl:items-center">
            <h3 className="text-xl md:text-3xl mt-8 xl:mt-0 text-center xl:text-left">
              <span>100k+ </span> Active Users
            </h3>
            <div className="mt-4 lg:mt-0 flex justify-center xl:justify-start xl:relative xl:right-10">
              <img src={images.auimages} width={190} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
