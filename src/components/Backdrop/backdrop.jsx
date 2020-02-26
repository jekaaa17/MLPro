import React, { Component } from "react";
import "./backdrop.css";

class Backdrop extends Component {
  render() {
    return <div onClick={this.props.onClick} className="backdrop" />;
  }
}

export default Backdrop;
