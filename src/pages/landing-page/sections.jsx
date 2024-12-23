import React, { useState, useEffect } from "react";
import "./landing-page.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from "../../components/UI/button/button1.jsx";
import ExploreEventsCard from "../../components/explore-events-card/explore-events-card.jsx";
import EventImage1 from "../../assets/images/EventImage1.png";
import EventImage2 from "../../assets/images/EventImage2.png";
import EventImage3 from "../../assets/images/EventImage3.png";
import FeaturedIcon from "../../components/UI/featured-icon/featured-icon.jsx";
import NavigatingSuccessImage from "../../assets/images/navigating-success-image.png";
import StatusUp from "../../assets/icons/status-up.svg";
import Coin from "../../assets/icons/coin.svg";
import Chart from "../../assets/icons/chart.svg";
import Image1 from "../../assets/images/navigating-success-image-md-sm1.png";
import Image2 from "../../assets/images/navigating-success-image-md-sm2.png";
import Image3 from "../../assets/images/navigating-success-image-md-sm3.png";

import OurCommitmentImage from "../../assets/images/our-commitment-image.png";
import HeroNextGenImage from "../../assets/images/landing-page-hero-image.png";

export const HeroNextGen = () => {
    return (
      <div className="hero-next-gen">
        <div className="hero-wrapper">
          <div className="content">
            <div className="heading-and-content">
              <h2 className="heading large-screen">
                Discover The Path To Your Success!
              </h2>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper">
                    Join our immersive training programs to master the latest in
                    technology and financial management. <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper">
                    Our hands-on events, interactive webinars, and expert-led
                    workshops are designed to equip you with the skills needed to
                    excel in the digital economy and make smart financial
                    decisions.
                  </span>
                </p>
              </div>
            </div>
            <div className="frame">
              <NavLink to="/bootcamp" className="nav-link">
              <Button state="secondary" 
               text="View our Events" 
               className="secondary-btn" 
               divClassName="secondary-btn-txt" 
               />
               </NavLink>
               <Link smooth to="/#ContactUs" className="nav-link">
              <Button state="primary"
               className="primary-btn"
               divClassName="primary-btn-txt"
               text="Contact Us"
              />
              </Link>
            </div>
          </div>
          <div className="heading-and-image">
            <h2 className="heading small-screen">
              Discover The Path To Your Success!
            </h2>
            <div className="image">
              <img
                src={HeroNextGenImage}
                alt="discover the path to your success"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };



  const features = [
    {
      icon: StatusUp,
      image: Image1,
      title: "Upskilling in Technology",
      text: "Master essential tech skills to stay relevant in today's competitive job market. Whether you're starting your career or advancing in a tech-driven role, our programs ensure you have the expertise employers seek.",
      className: "feature-icon-upskilling",
      color: "heading-blue"
    },
    {
      icon: Coin,
      image: Image2,
      title: "Financial Management Mastery",
      text: "Learn the art of financial management to effectively handle the rewards of technology investments. Our courses empower you to maximize earnings, manage finances wisely, and achieve long-term financial security.",
      className: "feature-icon-finance",
      color: "heading-orange"
    },
    {
      icon: Chart,
      image: Image3,
      title: "Integration for Business Growth",
      text: "Discover how integrating technology can optimize business processes, drive innovation, and achieve sustainable growth. Gain insights from industry experts and learn practical strategies to transform your business.",
      className: "feature-icon-growth",
      color: "heading-green"
    }
  ];
  
  export const NavigatingSuccess = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);
  
    useEffect(() => {
      const handleResize = () => setIsLargeScreen(window.innerWidth > 780);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="navigating-success">
        <div className="navigating-success-header">
          <h3 className="heading">Navigating Success with Tech and Financial Expertise</h3>
        </div>
        <div className={`navigating-success-content ${isLargeScreen ? 'large-screen' : 'small-screen'}`}>
          {isLargeScreen ? (
            <>
              <div className="features">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <FeaturedIcon
                      className={feature.className}
                      color="brand"
                      size="lg"
                      theme="light-outline"
                      icon={feature.icon}
                    />
                    <div className="feature-text">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="image">
                <img src={NavigatingSuccessImage} alt="Navigating Success" />
              </div>
            </>
          ) : (
            <div className="features-small">
              {features.map((feature, index) => (
                <div className="feature-item-small" key={index}>
                  <div className="feature-image">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="feature-text-small">
                    <h3 className={`feature-title-small ${feature.color}`} >{feature.title}</h3>
                    <p className="feature-description-small">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  


  // Our Comitment Section

  export const OurCommitment = () => {
    return (
      <div className="our-commitment">
        <div className="frame">
          <div className="text-wrapper">Our Commitment</div>
          <div className="div">
            <img className="rectangle" alt="Rectangle" src={OurCommitmentImage} />
            <p className="p">
              Nextgen Tech Fi Literacy is the dedicated training arm of Grit
              Informed Media, a pioneer in digital media and technology solutions.
              We believe that the combination of technology proficiency and
              financial literacy is the key to sustainable wealth creation and
              financial freedom. By empowering individuals and businesses with
              these essential skills, we aim to foster a future where everyone can
              achieve their fullest potential.
            </p>
          </div>
        </div>
      </div>
    );
  };



  // Explore Events Section
  export const ExploreEventsSection = () => {
    return (
      <div className="explore-events-section">
        <h3 className="heading-text-wrapper">
          Explore Other Events and Programmes
        </h3>
        <div className="frame">
          <ExploreEventsCard
            heading="Specialized Online Training"
            supportingText="Join our one-month online training in Software Development, Product Design, Data Analysis, and 3D
                      Animation. Gain in-demand skills through interactive sessions and real-world projects with expert
                      instructors. Stay tuned for more details!"
            image={EventImage1}
          />
          <ExploreEventsCard
            heading="Webinar: Integrating Tech Tools for SMEs"
            supportingText="Participate in our online workshop on integrating tech tools into the workflows and processes of
                          SMEs. Learn how to boost productivity, enhance efficiency, and scale operations effectively.
                          Don&#39;t miss this opportunity to transform your business!"
            image={EventImage2}
          />
          <ExploreEventsCard
            heading="Nextgen Business Leaders Summit"
            supportingText="Attend our conference designed for business owners to socialize, recognize impactful businesses, 
                          network, and discuss challenges faced by startups and SMEs. Engage in conversations to find solutions for industry
                          bottlenecks and drive growth together."
            image={EventImage3}
          />
        </div>
      </div>
    );
  };


  //