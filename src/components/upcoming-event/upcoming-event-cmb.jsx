import React from "react";
import PropTypes from "prop-types";
import BadgeGroup from "../UI/badge-group/badge-group.jsx";
import { Button } from "../UI/button/button1.jsx";
import "./upcoming-event-cmb.css";

const UpcomingEvent = ({ badge, image, heading, supportingText, button1Text, link1, link2, button2Text }) => {
  const isSmallScreen = window.innerWidth <= 480;
  const actionButtons = (   
    <div className="actions">
    <Button state="primary"
     className="primary-btn" 
     text={button1Text}
     divClassName="primary-btn-txt"
     link={link1} />
  
    <Button state="neutral" 
    className="neutral-btn" 
    text={button2Text} 
    divClassName="neutral-btn-txt"
    link={link2}/>
    </div>
);

  return (
    <div className="upcoming-event">
      <div className="frame">
        <BadgeGroup badge={badge} size={isSmallScreen ? "md" : "lg"} />
        {isSmallScreen ? (
          <>
            <h2 className="heading">{heading}</h2>
            <p className="supporting-text">{supportingText}</p>
            {actionButtons}
            <img className="image" src={image} alt="Event" />
          </>
        ) : (
          <div className="image" style={{ backgroundImage: `url(${image})` }}>
            <div className="bottom-panel">
              <h2 className="heading">{heading}</h2>
              <p className="supporting-text">{supportingText}</p>
              {actionButtons}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

UpcomingEvent.propTypes = {
  badge: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  supportingText: PropTypes.string.isRequired,
  button1Text: PropTypes.string.isRequired,
  button2Text: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
};

export default UpcomingEvent;