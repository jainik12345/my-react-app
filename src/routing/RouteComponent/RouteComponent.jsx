import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

import About from "../pages/About/About";

import Service from "../pages/Service/Service";

import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";

const RouteComponent = () => {
  const WebsitePage = ({ component: Component }) => {
    return (
      <>
        <Header />

        <Component />

        <Footer />
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<WebsitePage component={Home} />} />

        <Route path="/about" element={<WebsitePage component={About} />} />

        <Route path="/service" element={<WebsitePage component={Service} />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
