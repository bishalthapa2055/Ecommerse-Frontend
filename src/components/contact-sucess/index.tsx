import { Container } from "@mui/material";
import React from "react";
import Headers from "../about-us/header/header";
import Hero from "../contact-us/hero";
import Body from "../contact-us/form";

const Index = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <Headers />
        <Body />
      </Container>
    </>
  );
};

export default Index;
