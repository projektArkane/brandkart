import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import "./services.css";

import { BsArrowRight } from "react-icons/bs";

import { images } from "../../constants";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid rgba(0, 0, 0, 0.1)`,
  border: `1px solid transparent`,
  "&:not(:last-child)": {
    // borderBottom: 0,
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDownwardSharpIcon sx={{ fontSize: "1.4rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "transparent",
  flexDirection: "row",
  paddingTop: 20,
  paddingBottom: 20,
  color: "#1E2228",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-180deg)",
  },
  "& .Mui-expanded": {
    color: "#6E53CB",
    fontWeight: 600,
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    // justifyContent: "center",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    // paddingBottom: 0,
    // backgroundColor: "red",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  borderTop: "1px solid none",
}));

const Services = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
      <div
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: "rgba(0, 0, 0, 0.4)",
        }}
        className="flex service-type w-10/12 pt-12 pb-14"
      >
        <div
          style={{ color: numberColor, paddingTop: 2 }}
          className="lg:text-2xl xl:text-serCara"
        >
          {number}
        </div>
        <div>
          <h2
            className=" lg:text-2xl xl:text-serCara cursor-pointer"
            style={{ fontWeight: fontWeight, color: textColor }}
            onClick={() => setActiveService(title)}
          >
            {title}
          </h2>
          <p>Features</p>
        </div>
        <div className="text-serCara flex items-center">
          <BsArrowRight color={numberColor} />
        </div>
      </div>
    );
  };

  const ServicesCard = ({ image, desc }) => {
    return (
      <div className="services-card">
        <img src={image} width={591} />
        <p className="ml-8 text-renownBlack text-lg pr-24 leading-loose">
          {desc}
        </p>
      </div>
    );
  };

  console.log("the active service is: ", activeService);

  return (
    <div className="services px-8 md:px-20 xl:mt-10">
      <div className="flex justify-center">
        <h3 className="text-purple text-xl font-semibold uppercase">
          Services
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 font-semibold text-center text-4xl xl:text-secHeading xl:leading-secHeading">
          How we make it simpler
        </p>
      </div>

      <div className="mt-10 lg:hidden">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="flex">
              <div className="">
                <p className="text-xl md:text-2xl">01</p>
              </div>
              <div className="pl-5">
                <p className="text-xl md:text-2xl">Define Campaign</p>
                <p className="text-renownBlack font-normal">Features</p>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <img src={images.services_image1} alt="image" />
            <p className="text-renownBlack text-base md:text-xl px-0 md:px-6">
              State your primary requirements like Platform, Influencer
              category, Number of influencers, Geography, Timeline, Budget etc.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <div className="flex">
              <div className="">
                <p className="text-xl md:text-2xl">02</p>
              </div>
              <div className="pl-5">
                <p className="text-xl md:text-2xl">Shortlist Influencers</p>
                <p className="text-renownBlack font-normal">Features</p>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <img src={images.services_image2} alt="image" />
            <p className="text-renownBlack text-base md:text-xl px-0 md:px-6">
              Browse through the influencer spectrum, use advanced filters and
              shortlist the most relevant influencers for the campaign.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <div className="flex">
              <div className="">
                <p className="text-xl md:text-2xl">03</p>
              </div>
              <div className="pl-5">
                <p className="text-xl md:text-2xl">Execute Campaign</p>
                <p className="text-renownBlack font-normal">Features</p>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <img src={images.services_image3} alt="image" />
            <p className="text-renownBlack text-base md:text-xl px-0 md:px-6">
              Define the deliverables requirement and circulate the campaign for
              final approval and monitor the status with real-time campaign
              dashboard.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="hidden lg:flex">
        <div className="carousel-container">
          <div className="flex flex-col flex-1 justify-center items-center">
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
          <div className="flex flex-1">
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
    </div>
  );
};

export default Services;

// https://imgbox.com/Mk4P8buE
// https://imgbox.com/rRr5dBPb
// https://imgbox.com/4tPc59oW
