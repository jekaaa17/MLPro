import React, { Component } from "react";
import "./card.css";
import "../../../App.css";

const Card = (props) => (
  <a href={"#" + props.card.ref}>
    <div className="container">
      <img src={"./assets/" + props.card.wallpaper + "Wallpaper.png"} />
      <div className="text">
        <p className="span1">{props.card.name}</p>
        <p className="span2">{props.card.description}</p>
      </div>
    </div>
  </a>
);
export default Card;
