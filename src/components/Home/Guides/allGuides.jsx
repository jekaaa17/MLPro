import React, { Component } from "react";
import "./guides.css";
import Guide from "./guide.jsx";

const AllGuides = (props) => {
  return (
    <div className="guides-layout">
      <div className="guides-title">
        <h1>Mobile Legends Bang Bang Guides</h1>
      </div>
      <div className="guides">
        {props.guides.map((guide) => (
          <Guide key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default AllGuides;
