import * as React from "react";
import DrawerToggleButton from "../Drawer/drawerToggleButton.jsx";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = (props) => {
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
          <NavLink exact to={("/home", "/")} activeClassName="current">
            <li>Home</li>
          </NavLink>
          <NavLink to="/heroes" activeClassName="current">
            <li>Heroes</li>
          </NavLink>
          <NavLink to="/guides" activeClassName="current">
            <li>Guides</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
