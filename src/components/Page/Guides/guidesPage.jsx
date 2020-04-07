import React, { Component } from "react";
import AllGuides from "../../Home/Guides/allGuides.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getAllGuides } from "../../../actions/index.jsx";

function GuidesPage() {
  const guides = useSelector((state) => state.guides);
  const dispatch = useDispatch();
  dispatch(getAllGuides());

  return (
    <div>
      <div id="Guides">
        <AllGuides guides={guides} />
      </div>
    </div>
  );
}

export default GuidesPage;
