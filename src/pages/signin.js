import React, { Fragment } from "react";
import { Input, Radio, Col, Row } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";

function SignIn(props) {
  // const history = useHistory();

  // function handleClick() {
  //   history.push("/ingredients");
  // }

  return (
    <Fragment>
      <Row className="signin-wrap">
        <Header />
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <div>
            <h3>Step 1: Select business type</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              morbi eget tincidunt integer amet neque.
            </p>
            <Radio.Group
              name="businessType"
              value={props.appData.businessType}
              onChange={props.handleChange}
              className="businessType"
            >
              <Radio.Button value="Cafe">
                <img
                  alt="cafe"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/cafe-100x100.png"
                />
                Cafe
              </Radio.Button>
              <Radio.Button value="Bar">
                <img
                  alt="bar"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/bar-100x100.png"
                />
                Bar
              </Radio.Button>
              <Radio.Button value="Restaurant">
                <img
                  alt="restaurant"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/restaurant-100x100.png"
                />
                Restaurant
              </Radio.Button>
              <Radio.Button value="Food Retail">
                <img
                  alt="food retailer"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/retail-2-100x100.png"
                />
                Food Retailer
              </Radio.Button>
              <Radio.Button value="Brewery">
                <img
                  alt="brewery"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/brew-100x100.png"
                />
                Brewery
              </Radio.Button>
              <Radio.Button value="Hotel">
                <img
                  alt="hotel"
                  width="60"
                  height="auto"
                  src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/hotel-100x100.png"
                />
                Hotel
              </Radio.Button>
              <Radio.Button value="Other" className="other-type">
                Other
              </Radio.Button>
            </Radio.Group>
          </div>
          {/* <div>
        <h3>Step 2: Select your location</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          morbi eget tincidunt integer amet neque.
        </p>
        <Radio.Group
          name="location"
          value={props.appData.location}
          onChange={props.handleChange}
          className="location"
        >
          <Radio.Button value="NSW" style={radioStyle}>
            NSW
          </Radio.Button>
          <Radio.Button value="VIC" style={radioStyle}>
            VIC
          </Radio.Button>
          <Radio.Button value="QLD" style={radioStyle}>
            QLD
          </Radio.Button>
          <Radio.Button value="WA" style={radioStyle}>
            WA
          </Radio.Button>
          <Radio.Button value="SA" style={radioStyle}>
            SA
          </Radio.Button>
          <Radio.Button value="TAS" style={radioStyle}>
            TAS
          </Radio.Button>
          <Radio.Button value="ACT" style={radioStyle}>
            ACT
          </Radio.Button>
          <Radio.Button value="Other" style={radioStyle}>
            Other
          </Radio.Button>
        </Radio.Group>
      </div> */}

          <div>
            <h3>Step 2: Submit your email</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              morbi eget tincidunt integer amet neque.
            </p>
            <form onSubmit={props.handleSignIn}>
              {/* <Input
            name="fname"
            addonBefore="First Name"
            type="text"
            defaultValue="Enter your first name"
            value={props.appData.fname}
            onChange={props.handleChange}
          />
          <Input
            name="lname"
            addonBefore="Last Name"
            type="text"
            defaultValue="Enter your last name"
            value={props.appData.lname}
            onChange={props.handleChange}
          /> */}
              <Input
                name="email"
                addonBefore="Email Address"
                type="email"
                placeholder="Enter your email address"
                value={props.appData.email}
                onChange={props.handleChange}
                required
              />
              <Button text="Let's begin!" color="bg-orange-light" />
            </form>
          </div>
        </Col>
        <Footer />
      </Row>
    </Fragment>
  );
}

export default SignIn;
