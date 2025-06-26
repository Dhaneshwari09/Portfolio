import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <hr className="custom-underline3" />
      <p className="contact-subtext">
        I'm always open to new opportunities and meaningful conversations. Feel
        free to get in touch!
      </p>
      <div className="contact-box">
        <h3 className="contact-box-title">
          Email Me{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h3>
        <form className="contact-form">
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
