
import { useState, useEffect } from "react";
import "./HeroSection.css";
import "../../../assets/color/root_color.css";
import rectangle_1_icon from "../../../assets/icons/hero_section_rectangle_1.svg";
import rectangle_2_6_icon from "../../../assets/icons/hero_section_rectangle_2_6.svg";
import hero_section_image from "../../../assets/images/hero_section_image.jpg";
import client from "../../../assets/images/client_bg.png";
import experties from "../../../assets/images/Experties_bg.jpg";
import video from "../../../assets/images/video_section_bg.jpg";

const images = [
  hero_section_image,
  video,
  client,
  experties,
  hero_section_image,
  video,
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Create the testimonials array dynamically based on images length
  const testimonials = images.map((_, index) => index);

  return (
    <div className="hero-section-main-container">
      <div
        className="hero-section-content-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Background image will be set through inline style */}
      </div>
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
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="navigation-icon"
          >
            <img
              src={
                index === currentIndex ? rectangle_1_icon : rectangle_2_6_icon
              }
              alt="navigation_icon"
            />
          </div>
        ))}
      </div>

      <div className="last_image"></div>
    </div>
  );
};

export default HeroSection;