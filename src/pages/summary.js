import React from "react";
import { Col } from "antd";
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage
} from "@rehooks/local-storage";

import Button from "../components/button";
import SummaryChart from "../components/summaryChart";

function Summary(props) {
  // const [getNum, setNum] = useLocalStorage("num");

  return (
    <Col
      className="summary-wrap"
      xs={{ span: 24 }}
      md={{ span: 12, offset: 6 }}
    >
      <h3>View Summary</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
      <h4>Ingredients Breakdown</h4>
      {/* <form onSubmit={props.handleSummary}> */}
      <SummaryChart data={props.data} />
      <Button
        text="Email PDF Summary"
        color="bg-green"
        onClick={_ => writeStorage("foodCalc", props.data)}
      />
      {/* </form> */}
    </Col>
  );
}

export default Summary;
