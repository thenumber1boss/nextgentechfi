import PropTypes from 'prop-types';
import React from 'react';
import './button.css';

export const Button = ({ className, divClassName, state, text, onClick, type }) => {
  return (
    <button
      className={`button ${className} ${state}`}
      onClick={onClick}
      type={type} // Ensure the type prop is passed down
    >
      <div className={divClassName}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  divClassName: PropTypes.string,
  state: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Specify valid button types
};

Button.defaultProps = {
  type: 'button', // Default type is 'button' to avoid accidental form submission
};
