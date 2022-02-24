import React from "react";
import "./App.css";

import {
  Header,
  Brands,
  Services,
  Influencer,
  Testimonials,
  GetVerified,
  Footer,
} from "./containers";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
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

export default App;
