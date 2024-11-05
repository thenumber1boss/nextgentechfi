import React, { useState, useEffect } from "react";

import "./landing-page.css";
import Footer from "../../components/footer/footer.jsx";
import ContactUs from "../../components/contact-us/contactUs.jsx";
import Header from "../../components/Header/header.jsx";
import { HeroNextGen,
        OurCommitment,
        ExploreEventsSection,
        NavigatingSuccess,
        NavigatingSuccessMdSm
        } from "./sections";
        import UpcomingEvent from "../../components/upcoming-event/upcoming-event.jsx";
        import UpcomingEventSm from "../../components/upcoming-event/upcoming-event-sm.jsx";
import SummerBootcampImage from "../../assets/images/summer-bootcamp-image.png";
import PopUpNotification from "../../components/pop-ups/bootcamp-pop-up/bootcamp-pop-up.jsx";



const LandingPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480); // for small screens
      setIsMediumScreen(window.innerWidth < 780); // for medium screens
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize); // Listen to window resize events

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


  /* defined const passed as props to upcoming event component */

  const badge = "leading";
  const heading =
    "This Isn’t Just Another Summer Bootcamp—It’s a Launchpad for Your Future";
  const supportingText =
    "Discover coding, AI, Design(Figma/Canva), smart financial strategies and lots more in a fun, dynamic environment. Learn alongside new friends and industry experts. Ready for an adventure?";
  const button1Text = "Register";
  const button2Text = "Learn More";
  const image = SummerBootcampImage;

  return (
    <div className="landing-page">
      {/* // PopUpNotification component commented out for now
      {showPopUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PopUpNotification closeModal={closeModal} />
          </div>
        </div>
      )}
      */} 
      
      <Header />
      <HeroNextGen />
      <OurCommitment />

      {/* Render either NavigatingSuccessSm or NavigatingSuccess component based on screen size.
       breakpoint = 780px */}

      {isMediumScreen ? <NavigatingSuccessMdSm /> : <NavigatingSuccess />}

      {/* Render either UpcomingEventSm or UpcomingEvent component based on screen size.
       breakpoint = 480px */}
      {isSmallScreen ? (
        <UpcomingEventSm
          badge={badge}
          image={image}
          heading={heading}
          supportingText={supportingText}
          button1Text={button1Text}
          button2Text={button2Text}
        />
      ) : (
        <UpcomingEvent
          badge={badge}
          image={image}
          heading={heading}
          supportingText={supportingText}
          button1Text={button1Text}
          button2Text={button2Text}
        />
      )}
      <ExploreEventsSection />
      
        <ContactUs backgroundColorClass="bg-light-blue" />
    

      <Footer />
    </div>
  );
};

export default LandingPage;
