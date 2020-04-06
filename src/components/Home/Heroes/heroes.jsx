import React, { Component } from "react";
import "./heroes.css";
import { NavLink } from "react-router-dom";

class Heroes extends Component {
  state = {};
  render() {
    return (
      <div className="intro-heroes">
        <div className="flex-box">
          <div className="top-arrow">
            <a href={"#cardlist"} style={{ color: "black" }}>
              &#8679;
            </a>
          </div>
        </div>
        <div className="intro-heroes-container">
          <div className="left-column">
            <h1 className="intro-heroes-title">Hero Guides.</h1>
            <div className="heroes-explanation">
              Choosing hero that suits your gameplay is important. Even more
              important is in-game element that improve the hero power and your
              gameplay. Our guide provides you with build of items, emblem, and
              spell for all heroes.
            </div>
            <NavLink to="/heroes">
              <button>View Heroes</button>
            </NavLink>
          </div>
          <div className="hero-guide">
            <img src={"./assets/hero-guide.png"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Heroes;
