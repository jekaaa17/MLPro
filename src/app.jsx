import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar.jsx";
import Drawer from "./components/Drawer/drawer.jsx";
import Backdrop from "./components/Backdrop/backdrop.jsx";
import Home from "./components/Page/home.jsx";
import Heroes from "./components/Page/Heroes/heroesPage.jsx";
import Guides from "./components/Page/Guides/guidesPage.jsx";
import RankGuide from "./components/Page/Guides/GuidePage/rankGuide.jsx";
import EmblemGuide from "./components/Page/Guides/GuidePage/emblemGuide.jsx";
import GoldUsageGuide from "./components/Page/Guides/GuidePage/buyHeroesGuide.jsx";
import BestHeroesGuide from "./components/Page/Guides/GuidePage/bestHeroesGuide.jsx";
import { useSelector, useDispatch } from "react-redux";
import { drawerToggleClick, backDropClick } from "./actions/index.jsx";
import "./App.css";
import ScrollToTop from "./components/Home/scrollToTop.jsx";

function App() {
  const drawer = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  let backdrop;
  if (drawer) {
    backdrop = <Backdrop onClick={() => dispatch(backDropClick())} />;
  }
  return (
    <Router>
      <ScrollToTop />
      <div style={{ height: "100%" }}>
        <NavBar onClick={() => dispatch(drawerToggleClick())} />
        <Drawer onShow={drawer} />
        {backdrop}
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/guides" exact component={Guides} />
        <Route path="/guides/rank-guide" component={RankGuide} />
        <Route path="/guides/emblem-guide" component={EmblemGuide} />
        <Route path="/guides/best-heroes-guide" component={BestHeroesGuide} />
        <Route path="/guides/gold-usage-guide" component={GoldUsageGuide} />
      </div>
    </Router>
  );
}

export default App;
