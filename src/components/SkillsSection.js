import React from "react";
import "./CSS/SkillsSection.css";

const skillsData = [
  {
    title: "Languages & Development",
    skills: [
      { name: "Java", icon: "/icons/java.png"},
      { name: "XML", icon: "/icons/xml.png"},
      { name: "JavaScript", icon: "/icons/js.png"},
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      { name: "Node Js", icon: "/icons/node.png" },
      { name: "React Js", icon: "/icons/react.png" },
      { name: "BootStrap", icon: "/icons/bootstrap.jpg" },
      { name: "Spring Boot", icon: "/icons/springbbot.png" },
    ],
  },
  {
    title: "Database & Tool",
    skills: [
      { name: "MySQL", icon: "/icons/mysql.jpg" },
      { name: "Git", icon: "/icons/git.png" },
      {name: "Github", icon: "/icons/github.png" },
      {name: "Postman", icon: "/icons/postman.png" },
      { name: "Android", icon: "/icons/android.png"},
    ],
  },
  {
    title: "Fundamentals",
    skills: [
      { name: "DSA", icon: "/icons/dsa.png" },
      { name: "OOPS", icon: "/icons/oops.webp" },
      { name: "DBMS", icon: "/icons/dbms.webp" },
      { name: "OS", icon: "/icons/os.jpg" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="skills-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2 text-white">Skills</h2>
         <hr className="custom-underline" />
        <p className="text-light mb-5">
          These are the technologies and tools I’ve worked with and continue to improve upon.
        </p>


        <div className="row g-4">
          {skillsData.map((category, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="skills-card">
                <h4 className="category-title">{category.title}</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  {category.skills.map((skill, i) => (
                    <div className="skill-pill d-flex align-items-center" key={i}>
                      <img src={skill.icon} alt={skill.name} />
                      <span className="ms-2">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
