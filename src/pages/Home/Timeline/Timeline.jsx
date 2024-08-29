import "./Timeline.css";




const Timeline = () => {
  const events = [
    { year: '1985', description: 'Sunt nostrud amet sint do' },
    { year: '1995', description: 'Exercitation veniam consequat' },
    { year: '2005', description: 'Velit officia consequat duis' },
    { year: '2010', description: 'Ullamco est sit aliqua dolor' },
    { year: '2015', description: 'Amet minim mollit non deserunt' },
    { year: '2020', description: 'Exercitation veniam consequat' },
    { year: '2025', description: 'Velit officia consequat duis' },
  ];
  return (
    <>
       <div className="timeline-container">
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'}`}>
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Timeline;
