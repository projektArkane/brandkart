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
    <div className="influencer-bg px-0 mt-28">
      <div className="flex justify-center">
        <h3 className="text-purple text-lg md:text-xl font-medium uppercase">
          Influencers
        </h3>
      </div>
      <div className="flex justify-center px-8">
        <p className="mt-5 text-subhead font-semibold text-center text-2xl ss:text-3xl md:text-4xl xl:text-secHeading xl:leading-secHeading">
          Showcase of our top influencers{" "}
        </p>
      </div>
      {pillTitles.map((item, index) => {
        <Pill key={index} title={item} />;
      })}
      <div className="px-0 sm:px-20 w-11/12 mx-auto sm:w-full mt-10 sm:mt-24">
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
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 0,
            },
            "@0.75": {
              slidesPerView: 3,
              slidesPerGroup: 3,
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
              spaceBetween: 40,
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
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={1} name="Ranveer Singh" type="Film/TV Artist" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={2} name="Neha Kakkar" type="Music & Dance" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={3} name="Tanmay Bhatt" type="Comedy" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={4} name="Neeraj Chopra" type="Sports & Games" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card
              image={5}
              name="Ranveer Allahbadia"
              type="Business & Carreer"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={6} name="Raj Shamani" type="Finance & Crypto" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={7} name="Mandira Bedi" type="Fitness & Yoga" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={8} name="Gaurav Choudhary" type="Technology" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card
              image={9}
              name="Elnaz Nourozi"
              type="Fashio, Beauty & Lifestyle"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={10} name="Sanjeev Kapoor" type="Food & Beverages" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={11} name="Savi & Vid" type="Travel & Tourism" />
          </SwiperSlide>
          <SwiperSlide className="rounded-none sm:rounded-xl">
            <Card image={12} name="Faye D'Souza" type="News & Media" />
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
        className="py-0 sm:py-2 md:py-5 rounded-none lg:rounded-t-xl"
      >
        <div className="h-48 sm:h-52 lg:h-72 w-11/12 md:w-9/12 mx-auto">
          <img
            className="scale-75 sm:scale-100 rounded-xl sm:rounded-t-full"
            src={
              image === 1
                ? images.ranveersingh
                : image === 2
                ? images.nehakakkar
                : image === 3
                ? images.tanmaybhatt
                : image === 4
                ? images.neerajchopra
                : image === 5
                ? images.ranveerallabadia
                : image === 6
                ? images.rajshamani
                : image === 7
                ? images.mandirabedi
                : image === 8
                ? images.gauravchoudhary
                : image === 9
                ? images.elnaz
                : image === 10
                ? images.sanjeevkapoor
                : image === 11
                ? images.travelcouple
                : image === 12
                ? images.fayeDSouza
                : null
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
