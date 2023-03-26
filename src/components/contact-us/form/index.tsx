import React from "react";
import { Container, Box, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  border: "1px solid red",
  position: "absolute",
  width: "1240px",
  height: "563px",
  // left: 63px;
  top: "582px",
});
const TypoBox = styled(Box)({
  //   position: "absolute",
  width: "554px",
  height: "48px",
  //   backgroundColor: "grey",
  top: "584px",
});
const StyledTypo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  color: "#3A3939",
});

const StyledTypo2 = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#555555",
});
const InfoBox = styled(Box)({
  //   position: "absolute",
  width: "350px",
  height: "107px",
  left: "953px",
  top: "582px",
  //   backgroundColor: "red",
});
const InfoBox2 = styled(Box)({
  //   position: "absolute",
  width: "350px",
  height: "114px",
  left: "953px",
  top: "737px",
  backgroundColor: "green",
});
const Typo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "48px",
  color: "#1D1D1D",
});
const ContentTypo = styled(Typography)({
  position: "relative",
  width: "300px",
  height: "65px",
  //   left: "953px",
  top: "30px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",

  color: "#555555",
});
const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <StyledBox>
          <TypoBox>
            <StyledTypo>We would love to hear from you.</StyledTypo>
          </TypoBox>
          <Box
            sx={{
              position: "absolute",
              width: "788px",
              height: "25px",
              // left: 63px
              top: "80px",
            }}
          >
            <StyledTypo2>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </StyledTypo2>
          </Box>
        </StyledBox>
        <Box
          sx={{
            position: "relative",
            width: "350px",
            height: "269px",
            left: "880px",
            border: "1px solid red",
            top: "494px",
          }}
        >
          <InfoBox>
            <Typography
              sx={{
                // position: "absolute",
                width: "159px",
                height: "26px",
                left: "953px",
                top: "582px",
              }}
            >
              <Typo>Visit Us</Typo>
            </Typography>
            <ContentTypo>UET Lahore, Punjab, Pakistan</ContentTypo>
            <ContentTypo>Phone: +923039898987</ContentTypo>
          </InfoBox>
          <InfoBox2>
            <Typo>Get In Touch</Typo>
          </InfoBox2>
        </Box>
      </Container>
    </>
  );
};

export default Index;
