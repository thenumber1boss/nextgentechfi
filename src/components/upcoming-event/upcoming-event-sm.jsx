import React from "react";
import PropTypes from "prop-types";
import BadgeGroup from "../UI/badge-group/badge-group.jsx";
import { Button } from "../UI/button/button.jsx";
import "./upcoming-event-sm.css"; 
import { NavLink } from "react-router-dom";

const UpcomingEventSm = ({ badge, image, heading, supportingText, button1Text, button2Text }) => {
  return (
    <div className="upcoming-event-sm">
      <div className="frame">
        <div className="frame-2">
          <BadgeGroup
            badge={badge}
            size="md"
          />
          <div className="div-wrapper">
            <h2 className="text-wrapper">{heading}</h2>
          </div>
          <div className="frame-2">
            <p className="p">{supportingText}</p>
          </div>
          
          <div className="actions">
          <NavLink to="/bootcamp" className="nav-link full-width">
            <Button state="secondary" 
            className="secondary-btn-stretch primary-border" 
            divClassName="secondary-btn-txt"
             text={button2Text} />
             </NavLink>
             <NavLink to="/register" className="nav-link full-width">
            <Button state="primary"
             className="primary-btn-stretch"
              divClassName="primary-btn-txt"
               text={button1Text} />
               </NavLink>
          </div>
        </div>
        <img className="event-image" src={image} alt="Event" />
      </div>
    </div>
  );
};

UpcomingEventSm.propTypes = {
  badge: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  supportingText: PropTypes.string.isRequired,
  button1Text: PropTypes.string.isRequired,
  button2Text: PropTypes.string.isRequired,
};

export default UpcomingEventSm;
