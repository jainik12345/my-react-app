/* eslint-disable no-unused-vars */
// // import React from 'react'
// import "./ContactTalkUs.css";
// // import contactus_touch_mail_icon from "../../../assets/icons/contactus_touch_mail_icon.svg";
// // import contactus_touch_location_icon from "../../../assets/icons/contactus_touch_location_icon.svg";
// // import contactus_touch_call_icon from "../../../assets/icons/contactus_touch_call_icon.svg";

// const ContactTalkUs = () => {
//   return (
//     <div className="contactus_talk_main_container">
//       <div className="contactus_talk_title">
//         <p>Let’s Talk</p>
//         <h3>Get In Touch with us</h3>
//       </div>
//       <div className="contactus_talk_content">
//         <div className="contactus_talk_content_1">
//           <div className="contactus_talk_content_1_middle">
//             <div className="contactus_talk_content_1_image">
//               <img
//                 // src={contactus_touch_mail_icon}
//                 alt="Mail Icon"
//               />
//             </div>
//             <div className="contactus_talk_content_1_title">
//               <h6>Mail Us</h6>
//               <p>contact@checkmateservices.com</p>
//             </div>
//           </div>
//         </div>
//         <div className="contactus_talk_content_2">
//           <div className="contactus_talk_content_2_middle">
//             <div className="contactus_talk_content_2_image">
//               <img
//                 // src={contactus_touch_location_icon}
//                 alt="Location Icon"
//               />
//             </div>
//             <div className="contactus_talk_content_2_title">
//               <h6>Checkmate Head Office</h6>
//               <p>Checkmate Corporate Office Amaan Towers...</p>
//             </div>
//           </div>
//         </div>
//         <div className="contactus_talk_content_3">
//           <div className="contactus_talk_content_3_middle">
//             <div className="contactus_talk_content_3_image">
//               <img
//                 // src={contactus_touch_call_icon}
//                 alt="Call Icon"
//               />
//             </div>
//             <div className="contactus_talk_content_3_title">
//               <h6>Call Us</h6>
//               <p>+91 265 6698200</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactTalkUs;


// add nee JSX 

import React, { useState } from 'react';
import "./ContactTalkUs.css";

const ContactTalkUs = () => {
  // State to track which section is currently active (0: Mail Us, 1: Head Office, 2: Call Us)
  const [activeSection, setActiveSection] = useState(1);

  // Arrow navigation handlers
  const handleNext = () => {
    setActiveSection((prevSection) => (prevSection === 2 ? 0 : prevSection + 1));
  };

  const handlePrev = () => {
    setActiveSection((prevSection) => (prevSection === 0 ? 2 : prevSection - 1));
  };

  // Handler for direct div clicks
  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="contactus_talk_main_container">
      <div className="contactus_talk_title">
        <p>Let’s Talk</p>
        <h3>Get In Touch with us</h3>
      </div>

      <div className="contactus_talk_content">
        {/* Mail Us */}
        <div
          className={`contactus_talk_content_1 ${activeSection === 0 ? 'active' : ''}`}
          onClick={() => handleSectionClick(0)}
        >
          <div className="contactus_talk_content_1_middle">
            <div className="contactus_talk_content_1_image">
              <img
                // src={contactus_touch_mail_icon}
                alt="Mail Icon"
              />
            </div>
            <div className="contactus_talk_content_1_title">
              <h6>Mail Us</h6>
              <p>contact@checkmateservices.com</p>
            </div>
          </div>
        </div>

        {/* Head Office */}
        <div
          className={`contactus_talk_content_2 ${activeSection === 1 ? 'active' : ''}`}
          onClick={() => handleSectionClick(1)}
        >
          <div className="contactus_talk_content_2_middle">
            <div className="contactus_talk_content_2_image">
              <img
                // src={contactus_touch_location_icon}
                alt="Location Icon"
              />
            </div>
            <div className="contactus_talk_content_2_title">
              <h6>Checkmate Head Office</h6>
              <p>Checkmate Corporate Office Amaan Towers...</p>
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div
          className={`contactus_talk_content_3 ${activeSection === 2 ? 'active' : ''}`}
          onClick={() => handleSectionClick(2)}
        >
          <div className="contactus_talk_content_3_middle">
            <div className="contactus_talk_content_3_image">
              <img
                // src={contactus_touch_call_icon}
                alt="Call Icon"
              />
            </div>
            <div className="contactus_talk_content_3_title">
              <h6>Call Us</h6>
              <p>+91 265 6698200</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="contactus_talk_expanded_content">
        {activeSection === 0 && (
          <div className="map_section">
            <div className="map_section_left">
              <h6>Mail Us</h6>
              <p>contact@checkmateservices.com</p>
            </div>
          </div>
        )}

        {activeSection === 1 && (
          <div className="map_section">
            <div className="map_section_left">
              <h6>Checkmate Head Office</h6>
              <p>Checkmate Corporate Office Amaan Towers,<br/>
                GF - 6,7,8,9, Suvas Colony, Fatehgunj,<br/>
                Vadodara, Gujarat (India).
              </p>
            </div>
            <div className="map_section_right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.0714430034!2d72.67907025548933!3d22.307158814136036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8555d384c3e7%3A0x229799206d9a2c6c!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693428289621!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}

        {activeSection === 2 && (
          <div className="map_section">
            <div className="map_section_left">
              <h6>Call Us</h6>
              <p>+91 265 6698200</p>
            </div>
          </div>
        )}

        <div className="arrow_buttons">
          <button className="arrow_button" onClick={handlePrev}>&#8592;</button>
          <button className="arrow_button" onClick={handleNext}>&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default ContactTalkUs;
