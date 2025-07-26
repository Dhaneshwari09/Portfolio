import React from 'react';

const ExperienceCard = ({ title, role, duration, details }) => {
  return (
    <div className="text-start text-white border rounded-4 p-3 mb-4 shadow" style={{ background: '#1b1133' }}>
      <h5 className="fw-bold">{title} <span className="fw-normal text-info">|| {role}</span>
      </h5>
      <div className='mb-5 mt-1'><h6 className="text-white float-end mb-4 fst-italic" >({duration})</h6></div>
      
      
      <ul>
        {details.map((point, index) => (
          <li key={index} className="mb-2">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
