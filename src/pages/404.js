import React from "react";
import { Col, Row } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
function ErrorPage(props) {
  return (
    <Row className="email-wrap">
      <Header />
      <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
        <h3>Error Page</h3>
      </Col>
      <Footer />
    </Row>
  );
}
export default ErrorPage;
