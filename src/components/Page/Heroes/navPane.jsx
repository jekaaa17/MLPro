import * as React from "react";
import { NavLink } from "react-router-dom";
import "./heroesPage.css";

const NavPane = (props) => {
  return (
    <nav className="hero-nav-bar">
      <ul className="hero-nav-links">
        <NavLink
          exact
          to={(`${props.match.url}/all`, `${props.match.url}/`)}
          activeClassName="selected"
        >
          <li>All</li>
        </NavLink>
        <NavLink
          exact
          to={`${props.match.url}/tank`}
          activeClassName="selected"
        >
          <li>tank</li>
        </NavLink>
        <NavLink to={`${props.match.url}/fighter`} activeClassName="selected">
          <li>fighter</li>
        </NavLink>
        <NavLink to={`${props.match.url}/assasin`} activeClassName="selected">
          <li>assasin</li>
        </NavLink>
        <NavLink to={`${props.match.url}/marksman`} activeClassName="selected">
          <li>marksman</li>
        </NavLink>
        <NavLink to={`${props.match.url}/mage`} activeClassName="selected">
          <li>mage</li>
        </NavLink>
        <NavLink
          to={`${props.match.url}/support`}
          activeClassName="selected"
          className="last-cell"
        >
          <li>support</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavPane;
