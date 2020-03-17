import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";

function SummaryChart(props) {
  let chartLabel = props.appData.ingredientDetails.map(
    (ingredientDetail, i) => ingredientDetail.ingredient
  );
  let chartData = props.appData.ingredientDetails.map(
    (ingredientDetail, i) => ingredientDetail.usedCost
  );

  let reportDataSource = {
    labels: chartLabel,
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#00453A", "#00A98E", "#99DCD1", "#006555"]
      }
    ]
  };
  // console.log("reportDataSource", reportDataSource);

  // console.log("appData", props.appData);
  return (
    <div className="uk-section">
      {/* <Bar data={reportDataSource} type="horizontalBar" /> */}
      <Doughnut
        data={reportDataSource}
        options={{ legend: { display: true, position: "top" } }}
      />
    </div>
  );
}
SummaryChart.defaultProps = {};
export default SummaryChart;
