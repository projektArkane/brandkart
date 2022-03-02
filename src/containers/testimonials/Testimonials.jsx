import React from "react";
import "./testimonials.css";
import { images, logos } from "../../constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div id="testimonials-section" className="px-8 md:px-20 mt-40">
      <div className="flex justify-center">
        <h3 className="text-purple text-lg md:text-xl font-medium uppercase">
          Testimonials
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 text-subhead font-semibold text-center text-2xl ss:text-3xl md:text-4xl xl:text-secHeading xl:leading-secHeading">
          What our happy clients say
        </p>
      </div>
      <div className="mt-20 lg:mt-24">
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          speed={4300}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center w-full">
              <TestiMony
                name="Arthi Vendan"
                designation="Manager, Brand Communications"
                testimony={
                  "The way our team coordinated for influencer marketing campaigns before Brandkart, was a challenging task. With Brandkart, we’re able to improve the campaign turnaround time significantly."
                }
                image={1}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center w-full">
              <TestiMony
                name="Saumya Jain"
                designation="Sr Sales Marketing Manager"
                testimony="A team of highly committed members who are very responsive & proactive to our business needs. With their expertise on the network of key influencers, Brandkart has helped us reach out to the right target audiences for our campaigns"
                image={2}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center w-full">
              <TestiMony
                name="Mohit Goswami"
                designation="Co-founder, Eight Network"
                testimony="Brandkart has made it easier to work with high profile influencers. Especially with the Speed and Quality that Brandkart has delivered, we have our complete faith in the team."
                image={3}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center w-full">
              <TestiMony
                name="Sachin Jain"
                designation="Manager, Marketing"
                testimony="The team is amazing to work with. The Brandkart team guides us with customised requirements and also recommends most suitable influencers for the campaigns. I would recommend this platform to those who are looking to work with a hassle-free team."
                image={4}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

const TestiMony = ({ name, designation, testimony, image }) => {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }} className="w-full">
      <div className="flex mx-auto flex-col items-center w-10/12 lg:flex-row lg:gap-6">
        <div className="flex justify-center w-full sm:w-10/12 md:w-9/12 lg:w-4/12">
          <div className="w-10/12">
            <img
              src={images.testimonial_girl}
              src={
                image === 1
                  ? logos.milaap
                  : image === 2
                  ? logos.myprotein
                  : image === 3
                  ? "https://www.eight.network/wp-content/uploads/2021/05/Eight-Logo-T.png"
                  : image === 4
                  ? logos.haier
                  : null
              }
              // width={300}
              // className="w-6/12 md:w-6/12 lg:w-9/12"
              alt="testimonial-girl"
            />
          </div>
        </div>
        <div className="flex lg:flex-1 mt-20 lg:mt-0 justify-center flex-col relative lg:border-l-4 lg:border-l-gray-300 lg:pl-8">
          <h3 className="text-bkBlack text-left text-xl lg:text-2xl font-semibold">
            {name}
          </h3>
          <h4 style={{ color: "#7B8289" }} className="text-left text-base">
            {designation}
          </h4>
          <p className="text-renownBlack text-left text-base md:text-lg lg:w-10/12 mt-4 leading-relaxed">
            {testimony}
          </p>
          <div className="absolute hidden lg:flex lg:w-10 bottom-0 right-0 lg:right-6 lg:-bottom-5">
            <img src={images.quote_sign} />
          </div>
          <button className="hidden" id="rm-btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
