import React from "react";
import "./testimonials.css";

import { images } from "../../constants";

const Testimonials = () => {
  return (
    <div className="px-8 md:px-20">
      <div className="flex justify-center">
        <h3 className="text-purple text-xl font-semibold uppercase">
          Testimonials
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 font-semibold text-center text-4xl xl:text-secHeading xl:leading-secHeading">
          What our happy clients say{" "}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-16">
        <div className="flex justify-center lg:w-5/12">
          <img
            src={images.testimonial_girl}
            // width={300}
            className="w-10/12 sm:w-6/12 md:w-6/12 lg:w-9/12"
            alt="testimonial-girl"
          />
        </div>
        <div className="flex lg:flex-1 mt-10 lg:mt-0 justify-center flex-col relative">
          <h3 className="text-bkBlack text-xl lg:text-2xl font-semibold">
            Matthew Paul
          </h3>
          <p className="text-renownBlack md:text-lg lg:w-9/12 mt-4 leading-relaxed">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <button id="rm-btn">Read More</button>
          <img
            className="absolute bottom-0 right-0"
            width={50}
            src={images.quote_sign}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
