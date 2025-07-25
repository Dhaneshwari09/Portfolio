import React from 'react';
import ProjectCard from './ProjectCard';
import fileminer from './assets/fileminer.jpg';
import textutill from './assets/textutills.png';

const Projects = () => {
  const projectList = [
    {
      title: 'FileMiner App',
      image: fileminer,
      tags: ['Java', 'Android Studio', 'XML', 'Glide', 'Material Design'],
      
  description: 'FileMiner is a smart and lightweight file manager app that helps you manage, sort, search, and organize your files with ease. It supports advanced filters, batch actions, and duplicate file detection — all packed in a clean and user-friendly interface. The app also includes an "Exclude Folders" feature, allowing you to skip specific folders while searching or filtering, giving you more control over your file operations.',
  codeLink: 'https://github.com/Dhaneshwari09/android_java_recover_deleted_files',
  liveLink: ''


    },
    {
      title: 'TextUtil Web App',
      image: textutill,
      tags: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      description:
        "TextUtil's is a lightweight React web app for real-time text analysis and formatting. It includes case conversion, space cleanup, font customization, clipboard integration, and theme switching — designed to enhance productivity and improve user experience.",
      codeLink: 'https://github.com/Dhaneshwari09/TextUtils',
      liveLink: 'https://dhaneshwari09.github.io/TextUtils/',
    },
  ];

  return (
    <section
      className="text-white py-5"
      style={{
        background: "linear-gradient(135deg, #0b061a, #221133, #0b061a)",
      }}
    >
      <div className="container text-center texttt">
        <h2 className="fw-bold contact-heading">Projects</h2>
        <hr className="custom-underline1" />
        <p className="mb-5">
          I’ve built and contributed to a variety of projects. Here are a few that showcase my skills and experience.
        </p>

        <div className="row justify-content-center">
          {projectList.map((project, idx) => (
            <div className="col-md-5 mb-4" key={idx}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
