import { useState } from "react";
import "./Touch.css";

const Touch = () => {
  const [activeBox, setActiveBox] = useState("office"); // Default to 'office'

  const handleClick = (box) => {
    setActiveBox(box);
  };

  const handleNavigation = (direction) => {
    const sections = ["mail", "office", "call"];
    const currentIndex = sections.indexOf(activeBox);
    if (direction === "left") {
      setActiveBox(
        sections[(currentIndex + sections.length - 1) % sections.length]
      );
    } else {
      setActiveBox(sections[(currentIndex + 1) % sections.length]);
    }
  };

  return (
    <div className="touch-container">
      <h4>LETS TALK</h4>
      <h1>Get In Touch with Us</h1>

      <div className="boxes">
        <div
          className={`box ${activeBox === "mail" ? "active" : ""}`}
          onClick={() => handleClick("mail")}
        >
          <div className="icon">&#9993;</div>
          <p>Mail Us</p>
          <p>contact@checkmateservices.com</p>
        </div>

        <div
          className={`box ${activeBox === "office" ? "active" : ""}`}
          onClick={() => handleClick("office")}
        >
          <div className="icon">&#128205;</div>
          <p>Checkmate Head Office</p>
          <p>
            Checkmate Corporate Office Amaam Towers,
            <br />
            GF – 6,7,8,9, Suvas Colony, Fatehgunj,
            <br />
            Vadodara, Gujarat (India).
          </p>
        </div>

        <div
          className={`box ${activeBox === "call" ? "active" : ""}`}
          onClick={() => handleClick("call")}
        >
          <div className="icon">&#128222;</div>
          <p>Call Us</p>
          <p>+91 265 6698200</p>
        </div>
      </div>

      <div className="detail-box">
        {activeBox === "mail" && (
          <div className="detail-content">
            <div className="box">
              <div className="icon">&#9993;</div>
              <p>Mail Us</p>
              <p>contact@checkmateservices.com</p>
            </div>
            <div className="mail-box">
              <p>
                Open your email client or use the contact form on the website to
                reach us.
              </p>
            </div>
          </div>
        )}

        {activeBox === "office" && (
          <div className="detail-content">
            <div className="box">
              <div className="icon">&#128205;</div>
              <p>Checkmate Head Office</p>
              <p>
                Checkmate Corporate Office Amaam Towers,
                <br />
                GF – 6,7,8,9, Suvas Colony, Fatehgunj,
                <br />
                Vadodara, Gujarat (India).
              </p>
            </div>
            <div className="map-box">
              <iframe
                title="Checkmate Head Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0171808039617!2d73.18557551540357!3d21.170240187926627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be040e00e285e2b%3A0x48f5e8a7f90c4c1d!2sCheckmate%20Corporate%20Office%20Amaan%20Towers!5e0!3m2!1sen!2sin!4v1632932981934!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}

        {activeBox === "call" && (
          <div className="detail-content">
            <div className="box">
              <div className="icon">&#128222;</div>
              <p>Call Us</p>
              <p>+91 265 6698200</p>
            </div>
            <div className="call-box">
              <p>
                Feel free to call us at the provided number during working
                hours.
              </p>
            </div>
          </div>
        )}

        <div className="navigation-arrows">
          <button onClick={() => handleNavigation("left")}>&larr;</button>
          <button onClick={() => handleNavigation("right")}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Touch;
