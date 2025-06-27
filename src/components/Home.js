import React from "react";
import "./CSS/Home.css";
import { ReactTyped } from "react-typed";
import profile from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";

export default function Home() {
  return (
    // <div className="home-section d-flex align-items-center text-white px-3 px-sm-5 px-5 py-5">
        <div className="home-section d-flex align-items-center text-white px-3 py-5">

      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          {/* Left Column - Text */}
          <div className="col-md-6 text-center text-md-start home-text-section">
            <h1 className="fw-bold display-5">Hi, I am</h1>
            <h1 className="fw-bold display-4">Dhaneshwari Patel</h1>
            <h4 className="mt-3">
              I am a{" "}
              <span className="highlight-text">
                <ReactTyped
                  strings={["Programmer", "Software Developer"]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </span>
            </h4>

            <p className="mt-4 text-secondary">
              I'm a Computer Science undergraduate with a foundation in
              programming, web and mobile app development, and backend
              technologies. I’m passionate about building innovative tech
              solutions, constantly learning, and growing in dynamic
              environments. Ready to take on new challenges and make a
              meaningful impact!
            </p>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn resume-btn mt-4 px-4 py-2 fw-bold"
            >
              Career Profile
            </a>
          </div>
          {/* Right Column - Image */}
          <div className="col-md-6 text-center mb-4">
            <div className="image-wrapper mx-auto">
              <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
