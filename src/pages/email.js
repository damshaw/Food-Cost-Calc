import React from "react";
import { Col } from "antd";

function Email(props) {
  return (
    <Col className="email-wrap" xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
      <h3>Hi {props.data.fname},</h3>
      <p>Your summary email has been sent to {props.data.email}</p>
    </Col>
  );
}
export default Email;
