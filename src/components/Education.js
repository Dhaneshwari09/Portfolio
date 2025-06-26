import React from 'react';
import './CSS/Education.css';
import college from './assets/college-logo.png';
import tenth from './assets/tenth-logo.png';
import twelth from './assets/twelth.jpg';

const EducationSection = () => {
 const educationData = [
  {
    logo: college, // replace with your Gyan Ganga logo image variable
    title: 'Gyan Ganga College Of Technology, Jabalpur',
    degree: 'Bachelor of Technology – BTech, Computer Science and Engineering (Pursuing)',
    date: 'Aug 2022 – Jun 2026',
    grade: '8.42 CGPA',
  },
  {
    logo: twelth, // replace with your Excellence School logo image variable
    title: 'Excellence Higher Secondary School, Beohari',
    degree: 'MP Board Class-12th, PCM (Physics, Chemistry, Mathematics)',
    date: '2021 – 2022',
    grade: 'A',
  },
  {
    logo: tenth, // replace with your Saraswati School logo image variable
    title: 'Saraswati Higher Secondary School, Beohari',
    degree: 'MP Board Class-10th',
    date: '2019 – 2020',
    grade: 'A',
  },
];


  return (
    <section className="education-section">
      <h2 className="text-center fw-bold">Education</h2>
      <hr className="custom-underline2" />
      <p className="text-center mb-5">
        My academic journey has been a blend of consistent learning, curiosity, and growth. Here are the details of my educational background.
      </p>

      <div className="timeline">
        <div className="timeline-line" />
        {educationData.map((edu, index) => (
          <div key={index}>
            <div className="timeline-item">
              <div className="edu-header">
                <img src={edu.logo} alt="logo" className="edu-logo" />
                <div className="edu-text">
                  <h5><strong>{edu.title}</strong></h5>
                  <p>{edu.degree}</p>
                  <p>{edu.date}</p>
                </div>
              </div>
              <div className="edu-grade">
                <strong>Grade:</strong> {edu.grade}
              </div>
            </div>
            {index < educationData.length - 1 && <div className="timeline-dot" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
