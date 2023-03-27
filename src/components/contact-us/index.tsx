import React from "react";
import Headers from "../about-us/header/header";
import Hero from "./hero";
import { Container } from "@mui/material";
import Form from "./form";
import Footer from "../footer/foot-others";
const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
      </Container>
      <Form />
      <Hero />
      {/* <Container maxWidth="lg"> */}
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default Index;
