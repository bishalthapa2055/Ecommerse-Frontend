import React from "react";
import { Box, styled, Typography, Container, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const StyledBox = styled(Box)({
  position: "absolute",
  left: "4.61%",
  right: "78.33%",
  top: " 33.18%",
  bottom: "33.18%",
  border: "1px solid red",
});

const StyledTypo = styled(Typography)({
  position: "absolute",
  width: "150px",
  left: "22.32%",
  right: " 30.9%",
  top: "-2.82%",
  // bottom: " 66.2%",

  fontFamily: "Baloo",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "25px",
  /* identical to box height */

  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  border: "1px solid green",

  color: "#1D1D1D",
});

const Shipping = () => {
  return (
    <>
      {/* <Container maxWidth="lg"> */}
      <Stack direction="row" spacing={20}>
        <StyledBox>
          <StyledTypo>Free Shipping</StyledTypo>
        </StyledBox>
        <StyledBox>
          <StyledTypo>Free Shipping</StyledTypo>
        </StyledBox>
        <StyledBox>
          <StyledTypo>Free Shipping</StyledTypo>
        </StyledBox>
        <StyledBox>
          <StyledTypo>Free Shipping</StyledTypo>
        </StyledBox>
      </Stack>
      {/* </Container> */}
    </>
  );
};

export default Shipping;
