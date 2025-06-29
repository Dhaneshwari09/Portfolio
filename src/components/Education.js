import React from 'react';
import './CSS/Education.css';
import college from './assets/college-logo.png';
import tenth from './assets/tenth-logo.png';
import twelth from './assets/twelth.jpg';

const EducationSection = () => {
  const educationData = [
    {
      logo: college,
      title: 'Gyan Ganga College Of Technology, Jabalpur',
      degree: 'Bachelor of Technology – BTech, Computer Science and Engineering (Pursuing)',
      date: 'Aug 2022 – Jun 2026',
      grade: '8.42 CGPA',
    },
    {
      logo: twelth,
      title: 'Excellence Higher Secondary School, Beohari',
      degree: 'MP Board Class-12th, PCM (Physics, Chemistry, Mathematics)',
      date: '2021 – 2022',
      grade: 'A',
    },
    {
      logo: tenth,
      title: 'Saraswati Higher Secondary School, Beohari',
      degree: 'MP Board Class-10th',
      date: '2019 – 2020',
      grade: 'A',
    },
  ];

  return (
    <section className="education-section">
      <div className="container education-section">
        <h2 className="text-center fw-bold text-white texttt contact-heading">Education</h2>
        <hr className="custom-underline2" />

        <p className="text-center mb-5 text-white" style={{ maxWidth: "800px", margin: "0 auto" }}>
          My academic journey has been a blend of consistent learning, curiosity, and growth.
          Here are the details of my educational background.
        </p>

        <div className="timeline">
          <div className="timeline-line" />
          {educationData.map((edu, index) => (
            <div key={index}>
              <div className="timeline-item">
                <div className="edu-header">
                  <img src={edu.logo} alt="logo" className="edu-logo" />
                  <div className="edu-text">
                    <h5 className="text-white"><strong>{edu.title}</strong></h5>
                    <p className="text-white">{edu.degree}</p>
                    <p className="text-white">{edu.date}</p>
                  </div>
                </div>
                <div className="edu-grade text-white">
                  <strong>Grade:</strong> {edu.grade}
                </div>
              </div>
              {index < educationData.length - 1 && <div className="timeline-dot" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
