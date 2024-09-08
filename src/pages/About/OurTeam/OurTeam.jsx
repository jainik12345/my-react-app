// import React from "react";
import "./OurTeam.css";
// import team2 from "../../../assets/images/about_section_our_team_2.png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Vikram Mahurkar ",
      title: "Founder & Managing Director",
      // image: team2,
      description:
        "A visionary and pioneer in the security services arena, he led the company to great heights as a multinational multi-service provider. His professionalism, guidance and commitment has been the foundation of the entire institution. ",
    },
    {
      name: "Sujeet Singh Rawal",
      title: "CEO, XXXXXX",
      // image: team2,
      description:
        "A distinguished professional with a wealth of expertise spanning various domains, prominently in corporate and retail security, logistics, and banking services. He plays a pivotal role in overseeing all aspects of cash flow operations and management. ",
    },
    {
      name: "Samarjeet Mahurkar ",
      title: "CEO, Checkmate Services Pvt. Ltd.",
      // image: team2,
      description:
        "An esteemed figure in the corporate landscape, he has solidified his reputation as a visionary executive with profound insights into the security industry. He orchestrates strategic initiatives that propel the company to the forefront. ",
    },
  ];
  return (
    <>
      <div className="team-section">
        <p className="team-paragraph">Our Expert</p>
        <h3 className="team-heading">Management Team</h3>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-overlay">
                  <p>{member.description}</p>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
