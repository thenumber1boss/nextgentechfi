import PropTypes from "prop-types";
import React from "react";
import "./featured-icon.css";

 const FeaturedIcon = ({ size, color, theme, className, icon = "image.svg" }) => {
  return (
    <div className={`featured-icon ${className}`}>
      <img className="icon" alt="icon" src={icon} />
    </div>
  );
};

FeaturedIcon.propTypes = {
  size: PropTypes.oneOf(["lg"]),
  color: PropTypes.oneOf(["brand"]),
  theme: PropTypes.oneOf(["light-outline"]),
  icon: PropTypes.string,
};

export default FeaturedIcon;