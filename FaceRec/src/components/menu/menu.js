import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styles from './menu.css';


class Menu extends Component {
  render() {
    return (
      
      <aside className="main-sidebar  " style={{height: 'auto'  , position: "fixed"}} >
        <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        {/* sidebar items */}
        <li className="active">
          <Link to="/home">
            <i className="fa fa-home"></i> <span>Home</span>
          </Link>
        </li>

         {/* sidebar items */}
        <li className="active">
        <Link to="/history"  >
            <i className="fa fa-clock-o"></i> <span>History</span>
          </Link>
        </li>

        {/* sidebar items */}
        <li className="active">
        <Link to="/employee">
            <i className="fa fa-users"></i> <span>Employee search</span>
          </Link>
        </li>


        </ul>
        {/* /.sidebar */}
      </aside>

      




      
    );
  }
}

export default Menu;
