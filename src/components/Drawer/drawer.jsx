import * as React from "react";
import "./drawer.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Drawer extends Component {
  render() {
    let drawerClasses = "drawer";
    if (this.props.onShow) {
      drawerClasses = "drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/heroes-tier-list">
            <li>TierList</li>
          </Link>
          <Link to="/heroes">
            <li>Heroes</li>
          </Link>
          <Link to="/guides">
            <li>Guides</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Drawer;
