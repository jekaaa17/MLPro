import * as React from "react";
import DrawerToggleButton from "../Drawer/drawerToggleButton.jsx";
import "./navbar.css";

const NavBar = props => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="drawer_button">
          <DrawerToggleButton onClick={props.onClick} />
        </div>
        <div className="logo">
          <h4>The Nav</h4>
        </div>
        <div className="space"></div>
        <ul className="nav-links">
          <li>
            <a href="$">Home</a>
          </li>
          <li>
            <a href="$">About</a>
          </li>
          <li>
            <a href="$">Heroes</a>
          </li>
          <li>
            <a href="$">Items</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
