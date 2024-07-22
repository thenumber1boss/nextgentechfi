import PropTypes from "prop-types";
import React from "react";
import "./input-fields.css";

export const InputFields = ({ type, className, label = "Label", name, register, error, placeholder }) => {
    return (
      <div className={`input-fields ${className}`}>
        <div className="frame">
          <label className="label" htmlFor={name}>{label}</label>
          <input 
            id={name}
            type={type} 
            name={name}
            className="input" 
            placeholder={placeholder}
            {...register(name)}
          />
          {error && <p className="error-message">{error.message}</p>}
        </div>
      </div>
    );
  };
  
  InputFields.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func.isRequired,
    error: PropTypes.object,
    placeholder: PropTypes.string,
  };
