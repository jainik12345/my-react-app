// // import React from "react";
// import "./Experience.css";
// import "../../../assets/color/root_color.css";
// import experience_features_icon1 from "../../../assets/icons/experience_features_icon1.svg";
// import experience_features_icon2 from "../../../assets/icons/experience_features_icon2.svg";
// import experience_features_icon3 from "../../../assets/icons/experience_features_icon3.svg";

// const Experience = () => {
//   return (
//     <>
//       <div className="experience_main_container">
//         <div className="experience_left_side">
//           <div className="experience_left_side_top_overview">
//             <p>Eyebrow Heading</p>
//             <h3>Over 2 Decades of Experience</h3>
//           </div>
//           <div className="experience_left_side_bottom_features">
//             <div className="experience_left_side_bottom_feature">
//               <div className="experience_left_side_bottom_feature_left_side_icon">
//                 <img src={experience_features_icon1} alt="" />
//               </div>
//               <div className="experience_left_side_bottom_feature_right_side_text">
//                 <h6>25 YEARS OF EXPERIENCES</h6>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, Nec viverra diam et
//                   cras lorem.
//                 </p>
//               </div>
//             </div>
//             <div className="experience_left_side_bottom_feature">
//               <div className="experience_left_side_bottom_feature_left_side_icon">
//                 <img src={experience_features_icon2} alt="" />
//               </div>
//               <div className="experience_left_side_bottom_feature_right_side_text">
//                 <h6>LATEST SECURITY TECHNIQUES</h6>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, Nec viverra diam et
//                   cras lorem.
//                 </p>
//               </div>
//             </div>
//             <div className="experience_left_side_bottom_feature">
//               <div className="experience_left_side_bottom_feature_left_side_icon">
//                 <img src={experience_features_icon3} alt="" />
//               </div>
//               <div className="experience_left_side_bottom_feature_right_side_text">
//                 <h6>LOREUM IPSUM</h6>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, Nec viverra diam et
//                   cras lorem.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="experience_right_side">
//           <div className="experience_right_side_information">
//             <div className="experience_right_side_information_1">
//               <h6>60 +</h6>
//               <p>Our Location</p>
//             </div>
//             <div className="experience_right_side_information_2">
//               <h6>30,000+</h6>
//               <p>Our Employees</p>
//             </div>
//             <div className="experience_right_side_information_3">
//               <h6>6,000+</h6>
//               <p>Valuable Clients</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experience;


// import React from "react";
import "./Experience.css";
import "../../../assets/color/root_color.css";
import experience_features_icon1 from "../../../assets/icons/experience_features_icon1.svg";
import experience_features_icon2 from "../../../assets/icons/experience_features_icon2.svg";
import experience_features_icon3 from "../../../assets/icons/experience_features_icon3.svg";

const Experience = () => {
  return (
    <>
      <div className="experience_main_container">
        <div className="experience_left_side">
          <div className="experience_left_side_top_overview">
            <p>Eyebrow Heading</p>
            <h3>Over 2 Decades of Experience</h3>
          </div>
          <div className="experience_left_side_bottom_features">
            <div className="experience_left_side_bottom_feature">
              <div className="experience_left_side_bottom_feature_left_side_icon">
                <img src={experience_features_icon1} alt="" />
              </div>
              <div className="experience_left_side_bottom_feature_right_side_text">
                <h6>25 YEARS OF EXPERIENCES</h6>
                <p>Lorem ipsum dolor sit amet consectetur, Nec viverra diam et cras lorem.</p>
              </div>
            </div>
            <div className="experience_left_side_bottom_feature">
              <div className="experience_left_side_bottom_feature_left_side_icon">
                <img src={experience_features_icon2} alt="" />
              </div>
              <div className="experience_left_side_bottom_feature_right_side_text">
                <h6>LATEST SECURITY TECHNIQUES</h6>
                <p>Lorem ipsum dolor sit amet consectetur, Nec viverra diam et cras lorem.</p>
              </div>
            </div>
            <div className="experience_left_side_bottom_feature">
              <div className="experience_left_side_bottom_feature_left_side_icon">
                <img src={experience_features_icon3} alt="" />
              </div>
              <div className="experience_left_side_bottom_feature_right_side_text">
                <h6>LOREUM IPSUM</h6>
                <p>Lorem ipsum dolor sit amet consectetur, Nec viverra diam et cras lorem.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience_right_side">
          <div className="experience_right_side_information">
            <div className="experience_right_side_information_1">
              <h6>60 +</h6>
              <p>Our Location</p>
            </div>
            <div className="experience_right_side_information_2">
              <h6>30,000+</h6>
              <p>Our Employees</p>
            </div>
            <div className="experience_right_side_information_3">
              <h6>6,000+</h6>
              <p>Valuable Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
