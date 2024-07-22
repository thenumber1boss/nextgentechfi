import React from "react";
import "./explore-events-card.css";

//explore more reusable component. 
//Takes heading, body of text and image as props.

const ExploreEventsCard = ({ heading, supportingText, image }) => {
  return (
    <div className="explore-events-card">
      <img className="image" alt={`Nextgen ${heading} event`} src={image} />
      <div className="frame">
        <div className="content">
          <div className="div">
            <div className="div">
              <div className="heading">{heading}</div>
              <p className="supporting-text">
                {supportingText}
              </p>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">Learn more</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEventsCard;
