/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Header.css";
// // import { MegaMenu } from "./MegaMenu";
// import MegaMenu from "../Services/MegaMenu/MegaMenu";

// // Importing icons and images
// import facebook_icon from "../../assets/icons/facebook.svg";
// import twitter_icon from "../../assets/icons/twitter.svg";
// import google_icon from "../../assets/icons/google.svg";
// import instagram_icon from "../../assets/icons/instagram.svg";
// import youtube_icon from "../../assets/icons/youtube.svg";
// import calling_icon from "../../assets/icons/calling.svg";
// import mail_icon from "../../assets/icons/mail.svg";
// import navbar_logo from "../../assets/images/navbar_logo.png";
// import Hamburger from "./../Home/HamBurger/HamBurger";

// const Header = () => {
//   const location = useLocation();

//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false); // State for MegaMenu visibility

//   const whatsappNumber = "+91 2656698200";
//   const emailAddress = "contact@checkmateservices.com";
//   const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;
//   const mailtoUrl = `mailto:${emailAddress}`;

//   const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

//   const toggleMenu = () => {
//     setIsMenuVisible(!isMenuVisible);
//     if (!isMenuVisible) setActiveDropdown(null);
//   };

//   const toggleDropdown = (dropdownId) => {
//     setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
//   };

//   const handleDropdownClick = (e, dropdownId) => {
//     e.stopPropagation();
//     if (isMenuVisible) toggleDropdown(dropdownId);
//   };

//   const handleMouseEnter = () => setIsMegaMenuVisible(true); // Show MegaMenu on hover
//   const handleMouseLeave = () => setIsMegaMenuVisible(false); // Hide MegaMenu when not hovering

//   return (
//     <>
//       <div className="header">
//         <div className="topbar">
//           <div className="topbar-left">
//             <div className="topbar-left-social">
//               <a href="https://facebook.com" className="facebook_icon">
//                 <img src={facebook_icon} alt="Facebook" />
//               </a>
//               <a href="https://twitter.com" className="twitter_icon">
//                 <img src={twitter_icon} alt="Twitter" />
//               </a>
//               <a href="https://google.com" className="google_icon">
//                 <img src={google_icon} alt="Google" />
//               </a>
//               <a href="https://instagram.com" className="instagram_icon">
//                 <img src={instagram_icon} alt="Instagram" />
//               </a>
//               <a href="https://youtube.com" className="youtube_icon">
//                 <img src={youtube_icon} alt="YouTube" />
//               </a>
//             </div>
//           </div>
//           <div className="topbar-right">
//             <a href={whatsappUrl} target="_blank" className="topbar-right-call">
//               <img src={calling_icon} alt="Call" />
//               <span>{whatsappNumber}</span>
//             </a>
//             <a href={mailtoUrl} className="topbar-right-mail">
//               <img src={mail_icon} alt="Mail" />
//               <span>{emailAddress}</span>
//             </a>
//           </div>
//         </div>
//         <div className="navbar_container">
//           <div className="navbar">
//             <div className="navbar-left">
//               <Link to="/">
//                 <img src={navbar_logo} alt="Navbar_CheckMate_logo" />
//               </Link>
//             </div>
//             <div className="navbar-right">
//               <ul className="hamburgerOpen">
//                 <li
//                   className={`nav-item home_section ${
//                     location.pathname === "/" ? "active" : ""
//                   }`}
//                 >
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li
//                   className={`nav-item about_section ${
//                     location.pathname === "/about" ? "active" : ""
//                   }`}
//                 >
//                   <Link to="/about">About</Link>
//                 </li>

//                 <li
//                   className={`nav-item services_section ${
//                     location.pathname === "/service" ? "active" : ""
//                   }`}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <Link to="/service">Service</Link>
//                   {/* {isMegaMenuVisible && <MegaMenu />}{" "} */}
//                 </li>

//                 <li
//                   className={`nav-item industries_section ${
//                     location.pathname === "/industries" ? "active" : ""
//                   }`}
//                 >
//                   <Link to="/industries">Industries</Link>
//                 </li>
//                 <Link to="/contact">
//                   <button className="contactus_btn" type="button">
//                     Contact Us
//                   </button>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="main-responsive-navbar-main">
//           <header>
//             <div className="res">
//               <nav>
//                 <div className="logo">
//                   <img src={navbar_logo} alt="Logo" />
//                 </div>

//                 <div
//                   className="menu-toggle"
//                   id="mobile-menu"
//                   onClick={toggleMenu}
//                 >
//                   <div className="hamburger" onClick={toggleHamburger}>
//                     <Hamburger isOpen={hamburgerOpen} />
//                   </div>
//                 </div>

