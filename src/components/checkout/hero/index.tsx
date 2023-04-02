import React from "react";
import { Box, Typography, styled } from "@mui/material";
const StyledBox = styled(Box)({
  position: "absolute",
  width: "435px",
  // width: "100%",
  // maxWidth: { md: "50%", lg: "33.33%" },
  height: "22px",
  // left: 63px
  //   top: "166px",
  display: "flex",
});
const StyledTypo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "15px",
  lineHeight: "17px",
  textTransform: "uppercase",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <StyledTypo sx={{ color: "#888888" }}>Home / </StyledTypo>
        <StyledTypo sx={{ color: "#555555" }}> Checkout</StyledTypo>
      </StyledBox>
    </>
  );
};

export default Index;
