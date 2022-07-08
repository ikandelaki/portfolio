import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className={`section-contact ${props.theme}`} id="contact">
      <div className="contact">
        <h2 className="number">03.</h2>
        <h3 className="title-description">CONTACT</h3>
        <div className="contact-details-container">
          <div className="contact-list">
            <a
              href="https://www.instagram.com/ikandelaki_/"
              target="_blank"
              className="contact-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://www.facebook.com/ikandelakii"
              target="_blank"
              className="contact-link"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="mailto:iraklikandelaki2@gmail.com"
              target="_blank"
              className="contact-link"
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
          <div className="contact-details">
            <h4>iraklikandelaki2@gmail.com</h4>
            <h4>(+995) 598-08-72-29</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
