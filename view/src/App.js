import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

// IMPORT PAGES
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () =>{
    this.setState({
      sideDrawerOpen: false
    })
  }; 

  render() {
    let sideDrawerAndBackDrop = "";

    if (this.state.sideDrawerOpen) {
      sideDrawerAndBackDrop = (
        <>
          <SideDrawer />
          <BackDrop click={this.backdropClickHandler} />
        </>
      );
    }

    return (
      <div style={{ height: "100%" }}>
        {/* <Navbar /> */}
        <Toolbar drawerClickHandler={this.drawerToggleHandler} />
        {sideDrawerAndBackDrop}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
