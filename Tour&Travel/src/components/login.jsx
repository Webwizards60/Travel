import React, { useEffect } from "react";
import { useState } from "react";
import mainImage from "../assets/img/image1.jpg";
import cgLogo from "../assets/img/logo.png";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <span className="Info">Email-id</span>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="Info">Password</span>
          <input
            type="password"
            placeholder="ENTER YOUR PASSWORD"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login_btn">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
