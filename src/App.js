import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import FoodCalc from "./components/calcContainer";
import ErrorPage from "./pages/404";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div id="page">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 8 }}>
          <Header />
        </Col>
        <Switch>
          <Route exact path="/" component={FoodCalc} />
          <Route path="/signin" component={FoodCalc} />
          <Route path="/ingredients" component={FoodCalc} />
          <Route path="/margin" component={FoodCalc} />
          <Route path="/summary" component={FoodCalc} />
          <Route component={ErrorPage} />
        </Switch>
        {/* <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <Footer />
        </Col> */}
      </Row>
    </div>
  );
}
export default App;
