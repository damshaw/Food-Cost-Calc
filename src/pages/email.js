import React from "react";
import { Col } from "antd";

function Email(props) {
  return (
    <Col className="email-wrap" xs={{ span: 24 }} md={{ span: 6, offset: 8 }}>
      <h3>Awesome! </h3>
      <p>
        Check you box for the summary email we just sent to {props.data.email}
      </p>
    </Col>
  );
}
export default Email;
