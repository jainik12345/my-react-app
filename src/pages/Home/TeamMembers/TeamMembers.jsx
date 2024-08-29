import "./TeamMembers.css"
const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Vikram P. Mahurkar',
      title: 'Founder & CEO',
      image: '/path-to-your-image1.jpg',
      description: 'His commitment backed by sheer professionalism has enabled Checkmate Group to achieve greater success as a leading multinational security service provider coupled with exemplary growth in terms of revenue & value proposition.'
    },
    {
      name: 'Rita Patel',
      title: 'Chief Operating Officer',
      image: '/path-to-your-image2.jpg',
      description: 'Rita’s operational expertise and leadership have driven Checkmate Group to optimize its processes and expand its reach globally, ensuring a solid foundation for continued growth.'
    },
    {
      name: 'Arjun Mehta',
      title: 'Chief Technology Officer',
      image: '/path-to-your-image3.jpg',
      description: 'Arjun’s innovative vision and technological prowess have been key to integrating advanced security solutions, positioning Checkmate Group as a leader in tech-driven security services.'
    }
  ];
  return (
    <>
      <div className="team-section">
        <h2 className="team-heading">Management Team</h2>
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

export default TeamMembers;
