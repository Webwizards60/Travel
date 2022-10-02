import React from "react";
import "../styles/home.scss";
import Bar from "./bar";
import Donut from "./donut";

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
        <div className="donut_chart">
          <Donut />
        </div>
      </div>
    );
  }
}

export default home;
