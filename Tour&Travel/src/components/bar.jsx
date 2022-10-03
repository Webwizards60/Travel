import React from "react";
import Chart from "react-apexcharts";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        fill: {
          colors: "#0AA1DD",
        },
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Januray",
            "February",
            "March",
            "April",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
      },
      series: [
        {
          name: "No. of Users",
          data: [
            2500, 7500, 8500, 1525, 6500, 7785, 1525, 7580, 2500, 9500, 1500,
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="1090"
          height="300"
        />
      </div>
    );
  }
}

export default Bar;
