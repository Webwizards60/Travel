import React from "react";
import profile from "../assets/img/profile.jpg";
import "../styles/topNav.scss";
import { Link } from "react-router-dom";

const topNav = () => {
  return (
    <div className="topNav">
      <Link to={"/"}>
        <i class="uil uil-arrow-left"></i>
      </Link>
      <Link className="imgSec" to={"/home"}>
        <img src={profile} />
        <div className="imgInfo">
          <span>USER NAME</span>
          <span>user@gmail.com</span>
        </div>
      </Link>
    </div>
  );
};

export default topNav;
