import * as React from "react";
import { Component } from "react";
import "./drawerToggleButton.css";

class DrawerToggleButton extends Component {
  render() {
    return (
      <button className="burger" onClick={this.props.onClick}>
        <div className="burger_line" />
        <div className="burger_line" />
        <div className="burger_line" />
      </button>
    );
  }
}

export default DrawerToggleButton;
