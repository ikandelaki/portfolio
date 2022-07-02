import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h5 className="header-logo">IK</h5>
      <nav className="nav-list--container">
        <ul className="nav-list">
          <li className={`nav-list--item ${props.theme}`}>
            <HashLink
              to="#about"
              className={`section-link section-link ${props.theme}`}
            >
              <span className={`nav-item ${props.theme}`}>01.</span> About
            </HashLink>
          </li>
          <li className={`nav-list--item ${props.theme}`}>
            <HashLink
              to="#projects"
              className={`section-link section-link ${props.theme}`}
            >
              <span className={`nav-item ${props.theme}`}>02.</span> Projects
            </HashLink>
          </li>
          <li className={`nav-list--item ${props.theme}`}>
            <HashLink
              to="#"
              className={`section-link section-link ${props.theme}`}
            >
              <span className={`nav-item ${props.theme}`}>03.</span> Contact
            </HashLink>
          </li>
          <li className="nav-list--item theme">Color theme</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
