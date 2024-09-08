// import React from 'react'
import React, { useState, useEffect } from "react";

import "./OurJourney.css";
import vertical_line from "../../../assets/icons/about_section_journey_vertical.svg";
import vertical_line_2 from "../../../assets/icons/about_section_journey_vertical_2.svg";
import point from "../../../assets/icons/about_section_ourjourney_point.svg";

const OurJourney = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
    document.body.classList.add("blur"); // Apply blur to the background
    setTimeout(() => {
      setPopupVisible(false);
      document.body.classList.remove("blur"); // Remove blur from the background
    }, 3000); // 3000 milliseconds = 3 seconds
  };
  return (
    <>
      <div className="ourjourney_main_container">
        <div className="ourjourney_title">
          <p>OUR</p>
          <h3>Journey</h3>
        </div>

        <div className="ourjourney_timeline">
          {/* Existing Timeline Items */}
          <div className="ourjourney_timeline_item_1">
            <h6>1985</h6>
            <div className="ourjourney_timeline_item_1_point">
              <abbr title="Private security, VIP Protection and cash management services">
                <img
                  src={point}
                  alt="about_section_ourjourney_point"
                  onClick={() =>
                    showPopup(
                      "Private security, VIP Protection and cash management services"
                    )
                  }
                />
              </abbr>
            </div>
            <div className="ourjourney_timeline_item_1_content">
              <div className="ourjourney_timeline_item_1_content_vertical_line">
                <img src={vertical_line} alt="Vertical line" />
              </div>
              <p>Checkmate Services Pvt. Ltd.</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="ourjourney_timeline_item_4">
            <div className="ourjourney_timeline_item_4_content">
              <p>Checkmate Services Pvt. Ltd.</p>
              <div className="ourjourney_timeline_item_4_content_vertical_line">
                <img src={vertical_line_2} alt="Vertical line" />
              </div>
            </div>
            <div className="ourjourney_timeline_item_4_point">
              <abbr title="Corporate Social Responsibility (CSR) activity, social welfare activities, specifically in rural areas">
                <img
                  src={point}
                  alt="about_section_ourjourney_point"
                  onClick={() =>
                    showPopup(
                      "Corporate Social Responsibility (CSR) activity, social welfare activities, specifically in rural areas"
                    )
                  }
                />
              </abbr>
            </div>
            <h6>2014</h6>
          </div>
          {/* Additional timeline items */}
        </div>
      </div>

      {/* Popup Component */}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OurJourney;
