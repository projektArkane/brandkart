import React, { Component } from "react";
import Slider from "react-slick";
import "./simpleslider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images } from "../../../constants";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
      <div className="slider-container">
        <Slider className="slider" {...settings}>
          <div className="influencer-container">
            <div>
              <img src={images.influencer1} width={200} alt="influencer" />
            </div>
            <div>
              <h3>Emma Watson</h3>
              <span>Fashion</span>
            </div>
          </div>
          {/* <div>
            <img src={images.influencer2} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer3} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer4} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer1} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer2} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer3} alt="influencer" />
          </div>
          <div>
            <img src={images.influencer4} alt="influencer" />
          </div> */}
        </Slider>
      </div>
    );
  }
}
