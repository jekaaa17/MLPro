import React, { Component } from "react";
import "./guides.css";
import Guide from "./guide.jsx";
import { NavLink } from "react-router-dom";

const Guides = (props) => {
  return (
    <div className="guides-layout">
      <div className="flex-box">
        <div className="top-arrow">
          <a href={"#cardlist"}>&#8679;</a>
        </div>
      </div>
      <div className="guides-title">
        <h1>Mobile Legends Bang Bang Guides</h1>
      </div>
      <div className="guides">
        <div className="button-layout">
          <NavLink to="/guides">
            <button>All Guides</button>
          </NavLink>
        </div>
        {props.guides.map((guide) => (
          <Guide key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default Guides;
