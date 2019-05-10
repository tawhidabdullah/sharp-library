import React from "react";
import "./SideDrawer.css";
const SideDrawer = () => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/"> books</a>
        </li>
        <li>
          <a href="/">cars</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
