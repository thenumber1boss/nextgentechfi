import React from "react";
import "./benefit-card.css";

const BenefitCard = ({ heading, textBody, clipColor }) => {
  return (
    <div className="benefit-card" >
      <div className="clip" style={{ backgroundColor: clipColor }} />
      <div className="div">
        <h2 className="heading">{heading}</h2>
        <p className="text-body">
          {textBody}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;