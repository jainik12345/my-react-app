/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";

import "./FireSafetyOurServiceSection.css";
// import up_icon from "../../../../assets/icons/our_service_section_left_side_up_icon.svg";
// import down_icon from "../../../../assets/icons/our_service_section_left_side_down_icon.svg";
const services = {
  "Fire Prevention": {
    title: "Fire Prevention",
    content: (
      <>
        <p>
          Our well-skilled and vigilant fire prevention taskforce are trained
          efficiently in offering different types of services like supressing
          and detecting fire, monitoring and inspecting locations, maintenance
          of fire equipment, installation of sprinkler systems etc. We ensure
          complete compliance with industry standards and abide by the
          government norms to ensure a pitch perfect service offering. Our fire
          prevention training courses embed the knowledge and skills involved at
          various levels of the fire prevention arena.
        </p>
        <span>Our Key Highlights</span>
        <ul>
          <li>State-of-the-art campus with modern facilities</li>
          <li>Years of extensive experience possessed by instructors</li>
          <li>Inputs from internationally renowned industry experts</li>
          <li>Latest trends in fire risk assessment and fire detection</li>
          <li>Practical experience by creating real fires</li>
        </ul>
      </>
    ),
  },
  "Crisis Management": {
    title: "Crisis Management",
    content: (
      <>
        <p>
          We understand the need of the hour and offer skilled training services
          to our taskforce that not only trains them to handle crisis and
          emergencies with their technical finesse but also maintain their
          mental equilibrium in such a way that helps them to be their
          proactive, intelligent and practical best. Our advanced Emergency
          Response training facility near Vadodara has been collaborating with
          Rashtriya Raksha University to offer residential fire-fighting
          training programs with sponsorship assistance to eligible candidates.
        </p>
        Rescue
        <ul>
          <li>Hands-on training for real-life incidents</li>
          <li>
            Early anticipation, reaction and mitigation of potential crisis
          </li>
          <li>Business continuity management</li>
          <li>Real-time and round-the-clock monitoring</li>
          <li>
            Command and emergency response course with well laid out curriculum
          </li>
        </ul>
      </>
    ),
  },
  Rescue: {
    title: "Rescue",
    content: (
      <>
        <p>
          Our powerful training services offer skilled rescue operators as an
          output who can manage and handle all types of rescue operations, to
          bring people out of danger, attack, harm etc. Be it natural calamity
          or man-made disaster, our brave and proficient taskforce is so
          well-trained and balanced in their thoughts, that they can manage any
          situation with perfection. We offer training to our teams to
          successfully implement rescue operations, be it planned ones or
          impromptu ones.
        </p>
        <span>Our Key Highlights</span>
        <ul>
          <li>Rigorous and detailed exercises</li>
          <li>Issuance of timely alarms and warnings to citizens</li>
          <li>Air, road and water evacuation</li>
          <li>Transporting survivors with safety and basic comfort</li>
          <li>Infrastructure protection and restoration</li>
        </ul>
      </>
    ),
  },
  "Hazardous Materials Response": {
    title: "Hazardous Materials Response",
    content: (
      <>
        <p>
          Our detailed training programs are exhaustive and include classroom
          instructions with realistic hands-on simulations for hazardous
          material disasters. Our fighters are well trained to respond promptly
          and accurately while there is a release of any type of
          substance/product that is harmful, which could be released by nature
          or human. Our training services have been accredited as a JOIFF
          (International Organization for Industrial Hazard Management) training
          establishment.
        </p>
        <span>Our Key Highlights</span>
        <ul>
          <li>Diverse training courses and services</li>
          <li>Exposure to handle varied types of hazardous items</li>
          <li>Complete focus on trust and commitment despite risks</li>
          <li>Construction and foreplay of hazardous incidents</li>
          <li>Prompt incident response management and monitoring</li>
        </ul>
      </>
    ),
  },
  "Customized Training": {
    title: "Customized Training",
    content: (
      <>
        <p>
          Our skilled experts realize that ‘one size does not fit all’ and each
          client has their own set of requirements that need tailoring and hence
          we offer customized training services that look at your own need. We
          use real-life simulators and props that make use of different
          materials like real fuel and extinguishing agents, and comprises
          full-scale replicas of industrial equipment & structures, such as
          refinery processing units, etc to provide realistic, applied training.
        </p>
        <span>Our Key Highlights</span>
        <ul>
          <li>Hands on training props and simulations</li>
          <li>Understanding of organizational goals and needs</li>
          <li>Content creation and implementati</li>
          <li>Cost effective, convenient and productive</li>
          <li>Adaptive learning techniques</li>
        </ul>
      </>
    ),
  },
  "Disaster Management": {
    title: "Disaster Management",
    content: (
      <>
        <p>
          Disaster could be anywhere and everywhere and so are our trained
          teams. We encompass any and every nook and corner to ensure that we
          can protect you from any kind of disaster. We cover industry segments
          like oil & gas, petrochemical, chemical, power, automobiles,
          fertilizers, transportation and hospitality. We follow a systematic
          approach that showcases the immense experience and expertise that our
          team has, in terms of managing, foreseeing and avoiding disasters.
        </p>
        <span>Our Key Highlights</span>
        <ul>
          <li>Utilizing latest methods and technologies</li>
          <li>Risk reduction, willingness and measurement</li>
          <li>Proactive readiness for facing disasters</li>
          <li>Completely neutral, unbiased and professional approach</li>
        </ul>
      </>
    ),
  },
};

