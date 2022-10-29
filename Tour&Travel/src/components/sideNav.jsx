import React, { useState } from "react";
import "../styles/sidebar.scss";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink className="navItem" to={"/Home"} activeClassName="active">
            <span className="navLink">
              <i class="uil uil-window-grid"></i> Dashboard
            </span>
          </NavLink>
          <NavLink
            className="navItem"
            to={"/Overview"}
            activeClassName="active"
          >
            <span className="navLink">
              <i class="uil uil-database"></i> Data
            </span>
          </NavLink>
          <NavLink
            className="navItem"
            to={"/add-places"}
            activeClassName="active"
          >
            <span className="navLink">
              <i class="uil uil-map-marker-shield"></i> Add Places
            </span>
          </NavLink>
          <NavLink
            className="navItem"
            to={"/add-images"}
            activeClassName="active"
          >
            <span className="navLink">
              <i class="uil uil-image"></i> Image Upload
            </span>
          </NavLink>
          <NavLink
            className="navItem"
            to={"/add-users"}
            activeClassName="active"
          >
            <span className="navLink">
              <i class="uil uil-user"></i> Users
            </span>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default sideNav;
