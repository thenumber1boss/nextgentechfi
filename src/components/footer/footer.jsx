import React from "react";
import "./footer.css";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import call from "../../assets/icons/call.svg";
import email from "../../assets/icons/email.svg";
import line from "../../assets/icons/line-5.svg";
import logo from "../../assets/images/tech-fi-3.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="info">
        <div className="info-group">
            <div className="tech-fi-wrapper">
            <img className="tech-fi" alt="Tech fi" src={logo} />
            </div>
            <p className="p">A Grit Informed Media Subsidiary.</p>
            <div className="socials">
            <img className="linkedin" alt="linkedin-icon" src={linkedin} />
            <img className="instagram" alt="Instagram-Icon" src={instagram} />
            <img className="youtube" alt="Youtube-Icon" src={youtube} />
            </div>
        </div>
        <div className="contact-group">
            <div className="contact-title">Contact us</div>
            <div className="contact-info">
            <img className="call" alt="call icon" src={call} />
            <div className="phone-number">23400000000000</div>
            </div>
            <div className="image">
            <img className="img" alt="sms" src={email} />
            <div className="email">www@gmail.com</div>
            </div>
        </div>
      </div>
      <div className="line">
      <img alt="Line" src={line} />
      </div>
      <div className="rights-reserved">
        <p className="copyright-grit">Copyright © 2024 Grit Informed Media. All Rights Reserved.</p>
        <div className="privacy-group">
            <div className="privacy-policy">Privacy Policy</div>
            <div className="terms-of-use">Terms Of Use</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
