import { useState, useEffect,useRef } from "react";
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
  {
    stars: 4,
    content:
      "Checkmate Services Pvt Ltd is providing security services to our organization since June 2006. The services provided by this Checkmate Services are appreciable.",
    profileImg: profile_img_2,
    name: "Jainik Darji",
    position: "Head Security, Essar Steel Ltd, Hazira",
  },
  {
    stars: 4,
    content:
      "Reveation Web & Mobile Application Dedicated Developers | Outsourcing Technology Partner",
    profileImg: profile_img_2,
    name: "Reveation Technology",
    position: "Custom Software Solutions ",
  },
  {
    stars: 3,
    content:
      "Reveation Web & Mobile Application Dedicated Developers | Outsourcing Technology Partner",
    profileImg: profile_img_2,
    name: "Jainik Darji_2.0",
    position: "Custom Software Solutions ",
  },
  {
    stars: 3,
    content:
      "Reveation Web & Mobile Application Dedicated Developers | Outsourcing Technology Partner",
    profileImg: profile_img_2,
    name: "Reveation Technology_2.0",
    position: "Custom Software Solutions ",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = isMobile
          ? testimonials.length - 1
          : Math.floor(testimonials.length / 2) - 1;
        return (prevIndex + 1) % (maxIndex + 1);
      });
    }, 3000);
  };

  const handleNavigationClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current); // Stop the automatic slideshow
    setTimeout(startInterval, 3000); // Restart the slideshow after 3 seconds
  };

  const displayedTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <div className="testimonial_main_container">
      <div className="start_background_image"></div>
      <div className="testimonial_header">
        <p>Testimonials</p>
        <h3>What Our Clients are Saying</h3>
      </div>

      <div className="testimonial_review_section">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial_review_section_item ${
              (
                isMobile
                  ? index === 0
                  : index >= currentIndex * 2 && index < (currentIndex + 1) * 2
              )
                ? "active"
                : ""
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
        {Array.from({
          length: isMobile
            ? testimonials.length
            : Math.ceil(testimonials.length / 2),
        }).map((_, index) => (
          <img
            key={index}
            src={
              (
                isMobile
                  ? index === currentIndex
                  : Math.floor(currentIndex / 1) === index
              )
                ? navigation_1
                : navigation_2_4
            }
            alt="navigation_icon"
            className={`navigation_dot ${
              index === (isMobile ? currentIndex : Math.floor(currentIndex / 1))
                ? "active"
                : ""
            }`}
            onClick={() => handleNavigationClick(index)}
          />
        ))}
      </div>
      <div className="end_background_image"></div>
    </div>
  );
};

export default Testimonial;

















// new 

// import { useState, useEffect, useRef } from "react";
// import "./Testimonial.css";
// import "../../../assets/color/root_color.css";
// import star_icon from "../../../assets/icons/testimonial_review_star.svg";
// import profile_img from "../../../assets/images/testimonial_review_profile.png"; // Update if needed
// import profile_img_2 from "../../../assets/images/testimonial_review_profile_2.png"; // Update if needed
// import double_quote from "../../../assets/icons/testimonial_review_double_quote_mark.svg";
// import navigation_1 from "../../../assets/icons/testimonial_navigationbar_1.svg";
// import navigation_2_4 from "../../../assets/icons/testimonial_navigationbar_2_4.svg";

// const testimonials = [
//   {
//     stars: 5,
//     content:
//       "Half Olive has revolutionized the way we manage our wellness center. The cloud-based solution has provided us with the flexibility to access our data from anywhere, making it easy to stay on top of our schedules and guest information. The analytics feature has also been incredibly helpful in identifying areas for improvement in our operations. I highly recommend Half Olive to anyone in the wellness industry looking to streamline their business.",
//     profileImg: profile_img,
//     name: "Dr. Sharon",
//     position: "Wellness Coach at Wellness First",
//   },
//   {
//     stars: 5,
//     content:
//       "Since implementing Half Olive into our wellness center, we have seen a significant increase in productivity and efficiency. The platform is user-friendly and easy to navigate, making it simple for our team to manage guest information, schedules, and payments. Kudos to Half Olive!",
//     profileImg: profile_img_2,
//     name: "Arun S.",
//     position: "Owner of Atmaram Wellness Center",
//   },
//   {
//     stars: 5,
//     content:
//       "Half Olive's auto-scheduling feature is a game-changer for our business. It has significantly reduced the time and effort required to manage our schedules, enabling us to focus on providing exceptional wellness services to our clients. The top feature has really helped in our day-to-day operations and has provided us with the flexibility to customize our schedules to fit our clients' needs.",
//     profileImg: profile_img_2,
//     name: "Michael",
//     position: "Manager of Wellness Services at Sunshine Wellness",
//   },
//   {
//     stars: 4,
//     content:
//       "Checkmate Services Pvt Ltd is providing security services to our organization since June 2006. The services provided by this Checkmate Services are appreciable.",
//     profileImg: profile_img,
//     name: "SK Vatsal",
//     position: "Head Security, Essar Steel Ltd, Hazira",
//   },
//   {
//     stars: 4,
//     content:
//       "Checkmate has been able to create and maintain an impression of an organization following and keenly pursuing to follow the best practice of international standard.",
//     profileImg: profile_img_2,
//     name: "Captain Bhawesh Kumar Pandey",
//     position: "Manager Security & Admin, Shell Hazira LNG",
//   },
//   {
//     stars: 3,
//     content:
//       "Reveation Web & Mobile Application Dedicated Developers | Outsourcing Technology Partner.",
//     profileImg: profile_img_2,
//     name: "Jainik Darji",
//     position: "Custom Software Solutions",
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startInterval = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         return (prevIndex + 1) % Math.ceil(testimonials.length / 3);
//       });
//     }, 3000);
//   };

//   const handleNavigationClick = (index) => {
//     setCurrentIndex(index);
//     clearInterval(intervalRef.current);  
//     setTimeout(startInterval, 3000);  
//   };

//   const displayedTestimonials = testimonials.slice(
//     currentIndex * 3,
//     currentIndex * 3 + 3
//   );

//   return (
//     <div className="testimonial_main_container">
//       <div className="start_background_image"></div>
//       <div className="testimonial_header">
//         <p>Testimonials</p>
//         <h3>What Our Clients are Saying</h3>
//       </div>

//       <div className="testimonial_review_section">
//         {displayedTestimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial_review_section_item">
//             <div className="testimonial_review_section_star">
//               {Array.from({ length: testimonial.stars }).map((_, i) => (
//                 <img key={i} src={star_icon} alt="review_section_star" />
//               ))}
//             </div>
//             <div className="testimonial_review_section_content">
//               <h3>{testimonial.name}</h3>
//               <p className="position">{testimonial.position}</p>
//               <p>{testimonial.content}</p>
//             </div>
//             <div className="testimonial_review_section_profile">
//               <img
//                 src={testimonial.profileImg}
//                 alt=""
//                 className="testimonial_review_section_profile_logo"
//               />
//             </div>
//             <div className="testimonial_review_section_double_quote_mark">
//               <img src={double_quote} alt="double_quote_mark" />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="testimonial_navigationbar">
//         {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
//           (_, index) => (
//             <img
//               key={index}
//               src={index === currentIndex ? navigation_1 : navigation_2_4}
//               alt="navigation_icon"
//               className={`navigation_dot ${
//                 index === currentIndex ? "active" : ""
//               }`}
//               onClick={() => handleNavigationClick(index)}
//             />
//           )
//         )}
//       </div>
//       <div className="end_background_image"></div>
//     </div>
//   );
// };

// export default Testimonial;