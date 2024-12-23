import React from "react";
import styles from "./footer.module.css";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import call from "../../assets/icons/call.svg";
import email from "../../assets/icons/email.svg";
import line from "../../assets/icons/line-5.svg";
import logo from "../../assets/images/tech-fi-3.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.infoGroup}>
          <div className={styles.techFiWrapper}>
            <img className={styles.techFi} alt="Tech fi" src={logo} />
          </div>
          <p className={styles.p}>A Grit Informed Media Subsidiary.</p>
          <div className={styles.socials}>
            <img className={styles.linkedin} alt="linkedin-icon" src={linkedin} />
            <img className={styles.instagram} alt="Instagram-Icon" src={instagram} />
            <img className={styles.youtube} alt="Youtube-Icon" src={youtube} />
          </div>
        </div>
        <div className={styles.contactGroup}>
          <div className={styles.contactTitle}>Contact us</div>
          <div className={styles.contactInfo}>
            <img className={styles.call} alt="call icon" src={call} />
            <div className={styles.phoneNumber}>+2348131140937</div>
          </div>
          <div className={styles.image}>
            <img className={styles.img} alt="sms" src={email} />
            <div className={styles.email}>admin@gritinformedia.tech</div>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <img alt="Line" src={line} />
      </div>
      <div className={styles.rightsReserved}>
        <p className={styles.copyrightGrit}>Copyright © 2024 Grit Informed Media. All Rights Reserved.</p>
        <div className={styles.privacyGroup}>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.termsOfUse}>Terms Of Use</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
