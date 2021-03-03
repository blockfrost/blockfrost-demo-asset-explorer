import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { MainLayout, Assets } from "components";

function Index(): ReactElement {
  return (
    <MainLayout title="Blockfrost.io">
      <div
        className="100-vw"
        style={{ height: "100%", display: "flex", flex: 1 }}
      >
        <Container className="content-fixed">
          <Assets />
        </Container>
      </div>
    </MainLayout>
  );
}

export default Index;
