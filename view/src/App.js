import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthorizationToken from "./utilities/setAuthorizationToken";

// IMPORT REDUX STORE
import store from "./store";
import { setCurrentUser } from "./actions/authAction";

// AUTH COMPONENTS
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// import private route
import PrivateRoute from "./components/commonFeilds/privateRoute";

// import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

// IMPORT DASHBOARD
import Dashboard from "./components/Dashboard/Dashboard";

// import CSS
import "./App.css";
// IMPORT PAGES
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

// CHECK FOR TOKEN
if (localStorage.jwttoken) {
  // set auth token to header Authorization
  setAuthorizationToken(localStorage.jwttoken);
  // decode token and get user info and expression
  const decoded = jwt_decode(localStorage.jwttoken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded)); // fired the action and set the user into state

  /////////// MAKE LOGOUT THE USER BASED on expired  tIme
}

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

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    let sideDrawerAndBackDrop = "";

    if (this.state.sideDrawerOpen) {
      sideDrawerAndBackDrop = (
        <>
          <SideDrawer show={this.state.sideDrawerOpen} />
          <BackDrop click={this.backdropClickHandler} />
        </>
      );
    }

    return (
      <Provider store={store}>
        <div style={{ height: "100%" }}>
          {/* <Navbar /> */}
          <Toolbar drawerClickHandler={this.drawerToggleHandler} />
          {sideDrawerAndBackDrop}
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route exact path="/rooms/:slug" component={SingleRoom} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
