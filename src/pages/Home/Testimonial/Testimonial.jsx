// // import React from "react";
// import "./Testimonial.css";
// import "../../../assets/color/root_color.css";
// import star_icon from "../../../assets/icons/testimonial_review_star.svg";
// import profile_img from "../../../assets/images/testimonial_review_profile.png";
// import profile_img_2 from "../../../assets/images/testimonial_review_profile_2.png";
// import double_quote from "../../../assets/icons/testimonial_review_double_quote_mark.svg";
// import navigation_1 from "../../../assets/icons/testimonial_navigationbar_1.svg"
// import navigation_2_4 from "../../../assets/icons/testimonial_navigationbar_2_4.svg"

// const Testimonial = () => {
//   return (
//     <>
//       <div className="testimonial_main_container">
//         <div className="testimonial_header">
//           <p>Testimonials</p>
//           <h3>What Our Clients are Saying</h3>
//         </div>
//         <div className="testimonial_review_section">
//           <div className="testimonial_review_section_1">
//             <div className="testimonial_review_section_star">
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//             </div>
//             <div className="testimonial_review_section_content">
//               <p>
//                 Checkmate Services Pvt Ltd is providing security services to our
//                 organization since June 2006. The services provided by this
//                 Checkmate Services are appreciable.
//               </p>
//             </div>
//             <div className="testimonial_review_section_profile">
//               <div className="testimonial_review_section_profile_logo">
//                 <img src={profile_img} alt="" />
//               </div>
//               <div className="testimonial_review_section_profile_details">
//                 <h3>SK Vatsal</h3>
//                 <p>Head Security, Essar Steel Ltd, Hazira</p>
//               </div>
//             </div>
//             <div className="testimonial_review_section_double_quote_mark">
//               <img src={double_quote} alt="double_quote_mark" />
//             </div>
//           </div>
//           <div className="testimonial_review_section_2">
//             <div className="testimonial_review_section_star">
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//               <div className="testimonial_review_section_star_width">
//                 <img src={star_icon} alt="review_section_star" />
//               </div>
//             </div>
//             <div className="testimonial_review_section_content">
//               <p>
//                 Checkmate has been able to create and maintain an impression of
//                 an organization following and keenly pursuing to follow the best
//                 practice of international standard.
//               </p>
//             </div>
//             <div className="testimonial_review_section_profile">
//               <div className="testimonial_review_section_profile_logo">
//                 <img src={profile_img_2} alt="" />
//               </div>
//               <div className="testimonial_review_section_profile_details">
//                 <h3>Captain Bhawesh Kumar Pandey</h3>
//                 <p>Manager Security & Admin, Shell Hazira LNG</p>
//               </div>
//             </div>
//             <div className="testimonial_review_section_double_quote_mark">
//               <img src={double_quote} alt="double_quote_mark" />
//             </div>
//           </div>
//         </div>
//         <div className="testimonial_navigationbar">
//           <div className="testimonial_navigationbar_icon1">
//             <img src={navigation_1} alt="navigation_icon" />
//           </div>
//           <div className="testimonial_navigationbar_icon2">
//             <img src={navigation_2_4} alt="navigation_icon" />
//           </div>
//           <div className="testimonial_navigationbar_icon3">
//             <img src={navigation_2_4} alt="navigation_icon" />
//           </div>
//           <div className="testimonial_navigationbar_icon4">
//             <img src={navigation_2_4} alt="navigation_icon" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

import { useState, useEffect } from "react";
import "./Testimonial.css";
import "../../../assets/color/root_color.css";
import star_icon from "../../../assets/icons/testimonial_review_star.svg";
import profile_img from "../../../assets/images/testimonial_review_profile.png";
import profile_img_2 from "../../../assets/images/testimonial_review_profile_2.png";
import double_quote from "../../../assets/icons/testimonial_review_double_quote_mark.svg";
import navigation_1 from "../../../assets/icons/testimonial_navigationbar_1.svg";
import navigation_2_4 from "../../../assets/icons/testimonial_navigationbar_2_4.svg";

const testimonials = [
  {
    stars: 5,
    content:
      "Checkmate Services Pvt Ltd is providing security services to our organization since June 2006. The services provided by this Checkmate Services are appreciable.",
    profileImg: profile_img,
    name: "SK Vatsal",
    position: "Head Security, Essar Steel Ltd, Hazira",
  },
  {
    stars: 5,
    content:
      "Checkmate has been able to create and maintain an impression of an organization following and keenly pursuing to follow the best practice of international standard.",
    profileImg: profile_img_2,
    name: "Captain Bhawesh Kumar Pandey",
    position: "Manager Security & Admin, Shell Hazira LNG",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial_main_container">
      <div className="testimonial_header">
        <p>Testimonials</p>
        <h3>What Our Clients are Saying</h3>
      </div>
      <div className="testimonial_review_section">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial_review_section_${index + 1} ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="testimonial_review_section_star">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <img key={i} src={star_icon} alt="review_section_star" />
              ))}
            </div>
            <div className="testimonial_review_section_content">
              <p>{testimonial.content}</p>
            </div>
            <div className="testimonial_review_section_profile">
              <img
                src={testimonial.profileImg}
                alt=""
                className="testimonial_review_section_profile_logo"
              />
              <div className="testimonial_review_section_profile_details">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <div className="testimonial_review_section_double_quote_mark">
              <img src={double_quote} alt="double_quote_mark" />
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial_navigationbar">
        {testimonials.map((_, index) => (
          <img
            key={index}
            src={index === currentIndex ? navigation_1 : navigation_2_4}
            alt="navigation_icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
