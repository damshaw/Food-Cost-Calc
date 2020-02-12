import React from "react";
import { Slider, InputNumber, Col, Row } from "antd";
import NumberFormat from "react-number-format";
const marks = {
  0: {
    style: {
      color: "#b0b0b0"
    },
    label: <strong>0%</strong>
  },
  25: "25%",
  50: "50%",
  75: "75%",
  100: "100%",
  125: "125%",
  150: "150%",
  175: "175%",
  200: {
    style: {
      color: "#b0b0b0"
    },
    label: <strong>200%</strong>
  }
};

function MarginPricing(props) {
  return (
    <Col className="margin-wrap" xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
      <h3>Set Margins & Pricing</h3>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
      {/* <form onSubmit={props.handleMargin}> */}

      <label>Total Ingredients Cost</label>
      <NumberFormat
        value={props.data.totalCost}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        style={{ width: "100%" }}
        renderText={value => (
          <div className="price-display bg-grey-dark total-cost">{value}</div>
        )}
      />
      {/* <InputNumber
        defaultValue={0}
        value={props.data.totalCost}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        style={{ width: "100%" }}
        name="totalCost"
        onChange={props.handleChange}
        color="bg-grey"
      /> */}
      <Row gutter={[12, 12]}>
        <Col span={12}>
          {" "}
          <label>Markup Percent</label>
          <InputNumber
            defaultValue={0}
            min={0}
            max={200}
            formatter={value => `${value}%`}
            parser={value => value.replace("%", "")}
            style={{ width: "100%", borderColor: "transparent" }}
            className="price-display bg-white"
            name="marginPercent"
            value={props.data.marginPercent}
            onChange={props.handleChange}
          />
        </Col>
        <Col span={12}>
          {" "}
          <label>Markup Amount</label>
          <NumberFormat
            value={props.data.markUpAmount}
            displayType={"text"}
            decimalScale={2}
            thousandSeparator={true}
            prefix={"$"}
            renderText={value => (
              <div className="price-display bg-white ">{value}</div>
            )}
          />
        </Col>
      </Row>
      <Slider
        min={0}
        max={200}
        marks={marks}
        name="marginPercent"
        value={
          typeof props.data.marginPercent === "number"
            ? props.data.marginPercent
            : 0
        }
        onChange={props.onMarginChange}
      />
      {/* <InputNumber
        defaultValue={0}
        value={props.data.markUpAmount}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        name="markUpAmount"
        style={{ width: "100%" }}
        onChange={props.handleChange}
      /> */}
      <label>Recommended Menu Price</label>
      <NumberFormat
        value={props.data.menuPrice}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        style={{ width: "100%" }}
        renderText={value => (
          <div className="price-display bg-grey menu-price">{value}</div>
        )}
      />
      {/* <InputNumber
        defaultValue={0}
        value={props.data.menuPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        name="menuPrice"
        style={{ width: "100%" }}
        onChange={props.handleChange}
      /> */}
      {/* <Button text="View Summary" color="bg-green" /> */}
      {/* </form> */}
    </Col>
  );
}

export default MarginPricing;
