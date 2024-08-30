
import "./OurJourney.css";

import verttical_line from "../../../assets/icons/horizontal_line.svg";

import verttical_line_2 from "../../../assets/icons/horizontal_line.svg";

import point from "../../../assets/icons/arrow_icon.svg";

const OurJourney = () => {
  return (
    <>
      <div className="ourjourney_main_container">
        <div className="ourjourney_title">
          <p>our</p>

          <h3>Journey</h3>
        </div>

        <div className="ourjourney_timeline">
          <div className="ourjourney_timeline_item_1">
            <h6>1985</h6>

            <div className="ourjourney_timeline_item_1_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <div className="ourjourney_timeline_item_1_content">
              <div className="ourjourney_timeline_item_1_content_vertical_line">
                <img src={verttical_line} alt="Vertical line" />
              </div>

              <p>Sunt nostrud amet sint do</p>
            </div>
          </div>

          {/* Number 2 start */}

          <div className="ourjourney_timeline_item_2">
            <div className="ourjourney_timeline_item_2_content">
              <p>Exercitation veniam consequat</p>

              <div className="ourjourney_timeline_item_2_content_vertical_line">
                <img src={verttical_line_2} alt="Vertical line" />
              </div>
            </div>

            <div className="ourjourney_timeline_item_2_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <h6>1995</h6>
          </div>

          {/* Number 3 start */}

          <div className="ourjourney_timeline_item_3">
            <h6>2005</h6>

            <div className="ourjourney_timeline_item_3_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <div className="ourjourney_timeline_item_3_content">
              <div className="ourjourney_timeline_item_3_content_vertical_line">
                <img src={verttical_line} alt="Vertical line" />
              </div>

              <p>Velit officia consequat duis</p>
            </div>
          </div>

          {/* Number 4 start */}

          <div className="ourjourney_timeline_item_4">
            <div className="ourjourney_timeline_item_4_content">
              <p>Ullamco est sit aliqua dolor </p>

              <div className="ourjourney_timeline_item_4_content_vertical_line">
                <img src={verttical_line_2} alt="Vertical line" />
              </div>
            </div>

            <div className="ourjourney_timeline_item_4_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <h6>2010</h6>
          </div>

          {/* Number 5 start */}

          <div className="ourjourney_timeline_item_5">
            <h6>2015</h6>

            <div className="ourjourney_timeline_item_5_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <div className="ourjourney_timeline_item_5_content">
              <div className="ourjourney_timeline_item_5_content_vertical_line">
                <img src={verttical_line} alt="Vertical line" />
              </div>

              <p>Amet minim mollit non deserunt</p>
            </div>
          </div>

          {/* Number 6 start */}

          <div className="ourjourney_timeline_item_6">
            <div className="ourjourney_timeline_item_6_content">
              <p>Exercitation veniam consequat </p>

              <div className="ourjourney_timeline_item_6_content_vertical_line">
                <img src={verttical_line_2} alt="Vertical line" />
              </div>
            </div>

            <div className="ourjourney_timeline_item_6_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <h6>2020</h6>
          </div>

          {/* Number 7 start */}

          <div className="ourjourney_timeline_item_7">
            <h6>2025</h6>

            <div className="ourjourney_timeline_item_7_point">
              <img src={point} alt="about_section_ourjourney_point" />
            </div>

            <div className="ourjourney_timeline_item_7_content">
              <div className="ourjourney_timeline_item_7_content_vertical_line">
                <img src={verttical_line} alt="Vertical line" />
              </div>

              <p>Velit officia consequat duis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurJourney;
