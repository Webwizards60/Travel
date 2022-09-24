import React from "react";
import "../styles/overview.scss";
import profile from "../images/profile.jpg";

const overview = () => {
  return (
    <div>
      <div className="main">
        <div className="adminInfo">
          <span className="about">Admin Information</span>
          <p>Here you can edit your Information</p>
        </div>
        <div className="edit">
          <div className="Section">
            <span>Name</span>
            <input type="text" placeholder="Your Name" className="input" />
          </div>
          <div className="Section">
            <span>Emain-Address</span>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="input"
            />
          </div>
          <div className="Section">
            <span>Contact</span>
            <input
              type="tel"
              placeholder="xxx-xxx-xxxx"
              className="input"
              required
            />
          </div>
          <div className="Section">
            <span>Address</span>
            <input type="text" placeholder="Your Address" className="input" />
          </div>
          <div className="Section">
            <span>Country</span>
            <input type="text" placeholder="Your Country" className="input" />
          </div>
          <div className="Section">
            <span>Role</span>
            <input type="text" placeholder="Your Role" className="input" />
          </div>
          <div className="submitBtn">
            <span>SUBMIT</span>
          </div>
        </div>
        <div className="info">
          <img src={profile} />
          <span className="name">User Name</span>
          <div className="infoSec">
            <span>
              <i class="uil uil-at" />
              johndoe@gmail.com
            </span>
            <span>
              <i class="uil uil-phone" />
              963-032-6630
            </span>
            <span>
              <i class="uil uil-map-marker" />
              OPJU Raigarh, Chattisgarh
            </span>
            <span>
              <i class="uil uil-briefcase-alt" />
              Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default overview;
