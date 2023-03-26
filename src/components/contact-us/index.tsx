import React from "react";
import Headers from "../about-us/header/header";
import Hero from "./hero";
import { Container } from "@mui/material";
import Form from "./form";
const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
      </Container>
      <Form />
      <Hero />
    </>
  );
};

export default Index;
