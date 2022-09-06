import React from "react";
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import GAR from "./pages/GuidanceAndResourses"
import COT from "./pages/ContestOrganising"
import Error from "./pages/404";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guidance" element={<GAR />} />
          <Route path="/contest" element={<COT />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;