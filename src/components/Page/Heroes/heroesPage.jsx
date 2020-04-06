import React, { Component } from "react";
import "./heroesPage.css";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import NavPane from "./navPane.jsx";
import All from "./heroCategory/all.jsx";
import Tank from "./heroCategory/tank.jsx";
import Fighter from "./heroCategory/fighter.jsx";
import Assasin from "./heroCategory/assasin.jsx";
import Marksman from "./heroCategory/marksman.jsx";
import Mage from "./heroCategory/mage.jsx";
import Support from "./heroCategory/support.jsx";

const HeroesPage = () => {
  let match = useRouteMatch();
  return (
    <Router>
      <div style={{ height: "100%" }} className="heroes-page">
        <NavPane match={match} />
        <Route path={`${match.path}/`} exact component={All} />
        <Route path={`${match.path}/all`} component={All} />
        <Route path={`${match.path}/tank`} component={Tank} />
        <Route path={`${match.path}/fighter`} component={Fighter} />
        <Route path={`${match.path}/assasin`} component={Assasin} />
        <Route path={`${match.path}/marksman`} component={Marksman} />
        <Route path={`${match.path}/mage`} component={Mage} />
        <Route path={`${match.path}/support`} component={Support} />
      </div>
    </Router>
  );
};

export default HeroesPage;
