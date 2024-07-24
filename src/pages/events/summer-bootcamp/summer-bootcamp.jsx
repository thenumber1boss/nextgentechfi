import React, { useState, useEffect } from "react";
import "./summer-bootcamp.css";
import "./summer-bootcamp2.css";
import BenefitCard from "../../../components/benefit-card/benefit-card.jsx";
import BenefitSectionData from "../../../components/benefit-card/benefit-section-data.js";
import Footer from "../../../components/footer/footer.jsx";
import ContactUs from "../../../components/contact-us/contact-us.jsx";
import ContactUsSm from "../../../components/contact-us/contact-us-sm.jsx";
import Header from "../../../components/Header/header.jsx";
import GritLogo from "../../../assets/images/grit-logo.png";
import PlanetLogo from "../../../assets/images/planet-logo.png";
import TellerPointLogo from "../../../assets/images/teller-point-logo.svg";
import PopUpCard from "../../../assets/images/popup-card.png";
import Line from "../../../assets/icons/line-2.svg";
import group from "../../../assets/icons/group.png";
import HeroImg from "../../../assets/images/HeroImage.png";
import iconnoir from "../../../assets/icons/iconoir-design-nib-solid.svg";
import materialsymbol from "../../../assets/icons/material-symbols-device-hub.svg";
import money from "../../../assets/icons/tdesign-money.svg";
import skilllevel from "../../../assets/icons/carbon-skill-level.svg";
import vector from "../../../assets/icons/vector.svg";
import { Button } from "../../../components/UI/button/button";
import rectangle13 from '../../../assets/images/rectangle-13.svg'
import rectangle14 from '../../../assets/images/rectangle-14.svg'
import Line3 from '../../../assets/icons/line-3.svg'
import { NavLink } from "react-router-dom";
import syllabus from "./nextgen-summer-bootcamp-syllabus.pdf";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const phoneNumber = "+2348131140937";

//Hero Section
export const Hero = () => {
  return (
    <div className="hero-frame">
        <div className="overlap">
          <div className="hero-image-and-age">
          <h2 className="this-isn-t-just display-none-lg">
              <span className="span">This Isn’t Just Another Summer</span>
              <span className="text-wrapper-2">Bootcamp</span>
              <span className="span">—It’s a Launchpad for Your </span>
              <span className="text-wrapper-3">Future</span>
            </h2>
            <div className="overlap-group">
              <img className="hero-image" src={HeroImg} alt="HeroImage" />
              <div className="group">
                <div className="div-wrapper">
                  <div className="text-wrapper">For ages 15-30</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h2 className="this-isn-t-just2 display-none-sm">
              <span className="span">This Isn’t Just Another Summer </span>
              <span className="text-wrapper-2">Bootcamp</span>
              <span className="span">—It’s a Launchpad for Your </span>
              <span className="text-wrapper-3">Future</span>
            </h2>
            <p className="div">
              Discover coding, AI, Design(Figma/Canva), smart financial
              strategies and lots more in a fun, dynamic environment. Learn
              alongside new friends and industry experts. Ready for an
              adventure?
            </p>
            <div className="event-details">
              <div className="date">
              <DateRangeIcon sx={{color: 'var(--accent-colour)'}}></DateRangeIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '18px'}}>19th August - 7th September.</Typography>
              </div>
              <div className="venue">
              <LocationOnIcon sx={{color: 'var(--accent-colour)'}}></LocationOnIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '18px', lineHeight: '26px', }}>Justice Legbo Kutigi Hall, opposite Niger State Government House Minna.</Typography>
              </div>
            </div>
            <div className="frame">
              <NavLink to="/register" className="nav-link">
              <Button state="primary" 
             className="primary-btn"
             divClassName="primary-btn-txt"
             text="Register"
             />
             </NavLink>
             <a href={`tel:${phoneNumber}`} className="phone-link">
            <Button state="secondary" 
             className="secondary-btn primary-border" 
             divClassName="secondary-btn-txt primary-col-txt" 
             text="Reserve a seat"
            />
            </a>
            </div>
            
            <div className="text-wrapper-4">Limited slots available!!</div>
          </div>
        </div>
        
        <div className="line3-lg-wrapper">
              <img className="line3-lg" alt="Line" src={Line3} />
            </div>
    </div>
  );
};


