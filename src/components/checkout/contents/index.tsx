import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Hero from "../hero/";
import { theme } from "../../../theme";
import Form from "./form";
import Footer from "../../footer/footerForSinglePage";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "1240px",
  height: "1184px",
  //   left: "63px",
  top: "148px",
  // border: "1px solid red",
  //   [theme.breakpoints.down("md")]: {
  //     width: "50%",
  //   },
  //   [theme.breakpoints.down("lg")]: {
  //     width: "33.33%",
  //   },
}));
const BillingTypo = styled(Typography)({
  position: "absolute",
  width: "235px",
  height: "48px",
  left: "0px",
  top: "143px",

  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  color: "#1D1D1D",
});

const Index = () => {
  return (
    <>
      <StyledBox>
        <Hero />
        <BillingTypo>Billing Details</BillingTypo>
        <Form />
        {/* <Footer /> */}
      </StyledBox>
    </>
  );
};

export default Index;
