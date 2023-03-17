import React from "react";
import { Box, styled, Container } from "@mui/material";
import Hero from "../../../assets/aboutus/hero.jpg";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "460px",
  height: "48px",
  //   left: "63px",
  bottom: "70px",
  top: "250px",
  //   border: "1px solid red",
  //   backgroundColor: "green",
});
const StyledBox1 = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "348px",
  left: "0px",
  top: "85px",
  backgroundColor: "yellow",
});
const StyledTypo = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "48px",
  color: "#ffffff",
});
const Index = () => {
  return (
    <>
      <StyledBox1>
        <img
          src={Hero}
          alt="hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Container maxWidth="lg">
          <StyledBox>
            <StyledTypo>ABOUT NORTHSTAR</StyledTypo>
          </StyledBox>
        </Container>
      </StyledBox1>
      {/* <Box
        sx={{
          position: "absolute",

          // width: "1366px",
          width: "100%",
          height: "348px",
          left: "0px",
          top: "85px",
          // border: "1px solid red",
          // backgroundColor: "yellow",
        }}
      >
        <img src={Hero} alt="hero" />
      </Box>
      <Container maxWidth="lg">
        <StyledBox>Hello There</StyledBox>
      </Container> */}
    </>
  );
};

export default Index;
