import React from "react";
import {
  Page,
  Text,
  View,
  ReactPDF,
  Document,
  StyleSheet
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const CreatePdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.section}>
        <Text>We're inside a PDF!</Text>
      </View>
    </Page>
  </Document>
);
// ReactPDF.render(<CreatePdf />, `${__dirname}/example.pdf`);

export default CreatePdf;
