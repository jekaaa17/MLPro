import cardListReducer from "./card.jsx";
import drawerReducer from "./drawer.jsx";
import allReducer from "./heroes.jsx";
import tankReducer from "./tank.jsx";
import fighterReducer from "./fighter.jsx";
import assasinReducer from "./assasin.jsx";
import mageReducer from "./mage.jsx";
import supportReducer from "./support.jsx";
import marksmanReducer from "./marksman.jsx";
import modalReducer from "./modal.jsx";
import guidesReducer from "./guides.jsx";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cardlist: cardListReducer,
  drawer: drawerReducer,
  heroes: allReducer,
  tank: tankReducer,
  fighter: fighterReducer,
  assasin: assasinReducer,
  marksman: marksmanReducer,
  mage: mageReducer,
  support: supportReducer,
  modal: modalReducer,
  guides: guidesReducer,
});

export default allReducers;
