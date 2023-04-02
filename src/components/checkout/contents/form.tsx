import { Box, Typography, styled, TextField } from "@mui/material";
import React from "react";
const StyledBox = styled(Box)({
  position: "absolute",
  width: "620px",
  height: "71px",
  // left: 1px
  top: "214px",
  //   border: "1px solid red",
});
const StyledTypo = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",

  /* text */

  color: "#555555",
});
const Star = styled(Typography)({
  color: "#D6763C",
});
const DataTextField = styled(TextField)({
  boxSizing: "border-box",
  position: "absolute",
  width: "620px",
  height: "48px",
  // left: 1px;
  top: "17px",
});
const Feedback = styled(Box)({
  position: "absolute",
  width: "1239px",
  height: "630px",
  // left: 1px
  top: "720px",
  //   border: "1px solid green",
});
const Order = styled(Typography)({
  //   position: "absolute",
  width: "228.44px",
  height: "54px",
  // left: 1px
  top: "689px",

  /* Section/Title */

  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",

  color: "#1D1D1D",
});
const FeedbackBox = styled(Box)({
  boxSizing: "border-box",

  position: "relative",
  width: "1239px",
  height: "66.17px",
  // left: "1px",
  top: "30px",
  border: "1px solid #EBEBEB",
  display: "flex",
  justifyContent: "space-between",
});
const FeedbackBoxTypo = styled(Typography)({
  position: "relative",
  width: "450px",
  height: "26.19px",
  //   left: "738.59px",
  top: "20px",
  fontFamily: "Arimo",
  fontStyle: "normal",

  fontSize: "16px",
  lineHeight: "18px",
  //   display: "flex",
  alignItems: "center",
});
const Delivery = styled(Box)({
  position: "absolute",
  width: "1239px",
  height: "245.38px",
  // left: 1px
  top: "1073.62px",
  border: "1px solid red",
});
const DelContent = styled(Box)({
  boxSizing: "border-box",
  position: "relative",
  width: "1192.54px",
  height: "77.2px",
  left: "24.23px",
  top: "50px",

  backgroundColor: "#FBFBFB",
  border: "1px solid #EBEBEB",
});
const Form = () => {
  return (
    <>
      <StyledBox>
        <StyledTypo sx={{ display: "flex" }}>
          Name <Star>*</Star>
        </StyledTypo>
        <DataTextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      <StyledBox sx={{ position: "absolute", top: "310px" }}>
        <StyledTypo sx={{ display: "flex" }}>
          Street Address <Star>*</Star>
        </StyledTypo>
        <DataTextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      <StyledBox sx={{ position: "absolute", top: "410px" }}>
        <StyledTypo sx={{ display: "flex" }}>
          Town / City <Star>*</Star>
        </StyledTypo>
        <DataTextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      <StyledBox sx={{ position: "absolute", top: "510px" }}>
        <StyledTypo sx={{ display: "flex" }}>
          Phone <Star>*</Star>
        </StyledTypo>
        <DataTextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      <StyledBox sx={{ position: "absolute", top: "610px" }}>
        <StyledTypo sx={{ display: "flex" }}>
          email <Star>*</Star>
        </StyledTypo>
        <DataTextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      <Feedback>
        <Order>Your Order</Order>
        <FeedbackBox>
          <FeedbackBoxTypo sx={{ fontWeight: 700 }}>Product </FeedbackBoxTypo>
          <FeedbackBoxTypo sx={{ fontWeight: 700 }}>Total</FeedbackBoxTypo>
        </FeedbackBox>
        <FeedbackBox>
          <FeedbackBoxTypo>Plain White T-shirt</FeedbackBoxTypo>
          <FeedbackBoxTypo>$59.00</FeedbackBoxTypo>
        </FeedbackBox>
        <FeedbackBox>
          <FeedbackBoxTypo>Sub-total </FeedbackBoxTypo>
          <FeedbackBoxTypo>$59.00</FeedbackBoxTypo>
        </FeedbackBox>
        <FeedbackBox>
          <FeedbackBoxTypo></FeedbackBoxTypo>
          <FeedbackBoxTypo sx={{ fontWeight: 700 }}>$59.00</FeedbackBoxTypo>
        </FeedbackBox>
      </Feedback>
      <Delivery>
        <DelContent>Haha</DelContent>
      </Delivery>
    </>
  );
};

export default Form;
