import React, { useState } from "react";
import "./CSS/Contact.css";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    const form = e.target;
    const name = form.name.value;

    setUserName(name);
    setShowMessage(true);

    // ✅ Clear the form after submission
    form.reset();

    // ✅ Hide popup after 3 sec
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section className="contact-section py-5">
      <div className="container text-center texttt">
        <h2 className="contact-heading">Contact</h2>
        <hr className="custom-underline3" />
        <p className="contact-subtext">
          I'm always open to new opportunities and meaningful conversations. Feel
          free to get in touch!
        </p>

        <div className="contact-box mx-auto mt-4">
          <h3 className="contact-box-title">
            Email Me <span role="img" aria-label="rocket">🚀</span>
          </h3>

          {/* ✅ REAL FORM */}
          <form
            className="contact-form"
            action="https://formsubmit.co/itzrakhi2005@gmail.com"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" rows="5" required />

            {/* Hidden config for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <button type="submit">Send</button>
          </form>

          {/* 👻 Hidden iframe so page doesn't reload */}
          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

          {/* ✅ Success Popup */}
          {showMessage && (
            <div className="popup-message mt-3">
              ✅ Thanks <strong>{userName}</strong>! I appreciate you reaching out. 😊
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
