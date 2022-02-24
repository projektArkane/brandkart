import React from "react";

import {
  Header,
  Brands,
  Services,
  Influencer,
  Testimonials,
  GetVerified,
  Footer,
} from "../../containers";

const Home = () => {
  return (
    <div>
      <Header />
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
