/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "./../../pages/About/About";
import Services from "../../pages/Services/Services";
import ContactUs from "../../pages/ContactUs/ContactUs";
import IndustriesMain from "../../pages/IndustriesMain/IndustriesMain";

const RouteComponent = () => {
  const WebsitePage = ({ component: Component }) => {
    return (
      <div>
        <Header />
        <Component />
        <Footer />  
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsitePage component={Home} />} />
        <Route path="/about" element={<WebsitePage component={About} />} />
        <Route path="/service" element={<WebsitePage component={Services} />} />
        <Route path="/contact" element={<WebsitePage component={ContactUs} />}  />
        <Route path="/industries" element={<WebsitePage component={IndustriesMain} />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
