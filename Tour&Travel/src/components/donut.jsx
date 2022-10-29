import React from "react";
import Chart from "react-apexcharts";

class Donut extends React.Component {
  render() {
    return (
      <div>
        <Chart
          type="donut"
          width={300}
          height={300}
          series={[50, 50]}
          options={{
            labels: ["users", "users"],
            tooltip: {
              y: {
                formatter: (val) => {
                  return `${val}%`;
                },
              },
            },
            title: {
              text: "pie chart",
            },
            fill: {
              colors: ["#6281EF", "#00FF73"],
            },
          }}
        />
      </div>
    );
  }
}

export default Donut;
