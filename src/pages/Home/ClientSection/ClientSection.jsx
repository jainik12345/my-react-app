// import React from "react";
import "./ClientSection.css";
import "../../../assets/color/root_color.css";
import axis from "../../../assets/icons/axis_bank_icon.svg";
import adani from "../../../assets/icons/adani_icon.svg";
import apollo from "../../../assets/icons/apollo_icon.svg";
import infosys from "../../../assets/icons/infosys_icon.svg";
import domino from "../../../assets/icons/domino_icon.svg";
import taj from "../../../assets/icons/taj_icon.svg";

const ClientSection = () => {
  const clientLogos = [
    { src: adani, alt: "adani_icon" },
    { src: apollo, alt: "apollo_icon" },
    { src: infosys, alt: "infosys_icon" },
    { src: domino, alt: "domino_icon" },
    { src: axis, alt: "axis_icon" },
    { src: taj, alt: "taj_icon" },
  ];

  return (
    <div className="client_logo_main_container">
      <div className="client_logo_content">
        {clientLogos.concat(clientLogos).map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
