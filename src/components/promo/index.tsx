import React from "react";
import { Box, styled, Container, Typography, Button } from "@mui/material";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "1240px",
  height: "429px",
  top: "2124px",
  // border: "1px solid red",

  display: "flex",
  justifyContent: "space-between",
});
const PeaceBox = styled(Box)({
  width: "715px",
  height: "429px",
  top: "2124px",
  backgroundColor: "#000000",
  // border: "1 px solid green",
});
const BuyBox = styled(Box)({
  position: "absolute",
  width: "505px",
  height: "429px",
  left: "798px",
  // top: "2124px",
  backgroundColor: "#000000",
  // border: "1 px solid yellow",
});
const BuyDesc = styled(Box)({
  position: "absolute",
  width: "406px",
  height: "48px",
  // left: "155px",
  top: "181px",
  // border: "1px solid red",
});

const TypoHeader = styled(Typography)({
  //
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "32px",
  lineHeight: "48px",
  /* or 150% */

  textAlign: "center",
  textTransform: "uppercase",

  color: "#FFFFFF",
});
const TypoDesc = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "130%",
  textAlign: "center",
  color: "#FFFFFF",
});

const StyledButton = styled(Button)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "14px 36px",
  gap: "10px",

  position: "absolute",
  width: "140px",
  height: "48px",
  left: "269px",
  top: "261px",
  color: "#024E82",
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#ffffff",
    color: "#024E82",
  },
});
const HeaderBox = styled(Box)({
  position: "absolute",
  width: "368px",
  height: "38px",

  top: "119px",
  // border: "1px solid red",
});
const Index = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <PeaceBox>
          <HeaderBox sx={{ left: "174px" }}>
            <TypoHeader>Peace of Mind</TypoHeader>
          </HeaderBox>
          <BuyDesc sx={{ left: "155px" }}>
            <TypoDesc>
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </TypoDesc>
          </BuyDesc>
          <StyledButton variant="contained">BUY NOW</StyledButton>
        </PeaceBox>
        <BuyBox>
          <HeaderBox sx={{ left: "69px" }}>
            <TypoHeader>Buy 2 get 1 free</TypoHeader>
          </HeaderBox>
          <BuyDesc sx={{ left: "50px" }}>
            <TypoDesc>
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </TypoDesc>
          </BuyDesc>
          <StyledButton sx={{ left: "172px" }}>BUY NOW</StyledButton>
        </BuyBox>
      </StyledBox>
    </Container>
  );
};

export default Index;
