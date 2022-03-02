import React from "react";

import "./getstarted.css";

import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { Navbar } from "../../components";
import { Footer } from "../../containers";

import { Button } from "@mui/material";

const GetStarted = () => {
  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex getstarted flex-col h-screen">
      <Navbar />
      <div className="sm:flex flex-1 sm:px-20 px-8 sm:mt-20">
        <div className="pr-10 mt-10 sm:mt-0">
          <GsContent
            heading={"Are you a Brand?"}
            l1="Find the right set of influencers"
            l2="Design & execute marketing campaigns"
            l3="Partner for Brand Ambassador deals"
            l4="Exclusive partnerships with movies, shows & events"
          />
          <div className="mt-10 md:mt-20">
            <Link to="./startnow">
              {/* <button className="mt-10 md:mt-20 md:text-xl md:px-5 bg-purple px-4 py-2 rounded-md text-white font-medium">
              Join Now
            </button> */}
              <Button sx={{ backgroundColor: "#6E53CB" }} variant="contained">
                Start Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 mb-14 sm:mb-0 sm:ml-20">
          <GsContent
            heading="Are you an Influencer?"
            l1="Join the elite community leaders"
            l2="Be part of popular brand campaigns"
            l3="Get exclusive Brand Ambassador offers"
            l4="Leverage your online presence & grow your audience"
          />
          <div className="mt-10 md:mt-20">
            <Link to="./joinnow">
              <Button sx={{ backgroundColor: "#6E53CB" }} variant="contained">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ss:hidden">
        <Footer />
      </div>
    </div>
  );
};

const GsContent = ({ heading, l1, l2, l3, l4 }) => {
  return (
    <div style={{ color: "#1D252D" }}>
      <div>
        <h3 className="text-xl md:text-4xl font-medium">{heading}</h3>
        <div className="flex mt-5 lg:mt-10 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l1}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l2}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l3}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l4}</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
