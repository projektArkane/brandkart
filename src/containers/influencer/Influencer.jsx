import React, { useState } from "react";

import "./styles.css";

import "./influencer.css";
import { images } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="influencer-bg px-8 md:px-20 mt-28">
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
      {pillTitles.map((item, index) => {
        <Pill key={index} title={item} />;
      })}
      <div className="px-10 mt-24">
        <Swiper
          speed={4300}
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-xl">
            <Card image={1} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={2} name="Jack Knight" type="Singer" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={3} name="Sia" type="Singer" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={4} name="Manish" type="Fashion" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={1} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={2} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={3} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={4} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={1} name="Keanu Reeves" type="Anchor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={2} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={3} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Card image={4} name="Keanu Reeves" type="Actor" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Influencer;

const Card = ({ image, name, type }) => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundColor: "rgba(244, 242, 251, 1)" }}
        className="py-5 rounded-t-xl"
      >
        <div className="w-9/12 mx-auto">
          <img
            src={
              image === 1
                ? images.influencer1
                : image === 2
                ? images.influencer2
                : image === 3
                ? images.influencer3
                : image === 4
                ? images.influencer4
                : undefined
            }
            alt="infone"
          />
        </div>
      </div>
      <div className="py-5">
        <h3 className="font-medium text-base lg:text-lg text-bkBlack2 text-center">
          {name}
        </h3>
        <h4
          style={{ color: "#7B8289" }}
          className="text-sm md:text-base text-center mt-2"
        >
          {type}
        </h4>
      </div>
    </div>
  );
};
