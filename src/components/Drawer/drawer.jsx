import * as React from "react";
import "./drawer.css";
import { Component } from "react";

class Drawer extends Component {
  render() {
    let drawerClasses = "drawer";
    if (this.props.onShow) {
      drawerClasses = "drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Heroes</a>
          </li>
          <li>
            <a href="/">Items</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Drawer;
