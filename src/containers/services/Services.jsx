import React, { useState } from "react";

import "./services.css";

import { BsArrowRight } from "react-icons/bs";

import { images } from "../../constants";

const Services = () => {
  const typesOfServices = [
    "Define Campaigns",
    "Shortlist influencers",
    "Execute campaign",
  ];

  const [activeService, setActiveService] = useState(typesOfServices[0]);

  const ServiceType = ({
    title,
    number,
    textColor,
    fontWeight,
    numberColor,
  }) => {
    return (
      <div className="service-type">
        <div style={{ color: numberColor }} className="number">
          {number}
        </div>
        <div className="title">
          <h2
            style={{ fontWeight: fontWeight, color: textColor }}
            onClick={() => setActiveService(title)}
          >
            {title}
          </h2>
          <p>Features</p>
        </div>
        <div className="arrow">
          <BsArrowRight color={numberColor} />
        </div>
      </div>
    );
  };

  const ServicesCard = ({ image, desc }) => {
    return (
      <div className="services-card">
        <img src={image} width={625} />
        <p>{desc}</p>
      </div>
    );
  };

  console.log("the active service is: ", activeService);

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
          {typesOfServices.map((item, index) => (
            <ServiceType
              key={index}
              numberColor={
                item === activeService ? "#6E53CB" : "rgba(0, 0, 0, 0.34)"
              }
              textColor={item === activeService ? "#6E53CB" : "#1E2228"}
              fontWeight={item === activeService ? 600 : 400}
              number={`0${index + 1}`}
              title={item}
            />
          ))}
        </div>
        <div className="carousel-container-right">
          <ServicesCard
            image={
              activeService === typesOfServices[0]
                ? images.services_image1
                : activeService === typesOfServices[1]
                ? images.services_image2
                : activeService === typesOfServices[2]
                ? images.services_image3
                : null
            }
            desc={
              activeService === typesOfServices[0]
                ? "State your primary requirements like Platform, Influencer category, Number of influencers, Geography, Timeline, Budget etc."
                : activeService === typesOfServices[1]
                ? "Browse through the influencer spectrum, use advanced filters and shortlist the most relevant influencers for the campaign."
                : activeService === typesOfServices[2]
                ? "Define the deliverables requirement and circulate the campaign for final approval and monitor the status with real-time campaign dashboard."
                : null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

// https://imgbox.com/Mk4P8buE
// https://imgbox.com/rRr5dBPb
// https://imgbox.com/4tPc59oW
