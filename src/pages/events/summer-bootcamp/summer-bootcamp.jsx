import React, { useState, useEffect } from "react";
import "./summer-bootcamp.css";
import "./summer-bootcamp2.css";
import Footer from "../../../components/footer/footer.jsx";
import ContactUs from "../../../components/contact-us/contactUs";
import Header from "../../../components/Header/header.jsx";
import Line3 from '../../../assets/icons/line-3.svg'

import { Hero,
          HeroSm,
          Aboutthisevent,
          WhatYouWillLearn,
          ImageAndDivider,
          Benefits,
          Partners
        } from "./sections"



















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

{/*
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 5000); // Show the popup after 30 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const closeModal = () => {
    setShowPopUp(false);
  };

  */}


    return (
        <div className="summer-bootcamp">
        <title>Summer-Bootcamp</title>
        <meta name="description" content="Discover coding, AI, Design(Figma/Canva), smart financial
              strategies and lots more in a fun, dynamic environment. Learn
              alongside new friends and industry experts. Ready for an
              adventure?" />
        <meta property="og:title" content="Summer-Bootcamp" />
        <meta property="og:description" content="Discover coding, AI, Design(Figma/Canva), smart financial
              strategies and lots more in a fun, dynamic environment. Learn
              alongside new friends and industry experts. Ready for an
              adventure?" />
        <meta property="og:image" content="https://nextgentechfi.com/nextgen.jpg" />
        <meta property="og:url" content="https://nextgentechfi.com/bootcamp" />

        {/*
          {showPopUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div onClick={closeModal} style={{fontSize: '24px', color: 'white', display: 'flex', justifyContent: 'right', marginBottom: '10px', cursor: 'pointer'}}>X</div>
            <NavLink to="/register" className="nav-link">
            <img alt="pop-up" src={PopUpCard} style={{ width: isSmallScreen ? '100%' : '520px', height: 'auto', borderRadius: '16px'}} />
            </NavLink>
          </div>
        </div>
      )}

      */}

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
            <ContactUs backgroundColorClass="bg-white" />
            < Footer />
          </div>
      );
    };


export default SummerBootcamp;
