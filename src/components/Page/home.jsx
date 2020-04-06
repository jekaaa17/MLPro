import React from "react";
import HeroesTierList from "../Home/TierList/heroesTierList.jsx";
import CardList from "../Home/Cards/cardlist.jsx";
import Guides from "../home/Guides/guides.jsx";
import Intro from "../Home/introduction/intro.jsx";
import Heroes from "../Home/Heroes/heroes.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getList, getGuides } from "../../actions/index.jsx";
import "../../App.css";

function Home() {
  const cardlist = useSelector((state) => state.cardlist);
  const guides = useSelector((state) => state.guides);
  const dispatch = useDispatch();
  dispatch(getList());
  dispatch(getGuides());

  return (
    <div className="home">
      <Intro />
      <div id="cardlist">
        <CardList cardlist={cardlist} />
      </div>
      <div id="HeroesTierList">
        <HeroesTierList />
      </div>
      <div id="Heroes">
        <Heroes />
      </div>
      <div id="Guides">
        <Guides guides={guides} />
      </div>
    </div>
  );
}

export default Home;