const FireSafetyOurServiceSection = () => {
  const [selectedService, setSelectedService] = useState("Fire Prevention");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showContent, setShowContent] = useState(false); // New state for content visibility

  const menuRef = useRef(null);
  const serviceRefs = useRef({}); // To store refs for each menu item

  const handleMenuClick = (service) => {
    setSelectedService(service);
    setDropdownOpen(false);

    // Delay showing the content by 5 seconds
    setShowContent(false);
    setTimeout(() => setShowContent(true), 5000); // 5000 ms = 5 seconds
  };

  const scrollMenuUp = () => {
    const currentIndex = Object.keys(services).indexOf(selectedService);
    if (currentIndex > 0) {
      const prevService = Object.keys(services)[currentIndex - 1];
      setSelectedService(prevService);
      serviceRefs.current[prevService].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollMenuDown = () => {
    const currentIndex = Object.keys(services).indexOf(selectedService);
    if (currentIndex < Object.keys(services).length - 1) {
      const nextService = Object.keys(services)[currentIndex + 1];
      setSelectedService(nextService);
      serviceRefs.current[nextService].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="fire_safety_our_service_main_container">
        <div className="fire_safety_our_service_title">
          <p>Our</p>
          <h3>Security Services</h3>
        </div>
        <div className="fire_safety_our_service_menu_bar">
          <div className="fire_safety_our_service_left_side_menu">
            <div className="fire_safety_dropdown_menu_container">
              <button
                className="fire_safety_dropdown_button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {services[selectedService].title}
              </button>
              <ul
                ref={menuRef}
                className={`fire_safety_dropdown_menu ${
                  dropdownOpen ? "open" : ""
                }`}
              >
                {Object.keys(services).map((service) => (
                  <li
                    key={service}
                    ref={(el) => (serviceRefs.current[service] = el)} // Store refs for each item
                    onClick={() => handleMenuClick(service)}
                    className={service === selectedService ? "selected" : ""}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fire_safety_desktop_menu">
              <ul>
                {Object.keys(services).map((service) => (
                  <li
                    key={service}
                    onClick={() => handleMenuClick(service)}
                    className={service === selectedService ? "selected" : ""}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fire_safety_out_service_button_icon">
              <div
                className="fire_safety_our_service_left_side_up_button"
                onClick={scrollMenuUp}
              >
                {/* <img src={up_icon} alt="Up_Icon" /> */}
              </div>
              <div
                className="fire_safety_our_service_left_side_down_button"
                onClick={scrollMenuDown}
              >
                {/* <img src={down_icon} alt="Down_Icon" /> */}
              </div>
            </div>
          </div>
          <div className="fire_safety_our_service_right_side_services">
            <div className="fire_safety_our_service_right_side_services_title">
              <p>{services[selectedService].title}</p>
            </div>
            <div
              className={`fire_safety_our_service_right_side_services_content ${
                showContent ? "fade-in" : "fade-out"
              }`}
            >
              {services[selectedService].content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireSafetyOurServiceSection;
