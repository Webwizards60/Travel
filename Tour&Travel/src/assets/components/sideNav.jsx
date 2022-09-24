import React, { useState } from "react";
import "../styles/sidebar.scss";
import { Link } from "react-router-dom";

const sideNav = () => {
  const [state, setState] = useState(false);
  return (
    <header className="sideBar">
      <span className="title">CG Tourism</span>
      <div className="nav-list">
        <ul className="nav">
          <li className="navItem">
            <Link className="navLink" to={"/overview"}>
              <i class="uil uil-window-grid"></i> Dashboard
            </Link>
          </li>
          <li className="navItem">
            <a className="navLink">
              <i class="uil uil-database"></i> Data
            </a>
          </li>
          <li className="navItem">
            <a className="navLink">
              <i class="uil uil-map-marker-shield"></i> Add Places
            </a>
          </li>
          <li className="navItem">
            <Link
              className="navLink"
              to={"/add-images"}
            >
              <i class="uil uil-image"></i> Image Upload
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default sideNav;
