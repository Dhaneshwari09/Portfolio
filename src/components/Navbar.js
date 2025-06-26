import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CSS/Navbar.css";

export default function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarContent");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          toggler.click();
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
      <div className="container">
        <a className="navbar-brand d-flex mt-2 align-items-center text-white fw-bold" href="#home">
          <div className="logo-circle me-2"></div>
          <span className="ms-2">Portfolio</span>
        </a>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center align-items-center justify-content-end w-100 pe-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
            <li className="nav-item d-lg-none mt-3 px-3">
              <a
                href="https://github.com/Dhaneshwari09"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill custom-github-btn text-white w-100"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block ms-3">
          <a
            href="https://github.com/Dhaneshwari09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-pill custom-github-btn text-white"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
