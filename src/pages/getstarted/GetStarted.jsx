import React from "react";

import { AiFillStar } from "react-icons/ai";

import "./getstarted.css";
const GetStarted = () => {
  return (
    <div className="getstarted">
      <div className="left">
        <GsContent
          heading={"Are you a Brand?"}
          l1="Find the right set of influencers"
          l2="Design & execute marketing campaigns"
          l3="Partner for Brand Ambassador deals"
          l4="Exclusive partnerships with movies, shows & events"
        />
        <GsButton text="Start Now" />
      </div>
      <div className="right">
        <GsContent
          heading="Are you an Influencer?"
          l1="Join the elite community leaders"
          l2="Be part of popular brand campaigns"
          l3="Get exclusive Brand Ambassador offers"
          l4="Leverage your online presence & grow your audience"
        />
        <GsButton text="Join Now" />
      </div>
    </div>
  );
};

const GsContent = ({ heading, l1, l2, l3, l4 }) => {
  return (
    <div className="gs-content">
      <h3>{heading}</h3>
      <div className="icon-des-box">
        <div className="star-circle">
          <AiFillStar color="white" />
        </div>
        <p>{l1}</p>
      </div>
      <div className="icon-des-box">
        <div className="star-circle">
          <AiFillStar color="white" />
        </div>
        <p>{l2}</p>
      </div>
      <div className="icon-des-box">
        <div className="star-circle">
          <AiFillStar color="white" />
        </div>
        <p>{l3}</p>
      </div>
      <div className="icon-des-box">
        <div className="star-circle">
          <AiFillStar color="white" />
        </div>
        <p>{l4}</p>
      </div>
    </div>
  );
};

const GsButton = ({ text }) => {
  return <button className="gs-btn">{text}</button>;
};

export default GetStarted;
