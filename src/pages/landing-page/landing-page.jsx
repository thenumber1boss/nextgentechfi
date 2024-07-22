import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./landing-page.css";
import Footer from "../../components/footer/footer.jsx";
import ContactUs from "../../components/contact-us/contact-us.jsx";
import ContactUsSm from "../../components/contact-us/contact-us-sm.jsx";
import Header from "../../components/Header/header.jsx";
import UpcomingEvent from "../../components/upcoming-event/upcoming-event.jsx";
import UpcomingEventSm from "../../components/upcoming-event/upcoming-event-sm.jsx";
import { Button } from "../../components/UI/button/button.jsx";
import ExploreEventsCard from "../../components/explore-events-card/explore-events-card.jsx";
import EventImage1 from "../../assets/images/EventImage1.png";
import EventImage2 from "../../assets/images/EventImage2.png";
import EventImage3 from "../../assets/images/EventImage3.png";
import SummerBootcampImage from "../../assets/images/summer-bootcamp-image.png";
import OurCommitmentImage from "../../assets/images/our-commitment-image.png";
import NavigatingSuccess from "../../components/navigating-success/navigating-success.jsx";
import NavigatingSuccessMdSm from "../../components/navigating-success/navigating-success-md-sm.jsx";
import HeroNextGenImage from "../../assets/images/landing-page-hero-image.png";
import PopUpNotification from "../../components/pop-ups/bootcamp-pop-up/bootcamp-pop-up.jsx";


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
            <NavLink to="/summer-bootcamp" className="nav-link">
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
      {showPopUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PopUpNotification closeModal={closeModal} />
          </div>
        </div>
      )}
      <Header />
      <HeroNextGen />
      <OurCommitment />

      {/* Render either NatSm or UpcomingEvent component based on screen size.
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
      {isSmallScreen ? (
        <ContactUsSm backgroundColorClass="bg-light-blue" />
      ) : (
        <ContactUs backgroundColorClass="bg-light-blue" />
      )}

      <Footer />
    </div>
  );
};

export default LandingPage;
