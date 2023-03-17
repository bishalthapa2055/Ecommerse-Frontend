import React from "react";
import { Box, Container, styled } from "@mui/material";
import Headers from "./header";
const StyledBox = styled(Box)({
  position: "absolute",
  height: "77.52px",
  // border: "1px solid red",
  //   width: "1366px",
  width: "100%",
  //   top: "33px",
});
const Index = () => {
  return (
    <StyledBox>
      <Container>
        <Headers />
      </Container>
    </StyledBox>
  );
};
export default Index;
