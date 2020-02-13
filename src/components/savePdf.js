import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <th>Food Cost Calculator (Alpha)</th>
        </thead>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const SavePdf = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
export default SavePdf;
