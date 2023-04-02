import { Container } from "@mui/material";
import React from "react";
import Content from "./contents";
import Headers from "../about-us/header/header";
import FooterForSinglePage from "../footer/footerForSinglePage";

const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
        <Content />
        <FooterForSinglePage />
      </Container>
    </>
  );
};

export default Index;