//                 <ul className={`nav ${isMenuVisible ? "showing" : ""}`}>
//                   <li
//                     className={`nav-item ${
//                       location.pathname === "/" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/">Home</Link>
//                   </li>

//                   <li
//                     className={`nav-item ${
//                       location.pathname.startsWith("/about") ? "active" : ""
//                     }`}
//                   >
//                     <a
//                       href="#"
//                       className={`menu-item ${
//                         activeDropdown === 1 ? "active" : ""
//                       }`}
//                       onClick={(e) => handleDropdownClick(e, 1)}
//                     >
//                       About
//                       <span
//                         className={`arrow ${
//                           activeDropdown === 1 ? "rotate" : ""
//                         }`}
//                       ></span>
//                     </a>

//                     <ul
//                       className={`dropdown ${
//                         activeDropdown === 1 ? "show" : ""
//                       }`}
//                     >
//                       <li>
//                         <a href="#">Company overview</a>
//                       </li>

//                       <li>
//                         <a href="#">Checkmate History</a>
//                       </li>

//                       <li>
//                         <a href="#">Management Team</a>
//                       </li>

//                       <li>
//                         <a href="#">Award & Accreditation</a>
//                       </li>

//                       <li>
//                         <a href="#">Career Of Checkmate</a>
//                       </li>

//                       <li>
//                         <a href="#">Checkmate Clientele</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li
//                     className={`nav-item ${
//                       location.pathname.startsWith("/service") ? "active" : ""
//                     }`}
//                   >
//                     <a
//                       href="#"
//                       className={`menu-item ${
//                         activeDropdown === 2 ? "active" : ""
//                       }`}
//                       onClick={(e) => handleDropdownClick(e, 2)}
//                     >
//                       Services
//                       <span
//                         className={`arrow ${
//                           activeDropdown === 2 ? "rotate" : ""
//                         }`}
//                       ></span>
//                     </a>

//                     <ul
//                       className={`dropdown ${
//                         activeDropdown === 2 ? "show" : ""
//                       }`}
//                     >
//                       <li>
//                         <a href="#">Security Services</a>
//                       </li>

//                       <li>
//                         <a href="#">Cash Management</a>
//                       </li>

//                       <li>
//                         <a href="#">Facility Management</a>
//                       </li>

//                       <li>
//                         <a href="#">Fire and Safety Training</a>
//                       </li>

//                       <li>
//                         <a href="#">Electronic Solution</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li
//                     className={`nav-item ${
//                       location.pathname === "/industries" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/industries">Industries</Link>
//                   </li>

//                   <li
//                     className={`nav-item ${
//                       location.pathname === "/contact" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/contact">Contact Us</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </header>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import facebook_icon from "../../assets/icons/facebook.svg";
import twitter_icon from "../../assets/icons/twitter.svg";
import google_icon from "../../assets/icons/google.svg";
import instagram_icon from "../../assets/icons/instagram.svg";
import youtube_icon from "../../assets/icons/youtube.svg";
import calling_icon from "../../assets/icons/calling.svg";
import mail_icon from "../../assets/icons/mail.svg";
import navbar_logo from "../../assets/images/navbar_logo.png";
import Hamburger from "../../pages/Home/HamBurger/Hamburger";

