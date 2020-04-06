import React, { Component } from "react";
import "./heroesPage.css";
import HeroCard from "./heroCard.jsx";

class Field extends Component {
  render() {
    console.log(this.props.heroesCard.filtered.length);
    return (
      <div className="field">
        {this.props.heroesCard.filtered.length == 0
          ? this.props.heroesCardCategory.map((heroCard) => {
              return <HeroCard key={heroCard.id} heroCard={heroCard} />;
            })
          : this.props.heroesCard.filtered.map((heroCard) => {
              return <HeroCard key={heroCard.id} heroCard={heroCard} />;
            })}
      </div>
    );
  }
}

export default Field;
