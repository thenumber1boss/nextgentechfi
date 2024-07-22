import React from "react";
import "./navigating-success.css";
import FeaturedIcon from "../UI/featured-icon/featured-icon.jsx";
import NavigatingSuccessImage from "../../assets/images/navigating-success-image.png";
import StatusUp from "../../assets/icons/status-up.svg";
import Coin from "../../assets/icons/coin.svg";
import Chart from "../../assets/icons/chart.svg";

const NavigatingSuccess = () => {
  return (
    <div className="navigating-success">
      <div className="container">
        <p className="heading">Navigating Success with Tech and Financial Expertise</p>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div className="feature-text">
            <FeaturedIcon
              className="featured-icon-instance"
              color="brand"
              size="lg"
              theme="light-outline"
              icon={StatusUp}
            />
            <div className="content-2">
              <div className="text-and-supporting">
                <div className="text">Upskilling in Technology</div>
                <p className="supporting-text">
                  Master essential tech skills to stay relevant in today&#39;s competitive job market. Whether
                  you&#39;re starting your career or advancing in a tech-driven role, our programs ensure you have the
                  expertise employers seek.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <FeaturedIcon
              className="design-component-instance-node"
              color="brand"
              size="lg"
              theme="light-outline"
              icon={Coin}
            />
            <div className="content-2">
              <div className="text-and-supporting">
                <div className="text-wrapper">Financial Management Mastery</div>
                <p className="supporting-text">
                  Learn the art of financial management to effectively handle the rewards of technology investments. Our
                  courses empower you to maximize earnings, manage finances wisely, and achieve long-term financial
                  security.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <FeaturedIcon
              className="featured-icon-2"
              color="brand"
              size="lg"
              theme="light-outline"
              icon={Chart}
            />
            <div className="content-2">
              <div className="text-and-supporting">
                <div className="text-2">Integration for Business Growth</div>
                <p className="supporting-text">
                  Discover how integrating technology can optimize business processes, drive innovation, and achieve
                  sustainable growth. Gain insights from industry experts and learn practical strategies to transform
                  your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-3">
          <img src={NavigatingSuccessImage} alt="Navigating Success" />
        </div>
      </div>
    </div>
  );
};

export default NavigatingSuccess;