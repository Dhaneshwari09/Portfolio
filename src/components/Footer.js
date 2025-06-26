import React from "react";
import "./CSS/Footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-name">Dhaneshwari Patel</h3>

      <div className="footer-icons">
        <a
          href="https://github.com/Dhaneshwari09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dhaneshwari-patel-1750a8254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <p className="footer-copy">
        © 2025 Dhaneshwari Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