//Hero Section
export const HeroSm = () => {
  
  return (
    <div className="hero-frame">
        <div className="overlap">
          <div className="hero-text">
            <h2 className="this-isn-t-just2 display-none-sm">
              <span className="span">This Isn’t Just Another Summer </span>
              <span className="text-wrapper-2">Bootcamp</span>
              <span className="span">—It’s a Launchpad for Your </span>
              <span className="text-wrapper-3">Future</span>
            </h2>
            <p className="div">
              Discover coding, AI, Design(Figma/Canva), smart financial
              strategies and lots more in a fun, dynamic environment. Learn
              alongside new friends and industry experts. Ready for an
              adventure?
            </p>

            <div className="event-details">
              <div className="date">
              <DateRangeIcon sx={{color: 'var(--accent-colour)'}}></DateRangeIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '14px'}}>19th August - 7th September.</Typography>
              </div>
              <div className="venue">
              <LocationOnIcon sx={{color: 'var(--accent-colour)'}}></LocationOnIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '14px', lineHeight: '22px', }}>Justice Legbo Kutigi Hall, opposite Niger State Government House Minna.</Typography>
              </div>
            </div>
            
            <div className="frame">
            <NavLink to="/register" className="nav-link full-width">
              <Button state="primary" 
              className="primary-btn-stretch"
              divClassName="primary-btn-txt"
              text="Register"
              />
             </NavLink>
           <a href={`tel:${phoneNumber}`} className="nav-link full-width">
                <Button state="secondary" 
                className="secondary-btn-stretch primary-border" 
                divClassName="secondary-btn-txt primary-col-txt" 
                text="Reserve a seat"
                />
                </a>
            </div>
            <div className="text-wrapper-4">Limited slots available!!</div>
          </div>
          <div className="hero-image-and-age">
            <div className="overlap-group">
              <img className="hero-image" src={HeroImg} alt="HeroImage" />
              <div className="group">
                <div className="div-wrapper">
                  <div className="text-wrapper">For ages 15-30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line3-lg-wrapper">
              <img className="line3-lg" alt="Line" src={Line3} />
            </div>
    </div>
  );
};



// About this event section

export const Aboutthisevent = () => {
  const syllabusFileUrl = syllabus;
  const fileName = "nextgen-bootcamp-syllabus.pdf"; 
  return (
    <div className="about-this-event">
      <div className="group">
        <h2 className="text-wrapper">About this event</h2>
        <img className="line" alt="Line" src={Line} />
      </div>
      <div className="frame">
        <p className="at-the-nextgen-tech">
        At the Nextgen Tech Fi Summer Bootcamp, we’ve designed an exciting and
          comprehensive program just for you. You&#39;ll start with the basics,
          learning how to navigate computers and the internet, and mastering
          essential tools like Microsoft PowerPoint, Excel, and Word.
          <br />
          <br />
          Next, we&#39;ll introduce you to coding
          and design, opening up potential career paths in technology. Our
          sessions on artificial intelligence will help you understand and
          leverage the latest technological advancements to boost your
          productivity.
          <br />
          <br />
          Financial literacy is a key component, equipping you with the knowledge to
          make prudent financial decisions. We’ve incorporated strategic games like
          chess and Monopoly to enhance decision-making and financial understanding.
          
          <a href={syllabusFileUrl} download={fileName} className="nav-link">
            <Button className="btn white-border"
            divClassName="secondary-btn-txt"
              state=""
              text="Download syllabus" />
          </a>
        </p>
      </div>
    </div>
  );
};


