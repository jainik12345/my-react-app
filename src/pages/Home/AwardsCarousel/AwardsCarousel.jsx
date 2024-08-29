import "./AwardsCarousel.css";
const AwardsCarousel = () => {
  return (
    <>
      <div className="awards-container">
        <div className="left-content">
          <h2>AWARDS &</h2>
          <h1>Accreditation</h1>
          <p>
            Checkmate Services Pvt Ltd (CSPL), the flagship company of the
            Checkmate group, was established in 1985 by Vikram Mahurkar (“the
            Founder”) as a partnership firm in Vadodara (Gujarat), and was
            reconstituted as a private limited company in 1992.
          </p>
        </div>
        <div className="right-content">
          <div className="scrollable-container">
            <div className="award-card">
              <img src="certificate-icon.png" alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>
            <div className="award-card">
              <img src="certificate-icon.png" alt="Certificate" />
              <h4>Capsi Membership</h4>
              <h6>Certified for</h6>
              <p>Security Services Certificate for integrity and trust</p>
            </div>
            <div className="award-card">
              <img src="certificate-icon.png" alt="Certificate" />
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

export default AwardsCarousel;