import security_service_icon from "../../assets/icons/service_section_popup_security_service.svg";
import facility_meng_icon from "../../assets/icons/service_section_popup_facility_man.svg";
import fire_safety_iocn from "../../assets/icons/service_section_popup_firesafety.svg";
import electronic_security_icon from "../../assets/icons/service_section_popup_electronic_security.svg";
import cash_meng from "../../assets/icons/service_section_popup_cash_man.svg";
import event_meng from "../../assets/icons/service_section_popup_event_man.svg";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const whatsappNumber = "+91 2656698200";
  const emailAddress = "contact@checkmateservices.com";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;
  const mailtoUrl = `mailto:${emailAddress}`;

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (!isMenuVisible) setShowMenu(false);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
    setIsMenuVisible(false);
  };

  const closeMegaMenu = () => {
    setShowMenu(false);
  };

  const handleDropdownClick = (e, dropdownId) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="header">
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-left-social">
              <a
                href="https://facebook.com"
                target="_blank"
                className="facebook_icon"
              >
                <img src={facebook_icon} alt="Facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="twitter_icon"
              >
                <img src={twitter_icon} alt="Twitter" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                className="google_icon"
              >
                <img src={google_icon} alt="Google" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="instagram_icon"
              >
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="youtube_icon"
              >
                <img src={youtube_icon} alt="YouTube" />
              </a>
            </div>
          </div>
          <div className="topbar-right">
            <a href={whatsappUrl} target="_blank" className="topbar-right-call">
              <img src={calling_icon} alt="Call" />
              <span>{whatsappNumber}</span>
            </a>
            <a href={mailtoUrl} className="topbar-right-mail">
              <img src={mail_icon} alt="Mail" />
              <span>{emailAddress}</span>
            </a>
          </div>
        </div>

        <div className="navbar_container">
          <div className="navbar">
            <div className="navbar-left">
              <Link to="/">
                <img src={navbar_logo} alt="Navbar_CheckMate_logo" />
              </Link>
            </div>
            <div className="navbar-right">
              <ul className="hamburgerOpen">
                <li
                  className={`nav-item home_section ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item about_section ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    About Us
                  </Link>
                </li>
                <li
                  className={`nav-item services_section ${
                    location.pathname === "/service" ? "active" : ""
                  }`}
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  Services
                  {showMenu && <MegaMenu closeMegaMenu={closeMegaMenu} />}
                </li>
                <li
                  className={`nav-item industries_section ${
                    location.pathname === "/industries" ? "active" : ""
                  }`}
                >
                  <Link to="/industries" onClick={() => window.scrollTo(0, 0)}>
                    Industries
                  </Link>
                </li>
              </ul>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button className="contactus_btn" type="button">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="main-responsive-navbar-main">
          <header>
            <div className="res">
              <nav>
                <div
                  className="menu-toggle"
                  id="mobile-menu"
                  onClick={toggleMenu}
                >
                  <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                  </div>
                </div>
                <div className="logo">
                  <img src={navbar_logo} alt="Logo" />
                </div>

                <ul className={`nav ${isMenuVisible ? "showing" : ""}`}>
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname.startsWith("/about") ? "active" : ""
                    }`}
                  >
                    <Link
                      to=""
                      className={`menu-item ${
                        activeDropdown === 1 ? "active" : ""
                      }`}
                      onClick={(e) => handleDropdownClick(e, 1)}
                    >
                      <Link to="/about" onClick={closeMenu}>
                        About Us
                      </Link>
                      <span
                        className={`arrow ${
                          activeDropdown === 1 ? "rotate" : ""
                        }`}
                      ></span>
                    </Link>
                    <ul
                      className={`dropdown ${
                        activeDropdown === 1 ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Company overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Checkmate History
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Management Team
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Award & Accreditation
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Career Of Checkmate
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Checkmate Clientele
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* try 

<li
  className={`nav-item ${
    location.pathname.startsWith("/about") ? "active" : ""
  }`}
>
  <div
    className={`menu-item ${activeDropdown === 1 ? "active" : ""}`}
    onClick={(e) => handleDropdownClick(e, 1)}
  >
    <Link to="/about" onClick={closeMenu}>
      About Us
    </Link>
    <span
      className={`arrow ${activeDropdown === 1 ? "rotate" : ""}`}
    ></span>
  </div>
  <ul
    className={`dropdown ${activeDropdown === 1 ? "show" : ""}`}
  >
    <li>
      <Link to="/" onClick={closeMenu}>
        Company overview
      </Link>
    </li>
    <li>
      <Link to="/" onClick={closeMenu}>
        Checkmate History
      </Link>
    </li>
    <li>
      <Link to="/" onClick={closeMenu}>
        Management Team
      </Link>
    </li>
    <li>
      <Link to="/" onClick={closeMenu}>
        Award & Accreditation
      </Link>
    </li>
    <li>
      <Link to="/" onClick={closeMenu}>
        Career Of Checkmate
      </Link>
    </li>
    <li>
      <Link to="/" onClick={closeMenu}>
        Checkmate Clientele
      </Link>
    </li>
  </ul>
</li> */}

                  <li
                    className={`nav-item ${
                      location.pathname.startsWith("/service") ? "active" : ""
                    }`}
                  >
                    <Link
                      to=""
                      className={`menu-item ${
                        activeDropdown === 2 ? "active" : ""
                      }`}
                      onClick={(e) => handleDropdownClick(e, 2)}
                    >
                      Services
                      <span
                        className={`arrow ${
                          activeDropdown === 2 ? "rotate" : ""
                        }`}
                      ></span>
                    </Link>
                    <ul
                      className={`dropdown ${
                        activeDropdown === 2 ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link
                          to="/services/security-service"
                          onClick={closeMenu}
                        >
                          Security Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Cash Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Facility Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/fire-safety-service"
                          onClick={closeMenu}
                        >
                          Fire and Safety Training
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closeMenu}>
                          Electronic Solution
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/industries" ? "active" : ""
                    }`}
                  >
                    <Link to="/industries" onClick={closeMenu}>
                      Industries
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link to="/contact" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;

// MegaMenu Code :
const MegaMenu = ({ closeMegaMenu }) => {
  return (
    <>
      <div className="megamenu_main_container">
        <div className="megamenu_main_layout">
          <div className="megamenu_layout_upper_section">
            <div className="megamenu_layout_upper_section_1">
              <div className="megamenu_layout_upper_section_1_title">
                <div className="megamenu_layout_upper_section_1_title_img">
                  <img
                    src={security_service_icon}
                    alt="Security_service_icon"
                  />
                </div>
                <Link to="/services/security-service" onClick={closeMegaMenu}>
                  <p>Security Services</p>
                </Link>
              </div>
              <div className="megamenu_layout_upper_section_1_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>Manned Guarding</li>
                  <li>Security Audits & Consultancy</li>
                  <li>Antecedent Verification</li>
                  <li>Executive Protection</li>
                  <li>Event Security Management</li>
                  <li>Tech Integrated Security</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_upper_section_2">
              <div className="megamenu_layout_upper_section_2_title">
                <div className="megamenu_layout_upper_section_2_title_img">
                  <img src={facility_meng_icon} alt="Facility_managment_icon" />
                </div>
                <p>Facility Management</p>
              </div>
              <div className="megamenu_layout_upper_section_2_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>General Housekeeping & Mechanized Cleaning</li>
                  <li>Building Maintenance & Management</li>
                  <li>Engineering/Electrical Maintenance</li>
                  <li>Pest Control</li>
                  <li>Waste Management</li>
                  <li>Landscaping & Horticulture</li>
                  <li>Front-Facade Cleaning & High-Rise Glass Cleaning</li>
                  <li>Front Desk Management</li>
                  <li>Contractual Staffing & Drivers</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_upper_section_3">
              <div className="megamenu_layout_upper_section_3_title">
                <div className="megamenu_layout_upper_section_3_title_img">
                  <img src={fire_safety_iocn} alt="Facility_managment_icon" />
                </div>
                <Link
                  to="/services/fire-safety-service"
                  onClick={closeMegaMenu}
                >
                  {" "}
                  <p>Fire & Safety</p>
                </Link>
              </div>
              <div className="megamenu_layout_upper_section_3_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>Fire Prevention</li>
                  <li>Crisis Management</li>
                  <li>Rescue</li>
                  <li>Hazardous Materials Response</li>
                  <li>Customized Training</li>
                  <li>Disaster Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="megamenu_layout_lower_section">
            <div className="megamenu_layout_lower_section_1">
              <div className="megamenu_layout_lower_section_1_title">
                <div className="megamenu_layout_lower_section_1_title_img">
                  <img
                    src={electronic_security_icon}
                    alt="Security_service_icon"
                  />
                </div>
                <p>Electronic Security</p>
              </div>
              <div className="megamenu_layout_lower_section_1_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>CCTV Surveillance System</li>
                  <li>Access Control System</li>
                  <li>Network Infrastructure</li>
                  <li>Intrusion Detection System</li>
                  <li>Perimeter Security Solution</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_lower_section_2">
              <div className="megamenu_layout_lower_section_2_title">
                <div className="megamenu_layout_lower_section_2_title_img">
                  <img src={cash_meng} alt="Facility_managment_icon" />
                </div>
                <p>Cash Management</p>
              </div>
              <div className="megamenu_layout_lower_section_2_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>Cash in Transit</li>
                  <li>Cash Processing</li>
                  <li>Cash Counters</li>
                  <li>Cash Management Centres</li>
                  <li>Cash Vaulting</li>
                  <li>Atm Cassette Swap</li>
                  <li>Cash Recyclers</li>
                  <li>Bullion Transportation ,Vaulting & Cearance</li>
                  <li>Door Step Banking</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_lower_section_3">
              <div className="megamenu_layout_lower_section_3_title">
                <div className="megamenu_layout_lower_section_3_title_img">
                  <img src={event_meng} alt="Facility_managment_icon" />
                </div>
                <p>Event Management</p>
              </div>
              <div className="megamenu_layout_lower_section_3_menu">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li>Pre-Event Planning & Coordination</li>
                  <li>Identify Consequences</li>
                  <li>Identify Security Threats</li>
                  <li>
                    Prioritize Hazardous Scenarios Associated with Threats
                  </li>
                  <li>Establish the role of Technology in the Event</li>
                  <li>Review Security Measures & Rehearse / Review Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
