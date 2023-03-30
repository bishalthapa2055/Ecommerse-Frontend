import Container from "@mui/material/Container";
import React from "react";
import Headers from "../about-us/header/header";
import Content from "./content";

const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
        <Content />
      </Container>
    </>
  );
};

export default Index;
