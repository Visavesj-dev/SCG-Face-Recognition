import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.css";

class Menu extends Component {
  render() {
    return (
      <aside
        className="main-sidebar  "
        style={{ height: "auto", position: "fixed" }}
      >
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          {/* sidebar items */}
          <li className="active">
            <Link to="/home">
              <i className="fa fa-desktop"></i> <span>Face Station</span>
            </Link>
          </li>

          {/* sidebar items */}
          <li className="active">
            <Link to="/cctv">
              <i className="fa fa-camera"></i> <span>Face CCTV</span>
            </Link>
          </li>

          {/* sidebar items */}
          <li className="active">
            <Link to="/history">
              <i className="fa  fa-calendar-check-o"></i> <span>History</span>
            </Link>
          </li>
        </ul>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
