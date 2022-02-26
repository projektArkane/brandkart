import React from "react";

import {
  Header,
  // Hero,
  Brands,
  Services,
  Influencer,
  Testimonials,
  GetVerified,
  Footer,
} from "../../containers";

import { Navbar } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Hero /> */}
      <Brands />
      <Services />
      <Influencer />
      <Testimonials />
      <GetVerified />
      <Footer />
    </div>
  );
};

export default Home;
