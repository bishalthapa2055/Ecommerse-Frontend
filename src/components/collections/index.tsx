import { Box, Container, styled } from "@mui/material";
import React from "react";
import Cards from "./cards";
import Collection from "./collection";

const StyledBox = styled(Box)({
  border: "2px solid green",
  backgroundColor: "yellow",
  position: "absolute",
  width: "100%",
  height: "1226px",
  left: "0px",
  top: "700px",
});
const Index = () => {
  return (
    <>
      {/* <Container maxWidth="lg"> */}
      {/* </Container> */}
      <StyledBox>
        <Container maxWidth="lg" sx={{backgroundColor :"1px solid red"}}>
          <Collection />
          <Cards />
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
