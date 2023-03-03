import { Box, Container, styled } from "@mui/material";
import React from "react";
import Slider from "./slider";

const StyledBox = styled(Box)({
  position: "absolute",
  // width: "1366px",
  width: "100%",
  height: "648px",
  left: "1px",
  top: "94px",
  border: "1px solid red",
});

const Index = () => {
  return (
    // <Container fixed>
    <StyledBox>
      <Slider />
    </StyledBox>
    // </Container>
  );
};

export default Index;
