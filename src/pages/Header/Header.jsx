// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Header.css";

// // Importing icons
// import facebook_icon from "../../assets/icons/facebook.svg";
// import twitter_icon from "../../assets/icons/twitter.svg";
// import google_icon from "../../assets/icons/google.svg";
// import instagram_icon from "../../assets/icons/instagram.svg";
// import youtube_icon from "../../assets/icons/youtube.svg";
// import calling_icon from "../../assets/icons/calling.svg";
// import mail_icon from "../../assets/icons/mail.svg";

// // Importing images
// import navbar_logo from "../../assets/images/navbar_logo.png";

// // Importing components
// import Hamburger from "../../pages/Home/HamBurger/Hamburger";

// // Importing service section icons
// import security_service_icon from "../../assets/icons/service_section_popup_security_service.svg";
// import facility_meng_icon from "../../assets/icons/service_section_popup_facility_man.svg";
// import fire_safety_icon from "../../assets/icons/service_section_popup_firesafety.svg";
// import electronic_security_icon from "../../assets/icons/service_section_popup_electronic_security.svg";
// import cash_meng from "../../assets/icons/service_section_popup_cash_man.svg";
// import event_meng from "../../assets/icons/service_section_popup_event_man.svg";

// const Header = () => {
//   const location = useLocation();

//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

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

//           <div className="navbar_container">
//             <div className="navbar">
//               <div className="navbar-left">
//                 <Link to="/">
//                   <img src={navbar_logo} alt="Navbar_CheckMate_logo" />
//                 </Link>
//               </div>
//               <div className="navbar-right">
//                 <ul className="hamburgerOpen">
//                   <li
//                     className={`nav-item home_section ${
//                       location.pathname === "/" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li
//                     className={`nav-item about_section ${
//                       location.pathname === "/about" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/about">About</Link>
//                   </li>
//                   <li
//                     className={`nav-item services_section ${
//                       location.pathname === "/service" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/service">Service</Link>
//                   </li>
//                   <li
//                     className={`nav-item industries_section ${
//                       location.pathname === "/industries" ? "active" : ""
//                     }`}
//                   >
//                     <Link to="/industries">Industries</Link>
//                   </li>
//                   <button className="contactus_btn" type="button">
//                     Contact Us
//                   </button>
//                 </ul>
//               </div>
//             </div>
//           </div>

// <div className="main-responsive-navbar-main">
//   <header>
//     <div className="res">
//       <nav>
//         <div className="logo">
//           <img src={navbar_logo} alt="Logo" />
//         </div>

//         <div
//           className="menu-toggle"
//           id="mobile-menu"
//           onClick={toggleMenu}
//         >
//           <div className="hamburger" onClick={toggleHamburger}>
//             <Hamburger isOpen={hamburgerOpen} />
//           </div>
//         </div>

//         <ul className={`nav ${isMenuVisible ? "showing" : ""}`}>
//           <li
//             className={`nav-item ${
//               location.pathname === "/" ? "active" : ""
//             }`}
//           >
//             <Link to="/">Home</Link>
//           </li>

//           <li
//             className={`nav-item ${
//               location.pathname.startsWith("/about") ? "active" : ""
//             }`}
//           >
//             <a
//               href="#"
//               className={`menu-item ${
//                 activeDropdown === 1 ? "active" : ""
//               }`}
//               onClick={(e) => handleDropdownClick(e, 1)}
//             >
//               About
//               <span
//                 className={`arrow ${
//                   activeDropdown === 1 ? "rotate" : ""
//                 }`}
//               ></span>
//             </a>

//             <ul
//               className={`dropdown ${
//                 activeDropdown === 1 ? "show" : ""
//               }`}
//             >
//               <li>
//                 <a href="#">Company overview</a>
//               </li>

//               <li>
//                 <a href="#">Checkmate History</a>
//               </li>

//               <li>
//                 <a href="#">Management Team</a>
//               </li>

//               <li>
//                 <a href="#">Award & Accreditation</a>
//               </li>

//               <li>
//                 <a href="#">Career Of Checkmate</a>
//               </li>

//               <li>
//                 <a href="#">Checkmate Clientele</a>
//               </li>
//             </ul>
//           </li>

//           <li
//             className={`nav-item ${
//               location.pathname.startsWith("/service") ? "active" : ""
//             }`}
//           >
//             <a
//               href="#"
//               className={`menu-item ${
//                 activeDropdown === 2 ? "active" : ""
//               }`}
//               onClick={(e) => handleDropdownClick(e, 2)}
//             >
//               Services
//               <span
//                 className={`arrow ${
//                   activeDropdown === 2 ? "rotate" : ""
//                 }`}
//               ></span>
//             </a>

//             <ul
//               className={`dropdown ${
//                 activeDropdown === 2 ? "show" : ""
//               }`}
//             >
//               <li>
//                 <a href="#">Security Services</a>
//               </li>

//               <li>
//                 <a href="#">Cash Management</a>
//               </li>

//               <li>
//                 <a href="#">Facility Management</a>
//               </li>

//               <li>
//                 <a href="#">Fire and Safety Training</a>
//               </li>

