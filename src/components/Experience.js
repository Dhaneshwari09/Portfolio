import React from 'react';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';
import fileminer from './assets/fileminer.jpg';

const Experience = () => {
  const experienceList = [
    {
      title: "PRAGAMENT TECH SOLUTIONS",
      role: "Android Development Intern",
      duration: "March 2025 – April 2025",
      details: [
        "Contributed to open-source repository through forking and collaborative development.",
        "Developed the fully functional FileMiner Android app using Java, Android Studio, and relevant libraries.",
        "Gained hands-on experience with Android SDK, Git, remote work, and real-world project collaboration.",
        "Received appreciation for responsibility, eagerness to learn, and effective communication skills.",
      ],
    },
  ];


  return (
    <section className="text-white py-5" style={{ background: "linear-gradient(135deg, #0b061a, #221133, #0b061a)" }}>
      <div className="container text-center texttt">
        <h2 className="fw-bold contact-heading">Experience</h2>
        <hr className="custom-underline1" />
        <p className="mb-5">I’ve built and contributed to a variety of projects. Here are a few that showcase my skills and experience.</p>

        {/* Experience section */}
        <div className="row justify-content-center">
          {experienceList.map((exp, idx) => (
            <div className="col-md-8" key={idx}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
