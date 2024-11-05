import React from "react";
import styles from "./contactUs.module.css";
import contactImage from "../../assets/images/contact-image.svg";
import SmBg from "../../assets/images/contact-us-sm-bg.jpg";

const ContactUs = ({ backgroundColorClass }) => {
  const isSmallScreen = window.innerWidth < 768;

  return (
    <div
      className={`${styles.contactUs} ${styles[backgroundColorClass]}`}
      id="contactUs"
      style={{
        backgroundImage: isSmallScreen ? `url(${SmBg})` : "none",
      }}
    >
      {isSmallScreen && <div className={styles.overlay}></div>}
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>Contact us</div>
            <div className={styles.subtitle}>Become One Of Us</div>
          </div>
          <p className={styles.text}>
            For enquiries, sponsorship, or partnership,
            <br />
            email us at{" "}
            <span className={styles.email}>admin@nextgentechfi.com</span>
            <br />
            or send us a message on WhatsApp at{" "}
            <span className={styles.phone}>+2347019102780</span>
          </p>
        </div>
        {!isSmallScreen && (
          <img className={styles.image} alt="Decorative" src={contactImage} />
        )}
      </div>
    </div>
  );
};

export default ContactUs;
