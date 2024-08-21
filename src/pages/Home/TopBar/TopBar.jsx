// import React, { useState } from "react";
// import "./TopBar.css";
// import facebook_icon from "../../../assets/icons/facebook.svg";
// import twitter_icon from "../../../assets/icons/twitter.svg";
// import google_icon from "../../../assets/icons/google.svg";
// import instagram_icon from "../../../assets/icons/instagram.svg";
// import youtube_icon from "../../../assets/icons/youtube.svg";
// import calling_icon from "../../../assets/icons/calling.svg";
// import mail_icon from "../../../assets/icons/mail.svg";
// import navbar_logo from "../../../assets/images/navbar_logo.png";
// import Hamburger from "../Hamburger/Hamburger";

// const TopBar = () => {
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);

//   const toggleHamburger = () => {
//     setHamburgerOpen(!hamburgerOpen);
//   };
// const navbarRightStyle = {
//   display: hamburgerOpen ? "inline" : "none",
//   backgroundColor: "blue",
//   height: "100px",
//   width: "100px",
//   marginTop: "50px",
//   position: "absolute",
// };

//   return (
//     <>
//       <div className="topbar">
//         <div className="topbar-left">
//           <div className="topbar-left-social">
//             <a href="https://facebook.com" className="social-icon">
//               <img src={facebook_icon} alt="Facebook" />
//             </a>
//             <a href="https://twitter.com" className="social-icon">
//               <img src={twitter_icon} alt="Twitter" />
//             </a>
//             <a href="https://google.com" className="social-icon">
//               <img src={google_icon} alt="Google" />
//             </a>
//             <a href="https://instagram.com" className="social-icon">
//               <img src={instagram_icon} alt="Instagram" />
//             </a>
//             <a href="https://youtube.com" className="social-icon">
//               <img src={youtube_icon} alt="YouTube" />
//             </a>
//           </div>
//         </div>
//         <div className="topbar-right">
//           <div className="topbar-right-call">
//             <img src={calling_icon} alt="Call" />
//             <span>+91 265 6698200</span>
//           </div>
//           <div className="topbar-right-mail">
//             <img src={mail_icon} alt="Mail" />
//             <span>contact@checkmateservices.com</span>
//           </div>
//         </div>
//       </div>

//       <div className="navbar">
//         <div className="navbar-left">
//           <img src={navbar_logo} alt="Navbar_CheckMate_logo" />
//         </div>
//         <div className="navbar-right">
//           <ul>
//             <li className="home_section">Home</li>
//             <li className="about_section">About</li>
//             <li className="services_section">Services</li>
//             <li className="industries_section">Industries</li>
//             <button className="contactus_btn" type="buttton">
//               Contact Us
//             </button>
//           </ul>
//           <div
//             className="hamburger"
//             onClick={toggleHamburger}
//             style={navbarRightStyle}
//           >
//             <Hamburger />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopBar;

// // EXPERIMENT :

import  { useState } from "react";
import "./TopBar.css";
import facebook_icon from "../../../assets/icons/facebook.svg";
import twitter_icon from "../../../assets/icons/twitter.svg";
import google_icon from "../../../assets/icons/google.svg";
import instagram_icon from "../../../assets/icons/instagram.svg";
import youtube_icon from "../../../assets/icons/youtube.svg";
import calling_icon from "../../../assets/icons/calling.svg";
import mail_icon from "../../../assets/icons/mail.svg";
import navbar_logo from "../../../assets/images/navbar_logo.png";
import Hamburger from "../HamBurger/Hamburger";

const TopBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-left-social">
            <a href="https://facebook.com" className="social-icon">
              <img src={facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <img src={twitter_icon} alt="Twitter" />
            </a>
            <a href="https://google.com" className="social-icon">
              <img src={google_icon} alt="Google" />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <img src={instagram_icon} alt="Instagram" />
            </a>
            <a href="https://youtube.com" className="social-icon">
              <img src={youtube_icon} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-right-call">
            <img src={calling_icon} alt="Call" />
            <span>+91 265 6698200</span>
          </div>
          <div className="topbar-right-mail">
            <img src={mail_icon} alt="Mail" />
            <span>contact@checkmateservices.com</span>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-left">
          <img src={navbar_logo} alt="Navbar_CheckMate_logo" />
        </div>
        <div className="navbar-right">
          <ul className={hamburgerOpen ? "show" : "hide"}>
            <li className="home_section">Home</li>
            <li className="about_section">About</li>
            <li className="services_section">Services</li>
            <li className="industries_section">Industries</li>
            <button className="contactus_btn" type="button">
              Contact Us
            </button>
          </ul>
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;