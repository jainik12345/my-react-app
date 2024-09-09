/* eslint-disable react/prop-types */
// import React from 'react'
import "./AboutExperience.css";

const PageAboutExperience = ({
  experienceTitle,
  experienceDescription,
  locationsLabel,
  employeesLabel,
  clientsLabel,
  locationsCount,
  employeesCount,
  clientsCount,
}) => {
  return (
    <>
      <div className="about_experience_main_container">
        <div className="about_experience_content">
          <div className="about_experience_content_left_side">
            <div className="about_experience_content_left_side_text">
              <h6>{experienceTitle}</h6>
              <p>{experienceDescription}</p>
            </div>
          </div>
          <div className="about_experience_content_right_side">
            <div className="about_experience_content_right_side_1">
              <div className="about_experience_content_right_side_1_round">
                <span>{locationsCount}</span>
              </div>
              <p>{locationsLabel}</p>
            </div>
            <div className="about_experience_content_right_side_2">
              <div className="about_experience_content_right_side_2_round">
                <span>{employeesCount}</span>
              </div>
              <p>{employeesLabel}</p>
            </div>
            <div className="about_experience_content_right_side_3">
              <div className="about_experience_content_right_side_3_round">
                <span>{clientsCount}</span>
              </div>
              <p>{clientsLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAboutExperience;
