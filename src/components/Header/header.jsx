import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../UI/button/button";
import "./header.css";
import logo from "../../assets/images/tech-fi-3.png";
import searchIcon from "../../assets/icons/search.svg";
import cancel from "../../assets/images/iconoir-cancel.svg";
import line from "../../assets/images/line-4.svg";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  // eslint-disable-next-line
  const [isLinkActive, setIsLinkActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };


  return (
    <div className="header">
      <div className="pages">
        <div className="frame">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            <div className="div">Home</div>
          </NavLink>
        </div>
        <div className="frame">
          <NavLink to="/summer-bootcamp" className="nav-link" activeClassName="active">
            <div className="div">Events</div>
          </NavLink>
        </div>
        <div className="frame">
          {/*Login Link set to inactive state when, dashboard is ready, remove conditional render */}
        {isLinkActive ? (
        <NavLink to="/login" className="nav-link" activeClassName="active">
          <div className="div">Login</div>
        </NavLink>
      ) : (
        <div className="div nav-link inactive">Login</div>
      )}
        </div>
      </div>
      <NavLink exact to="/">
        <img className="tech-fi" alt="Tech fi" src={logo} />
      </NavLink>
      <div className="vuesax-linear-search-wrapper">
        <img className="search" alt="searchIcon" src={searchIcon} />
        <input className="searchBar" type="text" />
        <div className="hamburgerIcon-instance" onClick={toggleMenu}>
          <HiMiniBars3BottomLeft size={30} />
        </div>
      </div>

      <NavLink className="nav-link hide" to="/register">
        <Button
          className="primary-btn"
          divClassName="primary-btn-txt"
          state="primary"
          text="Register"
        />
      </NavLink>

      <div className={`mobile-menu ${menuActive ? "active" : ""} `}>
        <div className="div">
          <div className="top-header">
            <img className="tech-fi" src={logo} alt="tech-fi-mobile" />
            <img
              className="iconoir-cancel"
              src={cancel}
              alt="Close"
              onClick={toggleMenu}
            />
          </div>

          <img className="line" src={line} alt="Line" size={20} />
          <div className="frame">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              <div className="text-wrapper">Home</div>
            </NavLink>
            <NavLink to="/summer-bootcamp" className="nav-link" activeClassName="active">
              <div className="text-wrapper">Events</div>
            </NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active">
              <div className="text-wrapper">Login</div>
            </NavLink>

            <NavLink className="nav-link" to="/register">
            <Button
              className="primary-btn-stretch"
              divClassName="primary-btn-txt"
              state="primary"
              text="Register"
            />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
