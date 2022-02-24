import React from "react";
import "./testimonials.css";

import { images } from "../../constants";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="line-1">
        <h3>Testimonials</h3>
      </div>
      <div className="line-2">
        <p>What our happy clients say </p>
      </div>
      <div className="tm-main">
        <div className="tm-left">
          <img
            src={images.testimonial_girl}
            width={300}
            alt="testimonial-girl"
          />
          <img id="dots" src={images.dots} width={200} alt="dots" />
        </div>
        <div className="tm-right">
          <h3>Matthew Paul</h3>
          <p>
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <button className="rm-btn">Read More</button>
        </div>
        <img id="quote-sign" width={55} src={images.quote_sign} />
      </div>
    </div>
  );
};

export default Testimonials;
