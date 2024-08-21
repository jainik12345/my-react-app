import  { useState, useEffect } from "react";
import "./HeroSection.css";
import "../../../assets/color/root_color.css";
import rectangle_1_icon from "../../../assets/icons/hero_section_rectangle_1.svg";
import rectangle_2_6_icon from "../../../assets/icons/hero_section_rectangle_2_6.svg";

const images = [
  rectangle_1_icon,
  rectangle_2_6_icon,
  rectangle_2_6_icon,
  rectangle_2_6_icon,
  rectangle_2_6_icon,
  rectangle_2_6_icon,
];

const HeroSection = () => {
  const [imageOrder, setImageOrder] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageOrder((prevOrder) => {
        const [first, ...rest] = prevOrder;
        return [...rest, first]; // Rotate the array
      });
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section-main-container">
      <div className="hero-section-content">
        <div className="hero-section-leftside">
          <div className="hero-section-leftside-eyebrow-heading">
            <div className="hero-section-leftside-eyebrow-heading-text">
              Eyebrow Heading
            </div>
          </div>
          <h2 className="hero-section-leftside-h2">
            Welcome to Checkmate Group of Companies
          </h2>
          <div className="hero-section-leftside-p">
            Lorem ipsum dolor sit amet consectetur. Nec viverra diam et cras
            lorem habitant nisi pellentesque.
          </div>
          <button className="hero-section-leftside-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-section-navigationbar">
        {imageOrder.map((image, index) => (
          <div
            key={index}
            className={`rectangle_icon rectangle_icon_${index + 1}`}
          >
            <img src={image} alt={`rectangle_icon_${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="last_image"></div>
    </div>
  );
};

export default HeroSection;
