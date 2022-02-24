import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";

import { Home, GetStarted } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
