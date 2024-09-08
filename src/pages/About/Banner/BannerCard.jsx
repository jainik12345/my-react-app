/* eslint-disable react/prop-types */
// import React from "react";
import "./Banner.css"

const BannerCard = ({heading}) => {
  return (
    <div>
      <div className="banner_main_container">
        <div className="banner_background_image">
          <div className="banner_subtext">{heading}</div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
