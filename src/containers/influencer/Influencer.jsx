import React, { useState } from "react";

import { SimpleSlider } from "../../components";

import "./influencer.css";

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
    <div className="influencer">
      <div className="line-1">
        <h3>Influencer</h3>
      </div>
      <div className="line-2">
        <p>Showcase of our top influencer </p>
      </div>
      <div className="pills-container">
        {pillTitles.map((item) => (
          <Pill
            key={item}
            textColor={item === activePill ? "#6E53CB" : "#7F8186"}
            borderColor={item === activePill ? "#6E53CB" : "#ffff"}
            fontWeight={item === activePill ? 700 : 400}
            title={item}
          />
        ))}
      </div>
      <div className="influencer-carousel">
        <SimpleSlider />
      </div>
    </div>
  );
};
export default Influencer;
