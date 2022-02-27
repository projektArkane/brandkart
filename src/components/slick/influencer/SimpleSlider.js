import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images } from "../../../constants";

import "./simpleslider.css";

const Card = ({ picture, name, type }) => {
  return (
    <div className="w-11/12 mx-auto influencer-card-box rounded-lg">
      <div className="flex flex-col items-center">
        <div
          style={{ backgroundColor: "#F8F4FF" }}
          className="w-full flex justify-center rounded-t-lg"
        >
          <div className="w-9/12">
            <img
              src={
                picture === 1
                  ? images.influencer1
                  : picture === 2
                  ? images.influencer2
                  : picture === 3
                  ? images.influencer3
                  : picture === 4
                  ? images.influencer4
                  : null
              }
              alt="someinfluencer"
            />
          </div>
        </div>
        <div className="py-7">
          <h3 className="font-medium text-base text-bkBlack2 text-center">
            {name}
          </h3>
          <h4 style={{ color: "#7B8289" }} className="text-center mt-2">
            {type}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="py-10">
        <Slider className="pb-10" {...settings}>
          <div>
            <Card picture={1} name="Yvonne Knight" type="Fashion" />
          </div>
          <div>
            <Card picture={2} name="Phil Collins" type="Artist" />
          </div>
          <div>
            <Card picture={3} name="Paul Phifer" type="Writer" />
          </div>
          <div>
            <Card picture={4} name="Agatha Christie" type="Writer" />
          </div>
          <div>
            <Card picture={1} name="Paul Walker" type="Actor" />
          </div>
          <div>
            <Card picture={2} name="Nicole Kidman" type="Actor" />
          </div>
          <div>
            <Card picture={3} name="Paul Phifer" type="Writer" />
          </div>
          <div>
            <Card picture={4} name="Agatha Christie" type="Writer" />
          </div>
          <div>
            <Card picture={1} name="Paul Walker" type="Actor" />
          </div>
          <div>
            <Card picture={2} name="Nicole Kidman" type="Actor" />
          </div>
          <div>
            <Card picture={4} name="Agatha Christie" type="Writer" />
          </div>
          <div>
            <Card picture={2} name="Nicole Kidman" type="Actor" />
          </div>
        </Slider>
      </div>
    );
  }
}
