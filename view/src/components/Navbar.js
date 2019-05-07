import React, { Component } from "react";
import logo from "../images/book-icon.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
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
              <img className='mainLogo' src={logo} alt="logo alt" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
