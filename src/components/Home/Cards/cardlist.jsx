import React from "react";
import "./cardlist.css";
import Card from "./card.jsx";

const CardList = props => {
  return (
    <div className="cardlist-layout">
      <div className="cardlist">
        {props.cardlist.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
