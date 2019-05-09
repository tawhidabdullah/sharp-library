import React, { Component } from "react";
import logo from "../images/book-icon.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
    isInUserDropDownClick: false
  };

  toggleUserDropDown = () => {
    let isInUserDropDownClick = this.state.isInUserDropDownClick;
    this.setState({
      isInUserDropDownClick: !isInUserDropDownClick
    });
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="mainLogo" src={logo} alt="logo alt" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
            
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Books</Link>
            </li>
            <li>
              <div className="User-area" onClick={this.toggleUserDropDown}>
                <div className="User-avtar">
                  <img src="http://f1s.000webhostapp.com/images/avatar/avatar5.png" />
                </div>
                <ul
                  className={
                    this.state.isInUserDropDownClick
                      ? "User-Dropdown U-open"
                      : "User-Dropdown"
                  }
                >
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">Notifications</a>
                  </li>

                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
