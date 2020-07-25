import React from "react";
import Layout from "../layout/Layout";
import PdfLink from "../components/PdfLink";
import Steps, { Step } from "../components/Steps";

const stepTitles = ["Upload", "Review", "Confirm"];

const App = () => {
  return (
    <Layout>
      <PdfLink href="/www.google.com" title="แนะนำวิธีการใช้บัตรเครดิต" />
      <PdfLink href="/www.google.com" title="แนะนำวิธีการใช้บัตรเครดิต" />
      <br />
      <Steps current={0}>
        {stepTitles.map((title) => (
          <Step title={title} />
        ))}
      </Steps>
    </Layout>
  );
};

export default App;
