import React from "react";
import "./contact-us.css";
import contactImage from "../../assets/images/contact-image.svg"

// The contact us component can take two styling prop for backgroundColorClass
// 1. bg-light-blue
// 2. bg-white

const ContactUs = ({ backgroundColorClass }) => {
  return (
    <div className={`contact-us ${backgroundColorClass}`} id="contactUs">
      <div className="contact-us__frame">
        <div className="contact-us__content">
          <div className="contact-us__header">
            <div className="contact-us__title">Contact us</div>
            <div className="contact-us__subtitle">Become One Of Us</div>
          </div>
          <p className="contact-us__text">
            For enquiries, sponsorship, or partnership,
            <br />
            email us at {" "} <span className="contact-us__email">admin@gritinformedmedia.tech
            </span>
            <br />
            or send us a message on WhatsApp at{" "}
            <span className="contact-us__phone">+234813 114 0937</span>
          </p>
        </div>
        <img
          className="contact-us__image"
          alt="Decorative"
          src={contactImage}
        />
      </div>
    </div>
  );
};

export default ContactUs;
