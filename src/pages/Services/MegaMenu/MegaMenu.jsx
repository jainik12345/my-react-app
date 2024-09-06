import "./MegaMenu.css";

import security_service_icon from "../../../assets/icons/service_section_popup_security_service.svg";

import facility_meng_icon from "../../../assets/icons/service_section_popup_facility_man.svg";

import fire_safety_iocn from "../../../assets/icons/service_section_popup_firesafety.svg";

import electronic_security_icon from "../../../assets/icons/service_section_popup_electronic_security.svg";

import cash_meng from "../../../assets/icons/service_section_popup_cash_man.svg";

import event_meng from "../../../assets/icons/service_section_popup_event_man.svg";

const MegaMenu = () => {
  return (
    <>
      <div className="megamenu_main_container">
        <div className="megamenu_main_layout">
          <div className="megamenu_layout_upper_section">
            <div className="megamenu_layout_upper_section_1">
              <div className="megamenu_layout_upper_section_1_title">
                <div className="megamenu_layout_upper_section_1_title_img">
                  <img
                    src={security_service_icon}
                    alt="Security_service_icon"
                  />
                </div>

                <p>Security Services</p>
              </div>

              <div className="megamenu_layout_upper_section_1_menu">
                <ul>
                  <li>Manned Guarding</li>

                  <li>Security Audits & Consultancy</li>

                  <li>Antecedent Verification</li>

                  <li>Executive Protection</li>

                  <li>Event Security Management</li>

                  <li>Tech Integrated Security</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_upper_section_2">
              <div className="megamenu_layout_upper_section_2_title">
                <div className="megamenu_layout_upper_section_2_title_img">
                  <img src={facility_meng_icon} alt="Facility_managment_icon" />
                </div>

                <p>Facility Management</p>
              </div>

              <div className="megamenu_layout_upper_section_2_menu">
                <ul>
                  <li>General Housekeeping & Mechanized Cleaning</li>

                  <li>Building Maintenance & Management</li>

                  <li>Engineering/Electrical Maintenance</li>

                  <li>Pest Control</li>

                  <li>Waste Management</li>

                  <li>Landscaping & Horticulture</li>

                  <li>Front-Facade Cleaning & High-Rise Glass Cleaning</li>

                  <li>Front Desk Management</li>

                  <li>Contractual Staffing & Drivers</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_upper_section_3">
              <div className="megamenu_layout_upper_section_3_title">
                <div className="megamenu_layout_upper_section_3_title_img">
                  <img src={fire_safety_iocn} alt="Facility_managment_icon" />
                </div>

                <p>Fire & Safety</p>
              </div>

              <div className="megamenu_layout_upper_section_3_menu">
                <ul>
                  <li>Fire Prevention</li>

                  <li>Crisis Management</li>

                  <li>Rescue</li>

                  <li>Hazardous Materials Response</li>

                  <li>Customized Training</li>

                  <li>Disaster Management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="megamenu_layout_lower_section">
            <div className="megamenu_layout_lower_section_1">
              <div className="megamenu_layout_lower_section_1_title">
                <div className="megamenu_layout_lower_section_1_title_img">
                  <img
                    src={electronic_security_icon}
                    alt="Security_service_icon"
                  />
                </div>

                <p>Electronic Security</p>
              </div>

              <div className="megamenu_layout_lower_section_1_menu">
                <ul>
                  <li>CCTV Surveillance System</li>

                  <li>Access Control System</li>

                  <li>Network Infrastructure</li>

                  <li>Intrusion Detection System</li>

                  <li>Perimeter Security Solution</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_lower_section_2">
              <div className="megamenu_layout_lower_section_2_title">
                <div className="megamenu_layout_lower_section_2_title_img">
                  <img src={cash_meng} alt="Facility_managment_icon" />
                </div>

                <p>Cash Management</p>
              </div>

              <div className="megamenu_layout_lower_section_2_menu">
                <ul>
                  <li>Cash in Transit</li>

                  <li>Cash Processing</li>

                  <li>Cash Counters</li>

                  <li>Cash Management Centres</li>

                  <li>Cash Vaulting</li>

                  <li>Atm Cassette Swap</li>

                  <li>Cash Recyclers</li>

                  <li>Bullion Transportation ,Vaulting & Cearance</li>

                  <li>Door Step Banking</li>
                </ul>
              </div>
            </div>

            <div className="megamenu_layout_lower_section_3">
              <div className="megamenu_layout_lower_section_3_title">
                <div className="megamenu_layout_lower_section_3_title_img">
                  <img src={event_meng} alt="Facility_managment_icon" />
                </div>

                <p>Event Management</p>
              </div>

              <div className="megamenu_layout_lower_section_3_menu">
                <ul>
                  <li>Pre-Event Planning & Coordination</li>

                  <li>Identify Consequences</li>

                  <li>Identify Security Threats</li>

                  <li>
                    Prioritize Hazardous Scenarios Associated with Threats
                  </li>

                  <li>Establish the role of Technology in the Event</li>

                  <li>Review Security Measures & Rehearse / Review Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
