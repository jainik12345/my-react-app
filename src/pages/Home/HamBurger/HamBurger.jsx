import React from "react";
import "./Hamburger.css";

const Hamburger = ({ isOpen }) => {
  // Define styles based on the isOpen prop
  const burger1Style = {
    transform: isOpen ? "rotate(39deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const burger2Style = {
    opacity: isOpen ? 0 : 1,
    transition: "opacity 0.3s ease",
  };

  const burger3Style = {
    transform: isOpen ? "rotate(-39deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="hamburger">
      <div className="burger burger1" style={burger1Style}></div>
      <div className="burger burger2" style={burger2Style}></div>
      <div className="burger burger3" style={burger3Style}></div>
    </div>
  );
};

export default Hamburger;
