import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

// Creating dropdown menu for theme selection
const DropdownMenu = (props) => {
  return (
    <div className={`dropdown ${props.open}`}>
      <span className="dropdown-blue" onClick={() => props.changeTheme("blue")}>
        Blue
      </span>
      <span
        className="dropdown-green"
        onClick={() => props.changeTheme("green")}
      >
        Green
      </span>
    </div>
  );
};

// Creating the header
const Header = (props) => {
  const [openTheme, setOpenTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // Creating the nav items
  const NavItem = (props, link, number, name) => {
    return (
      <li className={`nav-list--item ${props.theme}`}>
        <Link
          to={`${link}`}
          spy={true}
          smooth={true}
          offset={-79}
          duration={500}
          className={`section-link ${props.theme}`}
          onClick={() => setOpenMenu(false)}
        >
          <span className={`nav-item ${props.theme}`}>{number}</span> {name}
        </Link>
      </li>
    );
  };

  const closeDropdown = (e) => {
    if (e.path[0].tagName !== "SPAN") setOpenTheme(false);
  };

  // Adding the evenet listener to body to close the dropdown on body click
  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  });

  return (
    <div className="header-container">
      <div className="header">
        <h5 className="header-logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
            className={`section-link ${props.theme}`}
          >
            IK
          </Link>
        </h5>
        <i className="ph-list menu" onClick={() => setOpenMenu(!openMenu)}></i>
        <nav className="nav-list--container">
          <ul className={`nav-list ${openMenu ? "open" : ""}`}>
            {NavItem(props, "about", "01.", "About")}
            {NavItem(props, "projects", "02.", "Projects")}
            {NavItem(props, "contact", "03.", "Contact")}
            <li
              className="nav-list--item theme"
              onClick={() => setOpenTheme(!openTheme)}
            >
              <span className="theme-title">Color theme</span>
              <DropdownMenu changeTheme={props.changeTheme} open={openTheme} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
