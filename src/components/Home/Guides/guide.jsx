import React, { Component, useState } from "react";
import "./guide.css";
import { NavLink } from "react-router-dom";

function Guide(props) {
  return (
    <div className="guide-container">
      <NavLink to={"/guides/" + props.guide.wallpaper}>
        <div className="guide">
          <div className="guide-font">
            <img src={"../assets/" + props.guide.wallpaper + ".png"} />
            <h1>{props.guide.name}</h1>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Guide;
