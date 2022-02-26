import React from "react";
import "./App.css";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";

import { Footer } from "./containers";

import { Home, GetStarted } from "./pages";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
};

export default App;
