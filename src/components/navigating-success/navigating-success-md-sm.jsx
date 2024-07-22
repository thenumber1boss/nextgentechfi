import React from "react";
import "./navigating-success-md-sm.css";
import Image1 from "../../assets/images/navigating-success-image-md-sm1.png";
import Image2 from "../../assets/images/navigating-success-image-md-sm2.png";
import Image3 from "../../assets/images/navigating-success-image-md-sm3.png";

const NavigatingSuccessMdSm = () => {
  return (
    <div className="navigating-success-md-sm">
      <h2 className="text-wrapper">Navigating Success with Tech and Financial Expertise</h2>
      <div className="frame">
        <div className="div">
          <img className="rectangle" alt="Rectangle" src={Image1} />
          <div className="frame-2">
            <h3 className="text-wrapper-2">Upskilling in Technology</h3>
            <p className="p">
              Master essential tech skills to stay relevant in today&#39;s competitive job market. Whether you&#39;re
              starting your career or advancing in a tech-driven role, our programs ensure you have the expertise
              employers seek.
            </p>
          </div>
        </div>
        <div className="div">
          <img className="rectangle" alt="Rectangle" src={Image2} />
          <div className="frame-2">
            <h3 className="text-wrapper-3">Financial Management Mastery</h3>
            <p className="p">
              Learn the art of financial management to effectively handle the rewards of technology investments. Our
              courses empower you to maximize earnings, manage finances wisely, and achieve long-term financial
              security.
            </p>
          </div>
        </div>
        <div className="div">
          <img className="rectangle" alt="Rectangle" src={Image3} />
          <div className="frame-2">
            <h3 className="text-wrapper-4">Integration for Business Growth</h3>
            <p className="p">
              Discover how integrating technology can optimize business processes, drive innovation, and achieve
              sustainable growth. Gain insights from industry experts and learn practical strategies to transform your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigatingSuccessMdSm;