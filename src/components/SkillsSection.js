import React from "react";
import "./CSS/SkillsSection.css";
import java from "./assets/icons/java.png";
import html from "./assets/icons/html.png";
import xml from "./assets/icons/xml.png";
import js from "./assets/icons/js.png";
import css from "./assets/icons/css.png";
import node from "./assets/icons/node.png";
import react from "./assets/icons/react.png";
import bootstrap from "./assets/icons/bootstrap.jpg";
import springbbot from "./assets/icons/springbbot.png";
import mysql from "./assets/icons/mysql.jpg";
import git from "./assets/icons/git.png";
import github from "./assets/icons/github.png";
import postman from "./assets/icons/postman.png";
import android from "./assets/icons/android.jpg";
import dsa from "./assets/icons/dsa.png";
import oops from "./assets/icons/oops.webp";
import dbms from "./assets/icons/dbms.webp";
import os from "./assets/icons/os.jpg";

const skillsData = [
  {
    title: "Languages & Development",
    skills: [
      { name: "Java", icon: java},
      { name: "XML", icon: xml},
      { name: "JavaScript", icon: js},
      { name: "HTML", icon: html },
      { name: "CSS", icon: css},
    ],
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      { name: "Node Js", icon: node},
      { name: "React Js", icon: react },
      { name: "BootStrap", icon: bootstrap },
      { name: "Spring Boot", icon: springbbot },
    ],
  },
  {
    title: "Database & Tool",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "Git", icon: git },
      {name: "Github", icon: github },
      {name: "Postman", icon: postman },
      { name: "Android", icon: android},
    ],
  },
  {
    title: "Fundamentals",
    skills: [
      { name: "DSA", icon: dsa },
      { name: "OOPS", icon: oops },
      { name: "DBMS", icon: dbms },
      { name: "OS", icon: os },
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
