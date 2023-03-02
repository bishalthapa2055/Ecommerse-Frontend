import { Box, styled } from "@mui/material";
import React from "react";
import Slider from "./slider";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "1366px",
  height: "648px",
  left: "1px",
  top: "94px",
  border: "1px solid red",
});

const Index = () => {
  return (
    <StyledBox>
      <Slider />
    </StyledBox>
  );
};

export default Index;
