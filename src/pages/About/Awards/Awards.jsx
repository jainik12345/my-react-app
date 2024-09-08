/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./Awards.css";
import certificate from "../../../assets/images/about_section_awrads_certificate.png";

const Awards = () => {
  const scrollContainerRef = useRef(null);
  const isTouching = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer && !isTouching.current) {
        const scrollAmount = scrollContainer.scrollWidth / 4; // Adjust based on number of cards
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // If scrolled to end, reset to start
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, []);

  const handleInteractionStart = () => {
    isTouching.current = true;
  };

  const handleInteractionEnd = () => {
    isTouching.current = false;
  };
  return (
    <>
      <div className="awards-container">
        <div className="left-content">
          <h6>AWARDS &</h6>
          <h3>Accreditation</h3>
          <p>
            A symbolic representation of the trust our clients have in us and
            the successful journey over the years. Driving us to be at our best
            and keep marching forward!
          </p>
        </div>
        <div
          className="right-content"
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
        >
          <div className="scrollable-container" ref={scrollContainerRef}>
            <div className="award-card">
              <img src={certificate} alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>

            <div className="award-card">
              <img src={certificate} alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>

            <div className="award-card">
              <img src={certificate} alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>

            <div className="award-card">
              <img src={certificate} alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
