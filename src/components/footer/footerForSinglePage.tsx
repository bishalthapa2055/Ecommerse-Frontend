import React from "react";

import { Box, Container, styled } from "@mui/material";
import Bottomfooter from "./bottom-footer";
import Footer from "./footer";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "100%",
  // width: "1366px",
  height: "477px",
  left: "0px",
  top: "1424px",
  bottom: 0,
  // border: "1px solid red",
  // backgroundColor: "grey",
});
const FooterForSinglePage = () => {
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

export default FooterForSinglePage;