export const WhatYouWillLearn = () => {
  const data = {
    data1: [
      {
        id: 1,
        img: `${group}`,
        title: "Coding",
        paragraph:
          "Learn basic concepts and programing languages such as Html, css and JavaScript and their uses.",
      },
      {
        id: 2,
        img: `${iconnoir}`,
        title: "Design tools",
        paragraph:
          "Learn design tools like figma and canva, also learn about design principles and creating intuitive design.",
      },
      {
        id: 3,
        img: `${materialsymbol}`,
        title: "Digital Literacy",
        paragraph:
          "Learn Internet fundamentals, Effective Communication Tools , Social Media, Presentation Skills, and operating systems.",
      },
    ],
    data2: [
      {
        id: 1,
        img: `${vector}`,
        title: "Games",
        paragraph:
          "Learn to play games like chess and monopoly. Chess rules and objectives, Game setup and                    Financial lessons from Monopoly.",
      },
      {
        id: 2,
        img: `${money}`,
        title: "Financial Literacy",
        paragraph:
          "Learn about Financial Tools, using budgeting apps and tools for finances, saving and investments, Setting long-term financial and personal goals",
      },
      {
        id: 3,
        img: `${skilllevel}`,
        title: "Future skills and career",
        paragraph:
          "Explore career options in technology and design. Building personal branding, Networking and professional development tips",
      },
    ],
  };

  const combinedData = [...data.data1, ...data.data2]; // Combine data1 and data2

  return (
    <div className="what-you-will-learn">
      <h2 className="text-wrapper">What you will learn</h2>
      <div className="group">
        <div className="div">
          <div className="frame">
            {combinedData.map((el, index) => {
              const { img, title, paragraph } = el;
              return (
                <SubWhatYouWillLearn
                  key={`${title}-${index}`}
                  image={img}
                  title={title}
                  paragraph={paragraph}
                />
              );
            })}
          </div>
            <div className="reservation-cta">
              <h2 className="reservation-txt">Secure your spot now. Over 70% of seats are booked and paid for. Can't pay immediately? Reserve your seat today to ensure you don't miss out!</h2>
          <div className="div-wrapper">
          <a href={`tel:${phoneNumber}`} className="nav-link">
            <Button
              text="Make reservations"
              state={"secondary"}
              divClassName="neutral-btn-txt"
              className="neutral-btn accent-border"
            />
            </a>
          </div>
          </div>
        </div>
      </div>
      <img className="line3" src={Line3} alt="" />
    </div>
  );
};

const SubWhatYouWillLearn = ({ image, title, paragraph }) => {
  return (
    <div className="div-2">
      <img className="img" src={image} alt={title} />
      <div className="div-3">
        <h3 className="text-wrapper-2">{title}</h3>
        <p className="p">{paragraph}</p>
      </div>
    </div>
  );
};
// image section
export const ImageAndDivider = () => {
  return (
    <div className="image-box">
          <div className="div">
            <img className="rectangle" src={rectangle13} alt="Rectangle 13" />
            <img className="rectangle" src={rectangle14} alt="Rectangle 14" />
          </div>
    </div>
  );
};


//benefits section
export const Benefits = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 480 && window.innerWidth < 780);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 780);
 

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480); // for small screens
      setIsMediumScreen(window.innerWidth >= 480 && window.innerWidth < 780); // for medium screens
      setIsLargeScreen(window.innerWidth >= 780); // for large screens
      console.log("Window width:", window.innerWidth); // Log window width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state correctly

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="benefits">
      <h3 className="section-heading">Lots of Fun and Benefits</h3>
      {isSmallScreen && (
        <div className="benefit-card-frame one-per-row">
          {BenefitSectionData.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              heading={benefit.heading}
              textBody={benefit.textBody}
              clipColor={benefit.clipColor}
            />
          ))}
        </div>
      )}
      {isMediumScreen && (
        <div className="benefit-card-frame two-per-row">
          {BenefitSectionData.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              heading={benefit.heading}
              textBody={benefit.textBody}
              clipColor={benefit.clipColor}
            />
          ))}
        </div>
      )}
      {isLargeScreen && (
        <div className="benefit-card-frame three-per-row">
          {BenefitSectionData.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              heading={benefit.heading}
              textBody={benefit.textBody}
              clipColor={benefit.clipColor}
            />
          ))}
        </div>
      )}
      <div className="frame">  
      <p className="text-wrapper">Register before August 11th to receive an 53% discount!</p> 
      </div>
    </div>
  );
};


