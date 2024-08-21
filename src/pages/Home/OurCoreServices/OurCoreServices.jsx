// import React from "react";
import "./OurCoreServices.css";
import "../../../assets/color/root_color.css";
import Card_OurCoreServices from "./Card_OurCoreServices";
import event_management_icon from "../../../assets/icons/event_management_icon.svg";
import cash_management_icon from "../../../assets/icons/cash_management_icon.svg";
import security_services_icon from "../../../assets/icons/security_services_icon.svg";
import facility_management_icon from "../../../assets/icons/facility_management_icon.svg";
import fire_and_safety_icon from "../../../assets/icons/fire_and_safety_icon.svg";
import electronic_security from "../../../assets/icons/electronic_security_icon.svg";
import arrow from "../../../assets/icons/arrow_icon.svg";
import horizontal_line from "../../../assets/icons/horizontal_line.svg";
import vertical_line from "../../../assets/icons/vertical_line.svg";

const OurCoreServices = () => {
  return (
    <>
      <div className="our_core_services_main_container">
        <p className="our_core_services_p">Eyebrow Heading</p>
        <h3 className="our_core_services_h3">Our Core Services</h3>
        <div className="our_core_services_cards">
          <Card_OurCoreServices
            imageSrc={security_services_icon}
            altText={"Security Services"}
            title={"Security Services"}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
          <img className="vertical_line1" src={vertical_line} alt="" />
          <Card_OurCoreServices
            imageSrc={facility_management_icon}
            altText={"Facility Management "}
            title={"Facility Management "}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
          <img className="vertical_line2" src={vertical_line} alt="" />
          <Card_OurCoreServices
            imageSrc={fire_and_safety_icon}
            altText={"Fire and Safety "}
            title={"Fire and Safety "}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
          <img src={horizontal_line} className="horizontal_line1" alt="" />
          <Card_OurCoreServices
            imageSrc={electronic_security}
            altText={"Electronic Security "}
            title={"Electronic Security "}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
          <Card_OurCoreServices
            imageSrc={cash_management_icon}
            altText={"Cash Management "}
            title={"Cash Management"}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
          <Card_OurCoreServices
            imageSrc={event_management_icon}
            altText={"Event Management "}
            title={"Event Management "}
            content={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur."
            }
            arrow_image={arrow}
          />
        </div>
      </div>
    </>
  );
};

export default OurCoreServices;
