//badgeGroup component which takes either of size lg or md as prop
import PropTypes from 'prop-types';
import React from 'react';
import './badge-group.css';
import ArrowRight from "../../../assets/icons/arrow-right.svg"

const BadgeGroup = ({ size }) => {
  return (
    <div className={`badge-group ${size}`}>
      <div className="badge">
        <div className="text">Special Event!</div>
      </div>
      <div className="content">
        <div className="message">3-Weeks Summer Bootcamp</div>
        <img className="arrow-right" alt="Arrow right" src={ArrowRight} />
      </div>
    </div>
  );
};

BadgeGroup.propTypes = {
  size: PropTypes.oneOf(["lg", "md"]).isRequired,
};

export default BadgeGroup;