//partners section
export const Partners = () => {
  return (
    <div className="partners">
      <div className="grit">
        <div className="grit-media-removebg-wrapper">
          <img
            className="grit-media-removebg"
            alt="Grit Informed media Logo"
            src={GritLogo}
          />
        </div>
        <div className="group-2">
          <div className="text-wrapper">Grit informed media</div>
          <div className="group-6">
            <p className="text-wrapper-3">
              Grit Informed Media is a digital media, technology, and marketing
              agency transforming the SME landscape in Nigeria and Africa. We
              empower small and medium-sized enterprises (SMEs) to thrive in a
              digital-first world with our comprehensive services and products.
            </p>
            <div className="text-wrapper-4">www.gritinformedmedia.tech</div>
          </div>
        </div>
      </div>
      <div className="group-4">
        <div className="text-wrapper-2">Our partners</div>
        <img className="line" alt="Line" src={Line} />
      </div>
      <div className="our-p-artners">
        <div className="group">
          <div className="frame">
            <div className="planrt-logo-removebg-wrapper">
              <img className="img" alt="Frame" src={TellerPointLogo} />
            </div>
            <div className="group-2">
              <div className="text-wrapper">Teller Point Nig Ltd</div>
              <p className="p">
                Teller Point Limited is a cutting-edge microfinance institution
                leveraging innovative technology to offer accessible financial
                services to individuals and small businesses. They provide
                solutions such as bill payments, micro loans, target savings,
                financial consulting, business digitization, and financial
                advisory services.
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="planrt-logo-removebg-wrapper">
              <img
                className="planrt-logo-removebg"
                alt="Planrt logo removebg"
                src={PlanetLogo}
              />
            </div>
            <div className="group-2">
              <div className="text-wrapper">Planet E ICT solutions</div>
              <p className="p">
                A multi-solutions tech company that majors in software
                solutions, hardware procurement and installations, IT
                certification training and examinations with over 10-years of
                active consistent client satisfaction and service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


  const SummerBootcamp = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480); 
      setIsMediumScreen(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); // Listen to window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 5000); // Show the popup after 30 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const closeModal = () => {
    setShowPopUp(false);
  };


    return (
        <div className="summer-bootcamp">
          {showPopUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div onClick={closeModal} style={{fontSize: '24px', color: 'white', display: 'flex', justifyContent: 'right', marginBottom: '10px', cursor: 'pointer'}}>X</div>
            <NavLink to="/register" className="nav-link">
            <img alt="pop-up" src={PopUpCard} style={{ width: isSmallScreen ? '95%' : '520px', height: 'auto', borderRadius: '16px'}} />
            </NavLink>
          </div>
        </div>
      )}
            < Header />
            {isMediumScreen ? (
                <HeroSm />
            ) : (
                <Hero />
            )}
            <Aboutthisevent />
            <div className="line3-sm-wrapper">
              <img className="line3-sm" alt="Line" src={Line3} />
            </div>
            <WhatYouWillLearn />
            <ImageAndDivider />
            <Benefits />
            <Partners />
            {isSmallScreen ? (
                <ContactUsSm 
                backgroundColorClass="bg-white" 
                />
            ) : (
                <ContactUs 
                backgroundColorClass="bg-white" 
                />
            )}
            < Footer />
        </div>
    )
}

export default SummerBootcamp;
