import React from "react";
import Footer from "./footer";
import { Box, Container, styled } from "@mui/material";
import Bottomfooter from "./bottom-footer";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "100%",
  // width: "1366px",
  height: "477px",
  left: "0px",
  top: " 3393px",
  // border: "1px solid red",
  // backgroundColor: "grey",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <Container maxWidth="lg">
          <Footer />
          <Bottomfooter />
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
