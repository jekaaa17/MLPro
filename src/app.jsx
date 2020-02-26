import React, { Component } from "react";
import HeroesTierList from "./components/Main/heroesTierList.jsx";
import NavBar from "./components/NavBar/navbar.jsx";
import Drawer from "./components/Drawer/drawer.jsx";
import Backdrop from "./components/Backdrop/backdrop.jsx";
import "./App.css";

class App extends Component {
  state = {
    drawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.drawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar onClick={this.drawerToggleClickHandler} />
        <Drawer onShow={this.state.drawerOpen} />
        {backdrop}
        <main>
          <HeroesTierList />
        </main>
      </div>
    );
  }
}

export default App;
