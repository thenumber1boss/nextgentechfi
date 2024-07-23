import React from "react";
import PropTypes from "prop-types";
import BadgeGroup from "../UI/badge-group/badge-group.jsx";
import { Button } from "../UI/button/button.jsx";
import "./upcoming-event.css";
import { NavLink } from "react-router-dom";

const UpcomingEvent = ({ badge, image, heading, supportingText, button1Text, button2Text }) => {
  return (
    <div className="upcoming-event">
      <div className="frame">
        <BadgeGroup badge={badge} size="lg" />
      </div>
      <div className="featured-article">
        <div className="image" style={{backgroundImage: `url(${image})`}}>
          <div className="bottom-panel">
            <div className="attribution-card">
              <div className="heading-and-text-wrapper">
                <div className="heading-and-text">
                  <div className="heading-and-icon">
                    <h2 className="heading">{heading}</h2>
                  </div>
                  <div className="frame-2">
                    <p className="supporting-text">
                      {supportingText}
                    </p>
                    <div className="frame-3">
                      <NavLink to="/register" className="nav-link">
                      <Button state="primary" 
                      className="primary-btn"
                      divClassName="primary-btn-txt"
                       text={button1Text} />
                       </NavLink>
                       <NavLink to="/bootcamp" className="nav-link">
                      <Button state="secondary"
                      className="neutral-btn"
                      divClassName="neutral-btn-txt"
                      text={button2Text} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
};

export default UpcomingEvent;
