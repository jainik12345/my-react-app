/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Industries.css'; // Add your CSS here for responsiveness

const industriesData = [
  { name: 'Corporate', description: 'Corporate industry details go here.' },
  { name: 'Banking / BFSI', description: 'Banking and BFSI details go here.', services: ['Security Services', 'Cash Management'] },
  { name: 'Information Technology', description: 'IT industry details go here.' },
  { name: 'Manufacturing', description: 'Manufacturing industry details go here.' },
  { name: 'Education', description: 'Education industry details go here.' },
  { name: 'Hospitality', description: 'Hospitality industry details go here.' },
  { name: 'Ports', description: 'Ports industry details go here.' },
  { name: 'Mining', description: 'Mining industry details go here.' },
  { name: 'Retail & FMCG', description: 'Retail & FMCG industry details go here.' },
  { name: 'Chemical / Petro Chemical', description: 'Chemical industry details go here.' },
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleClosePopup = () => {
    setSelectedIndustry(null);
  };

  return (
    <div className="industries-container">
      <h2>Industries We Serve</h2>
      <ul className="industries-list">
        {industriesData.map((industry, index) => (
          <li
            key={index}
            className={`industry-item ${selectedIndustry?.name === industry.name ? 'active' : ''}`}
            onClick={() => handleIndustryClick(industry)}
            style={{
              backgroundColor: selectedIndustry?.name === industry.name ? '#4CAF50' : 'transparent',
              color: selectedIndustry?.name === industry.name ? '#fff' : '#000',
            }}
          >
            <div className="industry-name">
              <h4>{industry.name}</h4>
            </div>
            <div className="industry-description">
              <p>{industry.description}</p>
            </div>
            <button className="view-more-btn">➜</button>
          </li>
        ))}
      </ul>

      {/* Pop-up Modal */}
      {selectedIndustry && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedIndustry.name}</h3>
            <p>{selectedIndustry.description}</p>
            {selectedIndustry.services && (
              <div className="services-served">
                <h4>Services Served</h4>
                <ul>
                  {selectedIndustry.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
            <button className="close-popup" onClick={handleClosePopup}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Industries;
