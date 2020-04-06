import React, { Component } from "react";
import SlideView from "../../SlideView/slideView.jsx";
import "./intro.css";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="intro">
        <div className="intro-layout">
          <div className="intro-card">
            <h1 className="intro-title">MLPro.</h1>
            <p className="explanation">
              Ultimate guide for Mobile Legend: Bang bang players get in depth
              information about current meta heroes, guides, build and more.
            </p>
          </div>
          <SlideView />
        </div>
      </div>
    );
  }
}

export default Intro;
