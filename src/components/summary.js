import React from "react";
import HubspotForm from "react-hubspot-form";
import { useForm } from "react-hubspot";
import Header from "../components/header";
import Footer from "../components/footer";
import SubmitEmail from "../components/submitEmail";
import { Col, Row } from "antd";
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage
} from "@rehooks/local-storage";
// import {
//   PDFDownloadLink,
//   ReactPDF,
//   Document,
//   Text,
//   Page
// } from "@react-pdf/renderer";
// import Pdf from "react-to-pdf";

import Button from "../components/button";
import SummaryChart from "../components/summaryChart";
// import CreatePdf from "../components/createPdf";
// import SavePdf from "../components/savePdf";
// const ref = React.createRef();
// const PdfDoc = () => (
//   <Document>
//     <Page>
//       <Text>PDF Summary</Text>
//     </Page>
//   </Document>
// );

function Summary(props) {
  // const [getNum, setNum] = useLocalStorage("num");
  // const { data, isLoading, isError, handleSubmit } = useForm({
  //   portalId: "6808090",
  //   formId: "301461ae-8d34-4089-b290-54772e4fc182"
  // });
  // //2d3ec618-837d-4995-9273-1a129eae1b74
  // console.log("data", data);
  // console.log("isLoading", isLoading);
  // console.log("isError", isError);
  // console.log("handleSubmit", handleSubmit);

  return (
    <Row className="summary-wrap">
      <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
        <h3>View Summary</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          proident.
        </p>
        <h4>Ingredients Breakdown</h4>
        <ul style={{ listStyle: "none", marginLeft: "0", paddingLeft: "0" }}>
          {props.appData.ingredientDetails.map((ingredientDetail, i) => (
            <li
              style={{
                marginBottom: "12px",
                paddingBottom: "12px",
                borderBottom: "1px solid #f8f8f8"
              }}
            >
              <strong>{ingredientDetail.ingredient}</strong>
              <br />$ {ingredientDetail.usedCost}
            </li>
          ))}
        </ul>
        <SummaryChart appData={props.appData} />
        <SubmitEmail appData={props.appData} />
        {/* <form onSubmit={handleSubmit}>
        <input name="email" type="text" value="4+damshaw@gmail.com" />
        <Button type="submit" text="Email PDF Summary" color="bg-green" />
      </form> */}
        {/* <Button
        text="Email PDF Summary"
        color="bg-green"
        onClick={_ => writeStorage("foodCalc", props.datam)}
      /> */}
        {/* </form> */}
        {/* <PDFDownloadLink document={PdfDoc} fileName="PdfDoc.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}
        {/* <div className="App">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </div> */}
      </Col>
      <Footer />
    </Row>
  );
}

export default Summary;
