import React, { useState } from "react";
import "../styles/sidebar.scss";
import { Link } from "react-router-dom";

const sideNav = () => {
  const [button, setButton] = useState(false);
    const buttonToggleHandler = () => {
      setButton((p) => !p);
    };
  return (
    <header className="sideBar">
      <span className="title">CG Tourism</span>
      <div className="nav-list">
        <ul className="nav">
          <li className="navItem">
            <Link className="navLink" to={"/"}>
              <i class="uil uil-window-grid"></i> Dashboard
            </Link>
          </li>
          <li className="navItem">
            <a className="navLink">
              <i class="uil uil-database"></i> Data
            </a>
          </li>
          <li className="navItem">
            <Link className="navLink" to={"/add-places"}>
              <i class="uil uil-map-marker-shield"></i> Add Places
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to={"/add-images"}>
              <i class="uil uil-image"></i> Image Upload
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to={"/add-users"}>
              <i class="uil uil-user"></i> Users
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default sideNav;
