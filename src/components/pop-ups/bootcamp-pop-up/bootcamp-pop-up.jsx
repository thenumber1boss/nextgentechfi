import React from "react";
import { Button } from "../../UI/button/button";
import TechFiLogo from "../../../assets/images/tech-fi-3.png";
import PopUpVector from "../../../assets/images/pop-up-vector.svg";
import "./bootcamp-pop-up.css";
import { Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { NavLink } from "react-router-dom";

const PopUpNotification = ({closeModal}) => {
  return (
    <div className="pop-up-notification">
      <div className="div">
        <div className="first-div">
            <img className="tech-fi" alt="Tech fi" src={TechFiLogo} />
            <div className="text-wrapper-3" onClick={closeModal}>X</div>
      </div>
        
        <div className="overlap-group">
          
          <div className="frame-2">
            <div className="group">
              <h2 className="this-isn-t-just">
                <span className="text-wrapper">This Isn’t Just Another Summer </span>
                <span className="span">Bootcamp</span>
                <span className="text-wrapper">—It’s a Launchpad for Your </span>
                <span className="text-wrapper-2">Future</span>
              </h2>
              <p className="p">
                Discover coding, AI, Design(Figma/Canva), smart financial strategies and lots more in a fun, dynamic
                environment. Learn alongside new friends and industry experts. Ready for an adventure?
              </p>
            </div>
            <div className="event-details">
              <div className="date">
              <DateRangeIcon sx={{color: 'var(--accent-colour)'}}></DateRangeIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '18px', 
                                      '@media (max-width: 480px)': { fontSize: '14px', lineHeight: '22px' }}}>
                                      19th August - 7th September.
              </Typography>
              </div>
              <div className="venue">
              <LocationOnIcon sx={{color: 'var(--accent-colour)'}}></LocationOnIcon>
              <Typography variant="h6" sx={{color: 'var(--gray-800)', fontSize: '18px', lineHeight: '26px', 
                                        '@media (max-width: 480px)': { fontSize: '14px', lineHeight: '22px' } }}>
                                          Justice Legbo Kutigi Hall, opposite Niger State Government House Minna.
              </Typography>
              </div>
            </div>
            <div className="frame-3">
             <NavLink to="./summer-bootcamp"  className="nav-link">
              <Button
                  className=" primary-btn"
                  divClassName="primary-btn-txt"
                  state="secondary"
                  text="View event"
                />
            </NavLink> 
            <NavLink to="./register"  className="nav-link">
                <Button
                  className=" button secondary-btn primary-border"
                  divClassName="secondary-btn-txt"
                  state="secondary"
                  text="Register for event"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lower-div">
            <div className="discount-div">
            <img className="vector" alt="Vector" src={PopUpVector} />
            <div className="frame">
            <p className="element-discount-for">
                53% discount <br />
                for early birds!!!
            </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpNotification;