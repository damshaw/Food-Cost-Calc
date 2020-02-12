import React from "react";
import { Doughnut } from "react-chartjs-2";

function SummaryChart(props) {
  let chartLabel = props.data.ingredientDetails.map(
    (ingredientDetail, i) => ingredientDetail.ingredient
  );
  let chartData = props.data.ingredientDetails.map(
    (ingredientDetail, i) => ingredientDetail.usedCost
  );

  let reportDataSource = {
    labels: chartLabel,
    datasets: [
      {
        label: "Income Growth",
        data: chartData,
        backgroundColor: ["#00453A", "#00A98E", "#99DCD1", "#006555"]
      }
    ]
  };
  console.log("reportDataSource", reportDataSource);

  console.log("data", props.data);
  return (
    <div className="uk-section">
      <Doughnut
        data={reportDataSource}
        options={{ legend: { display: true, position: "top" } }}
      />
    </div>
  );
}
SummaryChart.defaultProps = {};
export default SummaryChart;
