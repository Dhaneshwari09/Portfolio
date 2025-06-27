import React, { useState } from "react";
import "./CSS/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar custom-navbar">
      <div className="container">
        {/* Logo */}
        <a href="#home" className="navbar-brand text-white fw-bold" onClick={closeMenu}>
          <div className="logo-circle me-2"></div>
           Portfolio
        </a>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open1" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open3" : ""}`}></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["home", "skills", "projects", "education", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="nav-link text-white" onClick={closeMenu}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          {/* GitHub Button (mobile) */}
          <li className="d-lg-none">
            <a
              href="https://github.com/Dhaneshwari09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-pill custom-github-btn text-white mt-2"
              onClick={closeMenu}
            >
              GitHub Profile
            </a>
          </li>
        </ul>

        {/* GitHub Button (desktop) */}
        <div className="d-none d-lg-block">
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
