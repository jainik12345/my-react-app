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
import SecurityServices from "../../pages/Services/SecurityServices/SecurityServices";
import FireSafetyServices from "../../pages/Services/FireSafetyServices/FireSafetyServices";

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
        <Route
          path="/services/security-service"
          element={<WebsitePage component={SecurityServices} />}
        />
        <Route
          path="/services/fire-safety-service"
          element={<WebsitePage component={FireSafetyServices} />}
        />
        <Route
          path="/contact"
          element={<WebsitePage component={ContactUs} />}
        />
        <Route
          path="/industries"
          element={<WebsitePage component={IndustriesMain} />}
        />
      </Routes>
    </>
  );
};

export default RouteComponent;
