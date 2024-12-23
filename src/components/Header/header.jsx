import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../UI/button/button1";
import styles from "./header.module.css"; // Import styles as a CSS module
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
    <div className={styles.header}>
      <div className={styles.pages}>
        <div className={styles.frame}>
          <NavLink exact to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
            <div className={styles.div}>Home</div>
          </NavLink>
        </div>
        <div className={styles.frame}>
          <NavLink to="/bootcamp" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
            <div className={styles.div}>Events</div>
          </NavLink>
        </div>
        <div className={styles.frame}>
          {isLinkActive ? (
            <NavLink to="/login" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
              <div className={styles.div}>Login</div>
            </NavLink>
          ) : (
            <div className={`${styles.div} ${styles.navLink} ${styles.inactive}`}>Login</div>
          )}
        </div>
      </div>
      <NavLink exact to="/">
        <img className={styles.techFi} alt="Tech fi" src={logo} />
      </NavLink>
      <div className={styles.searchWrapper}>
        <img className={styles.search} alt="searchIcon" src={searchIcon} />
        <input className={styles.searchBar} type="text" />
        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
          <HiMiniBars3BottomLeft size={30} />
        </div>
      </div>
      <Button
        className="primary-btn"
        divClassName="primary-btn-txt"
        state="primary"
        text="Register"
        link="/register"
        linkClassName={styles.hide}
      />

      <div className={`${styles.mobileMenu} ${menuActive ? styles.active : ""}`}>
        <div className={styles.div}>
          <div className={styles.topHeader}>
            <img className={styles.techFi} src={logo} alt="tech-fi-mobile" />
            <img
              className={styles.iconCancel}
              src={cancel}
              alt="Close"
              onClick={toggleMenu}
            />
          </div>

          <div className={styles.line}></div>
          <div className={styles.frame}>
            <NavLink exact to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
              <div className={styles.textWrapper}>Home</div>
            </NavLink>
            <NavLink to="/summer-bootcamp" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
              <div className={styles.textWrapper}>Events</div>
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
              <div className={styles.textWrapper}>Login</div>
            </NavLink>

            <Button
              className="primary-btn"
              divClassName="primary-btn-txt"
              state="primary"
              text="Register"
              link="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;