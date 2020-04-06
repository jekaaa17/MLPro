import * as React from "react";
import "./drawer.css";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  render() {
    let drawerClasses = "drawer";
    if (this.props.onShow) {
      drawerClasses = "drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <NavLink to="/home" activeClassName="current">
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
    );
  }
}

export default Drawer;