//               <li>
//                 <a href="#">Electronic Solution</a>
//               </li>
//             </ul>
//           </li>

//           <li
//             className={`nav-item ${
//               location.pathname === "/industries" ? "active" : ""
//             }`}
//           >
//             <Link to="/industries">Industries</Link>
//           </li>

//           <li
//             className={`nav-item ${
//               location.pathname === "/contact" ? "active" : ""
//             }`}
//           >
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </header>
// </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
// import { MegaMenu } from "./MegaMenu"; 
import MegaMenu from "../Services/MegaMenu/MegaMenu"

// Importing icons and images
import facebook_icon from "../../assets/icons/facebook.svg";
import twitter_icon from "../../assets/icons/twitter.svg";
import google_icon from "../../assets/icons/google.svg";
import instagram_icon from "../../assets/icons/instagram.svg";
import youtube_icon from "../../assets/icons/youtube.svg";
import calling_icon from "../../assets/icons/calling.svg";
import mail_icon from "../../assets/icons/mail.svg";
import navbar_logo from "../../assets/images/navbar_logo.png";
import Hamburger from './../Home/HamBurger/HamBurger';

const Header = () => {
  const location = useLocation();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false); // State for MegaMenu visibility

  const whatsappNumber = "+91 2656698200";
  const emailAddress = "contact@checkmateservices.com";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;
  const mailtoUrl = `mailto:${emailAddress}`;

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (!isMenuVisible) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleDropdownClick = (e, dropdownId) => {
    e.stopPropagation();
    if (isMenuVisible) toggleDropdown(dropdownId);
  };

  const handleMouseEnter = () => setIsMegaMenuVisible(true); // Show MegaMenu on hover
  const handleMouseLeave = () => setIsMegaMenuVisible(false); // Hide MegaMenu when not hovering

  return (
    <>
      <div className="header">
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-left-social">
              <a href="https://facebook.com" className="facebook_icon">
                <img src={facebook_icon} alt="Facebook" />
              </a>
              <a href="https://twitter.com" className="twitter_icon">
                <img src={twitter_icon} alt="Twitter" />
              </a>
              <a href="https://google.com" className="google_icon">
                <img src={google_icon} alt="Google" />
              </a>
              <a href="https://instagram.com" className="instagram_icon">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="https://youtube.com" className="youtube_icon">
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
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`nav-item about_section ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link to="/about">About</Link>
                </li>


                
                <li
                  className={`nav-item services_section ${
                    location.pathname === "/service" ? "active" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/service">Service</Link>
                  {isMegaMenuVisible && <MegaMenu />}{" "}
                  
                </li>



                <li
                  className={`nav-item industries_section ${
                    location.pathname === "/industries" ? "active" : ""
                  }`}
                >
                  <Link to="/industries">Industries</Link>
                </li>
                <button className="contactus_btn" type="button">
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-responsive-navbar-main">
          <header>
            <div className="res">
              <nav>
                <div className="logo">
                  <img src={navbar_logo} alt="Logo" />
                </div>

                <div
                  className="menu-toggle"
                  id="mobile-menu"
                  onClick={toggleMenu}
                >
                  <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                  </div>
                </div>

                <ul className={`nav ${isMenuVisible ? "showing" : ""}`}>
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/">Home</Link>
                  </li>

                  <li
                    className={`nav-item ${
                      location.pathname.startsWith("/about") ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className={`menu-item ${
                        activeDropdown === 1 ? "active" : ""
                      }`}
                      onClick={(e) => handleDropdownClick(e, 1)}
                    >
                      About
                      <span
                        className={`arrow ${
                          activeDropdown === 1 ? "rotate" : ""
                        }`}
                      ></span>
                    </a>

                    <ul
                      className={`dropdown ${
                        activeDropdown === 1 ? "show" : ""
                      }`}
                    >
                      <li>
                        <a href="#">Company overview</a>
                      </li>

                      <li>
                        <a href="#">Checkmate History</a>
                      </li>

                      <li>
                        <a href="#">Management Team</a>
                      </li>

                      <li>
                        <a href="#">Award & Accreditation</a>
                      </li>

                      <li>
                        <a href="#">Career Of Checkmate</a>
                      </li>

                      <li>
                        <a href="#">Checkmate Clientele</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`nav-item ${
                      location.pathname.startsWith("/service") ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
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
                    </a>

                    <ul
                      className={`dropdown ${
                        activeDropdown === 2 ? "show" : ""
                      }`}
                    >
                      <li>
                        <a href="#">Security Services</a>
                      </li>

                      <li>
                        <a href="#">Cash Management</a>
                      </li>

                      <li>
                        <a href="#">Facility Management</a>
                      </li>

                      <li>
                        <a href="#">Fire and Safety Training</a>
                      </li>

                      <li>
                        <a href="#">Electronic Solution</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`nav-item ${
                      location.pathname === "/industries" ? "active" : ""
                    }`}
                  >
                    <Link to="/industries">Industries</Link>
                  </li>

                  <li
                    className={`nav-item ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link to="/contact">Contact Us</Link>
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


