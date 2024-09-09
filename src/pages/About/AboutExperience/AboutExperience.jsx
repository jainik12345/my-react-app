/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutExperience.css";
import PageAboutExperience from "./PageAboutExperience";

const AboutExperience = () => {
  const experienceTitle =
    "A Perfect Fusion of Excellence, Experience and Expertise";
  const experienceDescription =
    "With a highly reputed clientele to our portfolio, we @ Checkmate believe in people, processes and perfection. Our global footprint and thrust to offer best of services make us stand apart from the rest. ";
  const locationsLabel = "Locations";
  const employeesLabel = "Valuable Clients";
  const clientsLabel = "Taskforce";
  const locationsCount = "100+";
  const employeesCount = "6 K+";
  const clientsCount = "40 K+";
  return (
    <div>
      <PageAboutExperience
        experienceTitle={experienceTitle}
        experienceDescription={experienceDescription}
        locationsLabel={locationsLabel}
        employeesLabel={employeesLabel}
        clientsLabel={clientsLabel}
        locationsCount={locationsCount}
        employeesCount={employeesCount}
        clientsCount={clientsCount}
      />
    </div>
  );
};

export default AboutExperience;
