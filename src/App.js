import React from "react";
import "./App.css";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, GetStarted } from "./pages";

import { StartNow } from "./pages";
import { JoinNow } from "./pages";

const App = () => {
  return (
    <div className="app">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/getstarted/startnow" element={<StartNow />} />
            <Route path="/getstarted/joinnow" element={<JoinNow />} />
            {/* <Route path="/getstarted/start" element={<Start />} /> */}
            {/* <Route path="/getstarted/join" element={<Join />} /> */}
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
};

export default App;
