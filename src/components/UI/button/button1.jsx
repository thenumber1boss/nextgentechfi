// Create a Button component that accepts props
// Can be used in different components
// Can take more props as needed
// Has basic default styling in ./button.scss 
// and can be styled as needed using the inline style prop 
// and className prop defined in the parent component
import PropTypes from 'prop-types';
import React from 'react';
import './button1.css';
import { Link } from 'react-router-dom';
import { scrollToAnchor } from '../../../utility'; // Import the utility

export const Button = ({ 
  className,
  divClassName,
  style, 
  state, 
  text, 
  onClick, 
  type,
  link, 
  linkClassName,
  anchorLink,
  loading, 
  iconSrc, 
  iconClassName }) => {
  
  // Handle anchor link click
  const handleAnchorClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    scrollToAnchor(anchorLink); // Call the scrollToAnchor utility
  };

  // Ensure that both `link` and `anchorLink` are not passed at the same time
  if (link && anchorLink) {
    console.error("Button component can only accept one of 'link' or 'anchorLink' at a time.");
    return null; // Prevent rendering if both are provided
  }

  const buttonContent = (
    <button
      className={`button ${className} ${state}`}
      style={style}
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {iconSrc && typeof iconSrc === 'string' && <img src={iconSrc} alt="icon" className={iconClassName} />}
      {iconSrc && typeof iconSrc !== 'string' && React.cloneElement(iconSrc, { className: iconClassName })}
      <div className={divClassName}>{loading ? 'Please wait...' : text}</div>
    </button>
  );

  // Render Link if a `link` is provided
  if (link) {
    return <Link to={link} className={`anchor-link ${linkClassName}`}>{buttonContent}</Link>;
  }

  // Render button that scrolls to anchor if `anchorLink` is provided
  if (anchorLink) {
    return (
      <div className='anchorStyles'>
      <a href={anchorLink} onClick={handleAnchorClick}>
        {buttonContent}
      </a>
      </div>
    );
  }

  // Render a regular button if neither link nor anchorLink is provided
  return buttonContent;
};

Button.propTypes = {
  className: PropTypes.string,
  divClassName: PropTypes.string,
  state: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  link: PropTypes.string,
  anchorLink: PropTypes.string, 
  loading: PropTypes.bool,
  iconSrc: PropTypes.string,
  iconClassName: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  loading: false,
};
