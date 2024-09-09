// import React from "react";
import { Link } from "react-router-dom";
import "./VideoSection.css";
// import play_btn from "../../../assets/icons/video_section_play_btn.svg";

const VideoSection = () => {
  return (
    <>
      <div className="video_section_main_container">
        <div className="video_section_left_side">
          <div className="video_section_left_side_content">
            <h6>Eyebrow Heading</h6>
            <h3>Loreum ipsum is simply dummy text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac maecenas odio amet
              velit cras.
            </p>
            <button type="button">Contact Us</button>
          </div>
        </div>

        <div className="video_section_right_side">
          <div className="video_section_right_side_82">
            <div className="video_section_right_side_bg_color">
              <Link
                target="_blank"
                to="https://youtu.be/LUgLOa6hN7Y?si=c_KzLI_Hq5-G1qcE"
              >
                {/* <img src={play_btn} alt="Play & Pause Button" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
