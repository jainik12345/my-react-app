// import "./Footer.css";
// import "../../assets/color/root_color.css";
// import footer_section_location from "../../assets/icons/footer_section_location.svg";
// import footer_section_calling from "../../assets/icons/footer_section_calling.svg";
// import ul_li_white from "../../assets/icons/footer_section_ul_li_white_arrow.svg";
// import facebook_icon from "../../assets/icons/footer_facebook_icon.svg";
// import instagram_icon from "../../assets/icons/footer_instagram_icon.svg";
// import twitter_icon from "../../assets/icons/footer_twitter_icon.svg";
// import youtube_icon from "../../assets/icons/footer_youtube_icon.svg";
// import footer_logo from "../../assets/images/footer_logo.png";

// const Footer = () => {
//   const footerSections = [
//     {
//       header: "Our Head Office",
//       items: [
//         {
//           icon: footer_section_location,
//           text: "Checkmate Corporate Office Amaan Towers, GF – 6,7,8,9, Suvas Colony, Fatehgunj, Vadodara. Gujarat (India).",
//           className: "footer_section1_content_location",
//         },
//         {
//           icon: footer_section_calling,
//           text: "+91 265 6698200",
//           className: "footer_section1_content_calling",
//         },
//       ],
//     },
//     {
//       header: "About Us",
//       items: [
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Company Overview",
//           className: "footer-section_header_ul_li_main",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Checkmate History",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Management Team",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Awards & Accreditation",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Compliance Documents",
//           className: "footer-section_header_ul_li",
//         },
//       ],
//     },
//     {
//       header: "Our Services",
//       items: [
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Security Services",
//           className: "footer-section_header_ul_li_main",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Cash Management",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Facility Management",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Fire & Safety Training",
//           className: "footer-section_header_ul_li",
//         },
//         {
//           icon: ul_li_white,
//           icon1: ul_li_white,
//           text: "Electronic Solutions",
//           className: "footer-section_header_ul_li",
//         },
//       ],
//     },
//   ];

//   return (
//     <footer className="footer_section_main_container">
//       {footerSections.map((section, index) => (
//         <div key={index} className="footer-section">
//           <p className="footer-section_header">{section.header}</p>
//           <ul>
//             {section.items.map((item, i) => (
//               <li key={i} className={item.className}>
//                 <img src={item.icon} alt="" />
//                 <img src={item.icon1} alt="" />
//                 <span>{item.text}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <div className="footer-section">
//         <p className="footer-section_header">Connect with Us</p>
//         <div className="footer-section_icons">
//           <img src={facebook_icon} alt="Facebook" />
//           <img src={twitter_icon} alt="Twitter" />
//           <img src={instagram_icon} alt="Instagram" />
//           <img src={youtube_icon} alt="YouTube" />
//         </div>
//         <img src={footer_logo} alt="Footer Logo" className="footer_logo" />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import "../../assets/color/root_color.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer_section_location from "../../assets/icons/footer_section_location.svg";
import footer_section_calling from "../../assets/icons/footer_section_calling.svg";
import ul_li_white from "../../assets/icons/footer_section_ul_li_white_arrow.svg";
import footer_logo from "../../assets/images/footer_logo.png";
import facebook_icon from "../../assets/icons/footer_facebook_icon.svg";
import instagram_icon from "../../assets/icons/footer_instagram_icon.svg";
import twitter_icon from "../../assets/icons/footer_twitter_icon.svg";
import youtube_icon from "../../assets/icons/footer_youtube_icon.svg";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}`;
    openInNewTab(url);
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  const footerSections = [
    {
      header: "Our Head Office",
      items: [
        {
          icon: footer_section_location,
          text: "Checkmate Corporate Office Amaan Towers, GF – 6,7,8,9, Suvas Colony, Fatehgunj, Vadodara. Gujarat (India).",
          className: "footer_section1_content_location",
        },
        {
          icon: footer_section_calling,
          text: "+91 265 6698200",
          className: "footer_section1_content_calling",
          onClick: () => openWhatsApp("912656698200"),
        },
      ],
    },

    {
      header: "About Us",
      items: [
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Company Overview",
          className: "footer-section_header_ul_li_main",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Checkmate History",
          className: "footer-section_header_ul_li",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Management Team",
          className: "footer-section_header_ul_li",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Awards & Accreditation",
          className: "footer-section_header_ul_li",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Compliance Documents",
          className: "footer-section_header_ul_li",
        },
      ],
    },
    {
      header: "Our Services",
      items: [
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Security Services",
          className: "footer-section_header_ul_li_main",
          link: "/services/security-service",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Cash Management",
          className: "footer-section_header_ul_li",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Facility Management",
          className: "footer-section_header_ul_li",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Fire & Safety Training",
          className: "footer-section_header_ul_li",
          link: "/services/fire-safety-service",
        },
        {
          icon: ul_li_white,
          icon1: ul_li_white,
          text: "Electronic Solutions",
          className: "footer-section_header_ul_li",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="footer_section_main_container">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <p className="footer-section_header">{section.header}</p>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  onClick={
                    item.onClick ||
                    (item.link
                      ? () => (window.location.href = item.link)
                      : undefined)
                  }
                  className={item.className}
                >
                  <img src={item.icon} alt="" />
                  <img src={item.icon1} alt="" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-section">
          <p className="footer-section_header">Connect with Us</p>
          <div className="footer-section_icons">
            <div
              onClick={() =>
                handleIconClick("https://www.facebook.com/yourprofile")
              }
              className="footer-section_icons_box1"
              style={{ backgroundColor: "var(--TopBar-Light-Green)" }}
            >
              <img src={facebook_icon} alt="facebook_bg_icon}" />
            </div>
            <div
              onClick={() =>
                handleIconClick("https://www.twitter.com/yourprofile")
              }
              className="footer-section_icons_box2"
            >
              <img src={twitter_icon} alt="twitter_bg_icon" />
            </div>
            <div
              onClick={() =>
                handleIconClick("https://www.instagram.com/yourprofile")
              }
              className="footer-section_icons_box3"
            >
              <img src={instagram_icon} alt="instagram_bg_icon" />
            </div>
            <div
              onClick={() =>
                handleIconClick("https://www.youtube.com/yourprofile")
              }
              className="footer-section_icons_box4"
            >
              <img src={youtube_icon} alt="youtube_bg_icon" />
            </div>
          </div>
          <Link to="/">
            <img src={footer_logo} alt="Footer Logo" className="footer_logo" />
          </Link>
        </div>
      </footer>
      <div className="footer_copyright_section">
        <hr className="footer_section_horizonatalline" />
        <div className="footer_secion_copyright_content">
          Copyrights 2024 - Checkmate Group. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
