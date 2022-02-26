import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { SimpleSlider } from "../../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import "./styles.css";

import "./influencer.css";
import { images } from "../../constants";

const pillTitles = ["Art & Skill", "Mentor & Expert", "Opinion Maker"];

const Influencer = () => {
  const [activePill, setActivePill] = useState(pillTitles[0]);
  console.log("the active pill is: ", activePill);

  const Pill = ({ title, borderColor, textColor, fontWeight }) => {
    return (
      <div
        style={{ borderColor: borderColor, borderWidth: 1 }}
        onClick={() => setActivePill(title)}
        className="pill"
      >
        <span style={{ color: textColor, fontWeight: fontWeight }}>
          {title}
        </span>
      </div>
    );
  };

  return (
    <div className="px-8 mt-24">
      <div className="flex justify-center">
        <h3 className="text-purple text-xl font-semibold uppercase">
          Influencers
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 font-semibold text-center text-secHeading xl:leading-secHeading">
          Showcase of our top influencers{" "}
        </p>
      </div>
      {/* <div className="pills-container">
        {pillTitles.map((item) => (
          <Pill
            key={item}
            textColor={item === activePill ? "#6E53CB" : "#7F8186"}
            borderColor={item === activePill ? "#6E53CB" : "#ffff"}
            fontWeight={item === activePill ? 700 : 400}
            title={item}
          />
        ))}
      </div> */}
      <div className="mt-16">
        <SimpleSlider />
      </div>
    </div>
  );
};
export default Influencer;

const Card = () => {
  return (
    <div className="flex flex-col bg-blue-400">
      <div className="w-1/2">
        <img src={images.influencer1} alt="someinfluencer" />
      </div>
      <div>
        <h3>Influencer</h3>
      </div>
    </div>
  );
};
