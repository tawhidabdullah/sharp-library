import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "../../images/book-icon.png";

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">
            <img className="mainLogo" src={logo} alt="logo alt" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">cars</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
