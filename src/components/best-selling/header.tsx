import { Box, Container, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const StyledBox = styled(Box)({
  // position: "absolute",
  width: "280px",
  heigth: "112px",
  top: "110px",
  left: "542px",
});
const SellerTypo = styled(Typography)({
  position: "absolute",
  width: "192px",
  height: "48px",
  left: "587px",
  top: "110px",

  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",

  textAlign: "center",

  /* heading */

  color: "#1D1D1D",
});

const Desc = styled(Typography)({
  position: "absolute",
  width: "280px",
  height: "48px",
  left: "542px",
  top: "174px",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "48px",
  /* identical to box height, or 240% */

  textAlign: "center",

  /* text */

  color: "#555555",
});
const Header = () => {
  return (
    <>
      <StyledBox>
        <SellerTypo>Top Sellers</SellerTypo>
        <Desc>Browse our top-selling products</Desc>
      </StyledBox>
    </>
  );
};

export default Header;
