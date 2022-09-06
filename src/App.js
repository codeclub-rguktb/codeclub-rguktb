import React, { useState } from "react";
import Main from "./components/Teams";
// import "./styles/App.css";
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import GAR from "./pages/GuidanceAndResourses"

import SL from "./pages/Slider"

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guidance" element={<GAR />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;