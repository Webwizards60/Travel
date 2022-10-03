import React from "react";
import "../styles/home.scss";
import Bar from "./bar";
import Donut from "./donut";
import Image from '../assets/img/image.jpg'

class home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="head-title">
          <div className="heading">
            <span className="title">Users Monthely Update</span>
            <span className="information">
              Daily visiters viste tourism site per day or month using the
              Tourism.com on this devive in the last month
            </span>
          </div>
          <div className="dropdown">
            <span className="drop">
              <i class="uil uil-angle-down"></i> Month
            </span>
          </div>
        </div>
        <div className="bar_graph">
          <Bar />
        </div>
        <div className="userPlaces">
          <div className="donut_chart">
            <Donut />
          </div>
          <div className="mostVisitingPlace">
            <span className="line">Most Visiting Places</span>
            <div className="cards">
              <div className="card">
                <img src={Image} className="cardImg" />
                <div className="place">
                  <span className="name">Raipur</span>
                  <span className="destination">New Raipur</span>
                </div>
                <div className="nos">
                  <div className="seen">
                    <i class="uil uil-eye eye"></i>
                  </div>
                  <span className="no">345</span>
                </div>
                <div className="takeThere">
                  <i class="uil uil-arrow-from-right arrowRight"></i>
                </div>
              </div>
              <div className="card">
                <img src={Image} className="cardImg" />
                <div className="place">
                  <span className="name">Raipur</span>
                  <span className="destination">New Raipur</span>
                </div>
                <div className="nos">
                  <div className="seen">
                    <i class="uil uil-eye eye"></i>
                  </div>
                  <span className="no">345</span>
                </div>
                <div className="takeThere">
                  <i class="uil uil-arrow-from-right arrowRight"></i>
                </div>
              </div>
              <div className="card">
                <img src={Image} className="cardImg" />
                <div className="place">
                  <span className="name">Raipur</span>
                  <span className="destination">New Raipur</span>
                </div>
                <div className="nos">
                  <div className="seen">
                    <i class="uil uil-eye eye"></i>
                  </div>
                  <span className="no">345</span>
                </div>
                <div className="takeThere">
                  <i class="uil uil-arrow-from-right arrowRight"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
