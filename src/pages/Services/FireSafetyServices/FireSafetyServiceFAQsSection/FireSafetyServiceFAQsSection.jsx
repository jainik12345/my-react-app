/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./FireSafetyServiceFAQsSection.css";

  // import negative_icon from "../../../../assets/icons/service_section_faqs_-_icon.svg";
  // import positive_icon from "../../../../assets/icons/service_section_faqs_+_icon.svg";

const faqItems = [
  {
    id: 1,
    question:
      "Why should you opt for regular fire and safety training schedules?",
    answer:
      "Fire and safety training is a must to be proactive and stay ready for unprecedented incidents that could happen due to various reasons like fire, disaster, calamities, hazardous material etc. and it is essential to have a well-experienced training staff.",
  },
  {
    id: 2,
    question:
      "What sort of planning is needed when you manage a fire, crisis, disaster related incident?",
    answer:
      "It needs ample courage, proactive planning and presence of mind to deal with such tricky situations. A very well-balanced state of mind with experience and expertise is required to deal with such incidents.",
  },
  {
    id: 3,
    question:
      "What types of assessments must be done to ensure you have sufficient training on these areas?",
    answer:
      "Different types of audits and assessments like impact analysis, business continuity planning, risk assessment and mitigation, incident control mechanism etc. must be managed in a time sensitive manner.",
  },
  {
    id: 4,
    question:
      "Why would you choose Checkmate to be your fire and safety trainer or partner?",
    answer:
      "Checkmate has one of the nation’s leading chunks of personnels who are well trained and experts in different security areas like manned guarding, fire and safety, disaster management, and more. We have our own in-house training institute which is the foundation stone for professional and proficient task force. ",
  },
  {
    id: 5,
    question: "What sort of industry segments do you serve?",
    answer:
      "We have pan-India and global presence serving a variety of industry segments like healthcare, entertainment, automobiles, oil & gas, chemical, finance, power, fertilizers, education, petrochemical, transportation, media, logistics and hospitality.",
  },
];

const FireSafetyServiceFAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <>
      <div className="fire_safety_service_faqs_main_container">
        <div className="fire_safety_service_faqs_title">
          <p>our</p>
          <h3>FAQs</h3>
        </div>
        <div className="fire_safety_service_faqs_content">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`fire_safety_service_faqs_content_item ${
                openFAQ === item.id ? "open" : ""
              }`}
            >
              <div className="fire_safety_service_faqs_content_text">
                <h6>{item.question}</h6>
                {openFAQ === item.id && <p>{item.answer}</p>}
              </div>
              <div
                className={`fire_safety_service_faqs_content_icon ${
                  openFAQ === item.id ? "open" : ""
                }`}
                onClick={() => toggleFAQ(item.id)}
              >
                {/* <img
                  src={openFAQ === item.id ? negative_icon : positive_icon}
                  alt="Icon"
                /> */}
              </div>
              <div className="fire_safety_service_faqs_content_line"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FireSafetyServiceFAQsSection;
