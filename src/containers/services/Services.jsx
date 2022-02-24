import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./services.css";

import { BsArrowRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import { images } from "../../constants";

const Services = () => {
  return (
    <div className="services">
      <div className="line-1">
        <h3>Services</h3>
      </div>
      <div className="line-2">
        <p>How we make it simpler</p>
      </div>
      <div className="carousel-container">
        <div className="carousel-container-left">
          <ServiceType number="01" title="Define Campaigns" />
          <ServiceType number="02" title="Shortlist influencers" />
          <ServiceType number="03" title="Execute campaign" />
        </div>
        <div className="carousel-container-right">
          <ServicesCard
            desc="State your primary requirements like Platform, Influencer category,
        Number of influencers, Geography, Timeline, Budget etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

const ServiceType = ({ title, number }) => {
  return (
    <div className="service-type">
      <div className="number">{number}</div>
      <div>
        <a className="title" href="#">
          {title}
        </a>
        <p>Features</p>
      </div>
      <div>
        <a className="arrow" href="#">
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

const ServicesCard = ({ desc }) => {
  return (
    <div className="services-card">
      <img src={images.services_image1} width={625} />
      <p>{desc}</p>
    </div>
  );
};
