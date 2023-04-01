import { Container } from "@mui/material";
import React from "react";
import Headers from "../about-us/header/header";
import Hero from "./hero";
import ProductDetails from "./product-details";
const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
        <Hero />
        <ProductDetails />
      </Container>
    </>
  );
};

export default Index;
