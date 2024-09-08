// import React from 'react'
import "./CompanyOverview.css";
// import last_bg from "../../../assets//icons/about_section_overviewcompnay_bg.svg";

const CompanyOverview = () => {
  return (
    <>
      <div className="company_overview_main_container">
        <div className="company_overview_left_section">
          <div className="company_overview_left_section_img_wrapper">
            {/* <img src={last_bg} alt="background_image" /> */}
          </div>
        </div>

        {/* right side  */}
        <div className="company_overview_right_section">
          <div className="company_overview_right_section_top">
            <div className="company_overview_right_section_top_title">
              <p>Checkmate group</p>
              <h3>Who we are</h3>
            </div>
            <div className="company_overview_right_section_top_description">
              <ul>
                <li>
                  With a stringent focus on delivering excellence, the Checkmate
                  Group of Companies have forayed into a diverse set of service
                  areas, but the goal is simple – achieving complete client
                  satisfaction by offering a bouquet of secure, reliant and
                  high-quality services through an effective and self-motivated
                  team. With services ranging from electronic and physical
                  security, fire protection, facility management, security
                  audit, disinfection, cash logistics to training services, our
                  presence is omnipresent in 29 states of India with 64 offices
                  covering all the cities of India
                </li>
                <br />

                <li>
                  Checkmate Services Pvt. Ltd., the flagship company of the
                  Checkmate group was established in 1985 and then there was no
                  looking back. Tagging along modern-day practices and the need
                  of the hour, we kept delving deeper into varied industry
                  domains to offer our best services. Our services have been
                  successfully availed by various industries, including
                  petrochemicals, petroleum, ports, steel, pharmaceuticals,
                  telecommunication (telecom), banks, IT, to name a few.
                </li>
                <br />
                <li>
                  Our founder and visionary, Mr. Vikram Mahurkar started with a
                  single service area and went on to diversify into various
                  segments, having different entities and their own set of
                  regulatory and business requirements, with a strong network.
                  Being an ISO 9001:2008 certified company, our skilled team of
                  professionals have specialized training and experience in
                  offering customized and comprehensive solutions driven by
                  perfect process and technology quotients.
                </li>
              </ul>
            </div>
          </div>
          <div className="company_overview_right_section_bottom">
            <div className="company_overview_right_section_bottom_title">
              <h3>Our Vision</h3>
            </div>
            <div className="company_overview_right_section_bottom_description">
              <ul>
                <li>
                  Emerge as one of the top organizations in the surveillance and
                  security arena with the efficient use of modern technology to
                  deliver vigilantly and skilfully combat, counter, minimize and
                  ultimately prevent threat and risk to life and assets of our
                  clients globally.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;
