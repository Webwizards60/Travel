import React from "react";
import mainImage from "../images/image 1.png";
import "../styles/login.scss";
import cgLogo from "../images/logo.png";

const login = () => {
  return (
    <div className="login">
      <img src={mainImage} className="mainImage" />
      <div className="imageOverlay"></div>
      <div className="loginInfo">
        <div className="title">
          <img src={cgLogo} className="logo" />
          <div className="title">Welcome to Chattisgarh Tourism</div>
        </div>
        <div className="inputInfo">
          <span className="info">Email-id</span>
          <input type="email" placeholder="ENTER YOUR EMAIL" className="input" />
          <span className="info" >Password</span>
          <input type="password" placeholder="ENTER YOUR PASSWORD" className="input"/>
        </div>
        <div className="login_btn">
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default login;
