import { Box, Container, styled } from "@mui/material";
import React from "react";
import Cards from "./cards";
import Header from "./header";

const StyledBox = styled(Box)({
  position: "absolute",
  width: " 100%",
  height: " 920px",
  left: "0px",
  top: "2490px",
  // border: "3 px solid red",
  backgroundColor: "whitesmoke",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <Container maxWidth="lg">
          <Header />
          <Cards />
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
