import PropTypes from 'prop-types';
import React from 'react';
import './button.css';

export const Button = ({ className, divClassName, state, text, onClick, type, loading }) => {
  return (
    <button
      className={`button ${className} ${state}`}
      onClick={onClick}
      type={type} // Ensure the type prop is passed down
      disabled={loading} // Disable the button when loading
    >
      <div className={divClassName}>{loading ? 'Please wait...' : text}</div>
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
  loading: PropTypes.bool, // Add loading prop type
};

Button.defaultProps = {
  type: 'button', // Default type is 'button' to avoid accidental form submission
  loading: false, // Default loading to false
};
