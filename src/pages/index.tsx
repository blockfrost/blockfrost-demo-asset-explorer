import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { MainLayout, FAQ, Pricing, Introduction } from "components";

function Index(): ReactElement {
  return (
    <MainLayout title="Blockfrost.io">
      <div className="100-vw">
        <Container className="content-fixed">aaa</Container>
      </div>
    </MainLayout>
  );
}

export default Index;
