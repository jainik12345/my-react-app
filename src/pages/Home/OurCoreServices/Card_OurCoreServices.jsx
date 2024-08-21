// import React from "react";

const Card_OurCoreServices = ({
  imageSrc,
  altText,
  title,
  content,
  arrow_image,
}) => {
  return (
    <>
      <div className="our_core_services_card">
        <img
          className="our_core_services_card_icon"
          src={imageSrc}
          alt={altText}
        />
        <h6>{title}</h6>
        <p>{content}</p>

        <img
          className="our_core_services_card_arrow"
          src={arrow_image}
          alt="arrow image"
        />
      </div>
    </>
  );
};

export default Card_OurCoreServices;
