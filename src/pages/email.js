import React from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Row } from "antd";
import Button from "../components/button";

function Email(props) {
  return (
    <Row className="email-wrap">
      <Header />
      <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://www.kounta.com/wp-content/uploads/2020/01/icon-check-green-500x500.png"
            alt="check"
            width="120"
            height="auto"
          />
        </div>
        <h3>Awesome! </h3>
        <p>
          Check you box for the summary email we just sent to{" "}
          {props.appData.email}
        </p>
        <br />
        <hr />
        <Button
          onClick={props.onClickBack}
          text="Back to calculator"
          color="bg-grey"
        />
      </Col>
      <Footer />
    </Row>
  );
}
export default Email;
