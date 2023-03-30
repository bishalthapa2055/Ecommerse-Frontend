import React from "react";
import { Box, styled, Typography, Rating } from "@mui/material";
import image from "../../../assets/singlepage/sp1.png";
import { theme } from "../../../theme";
const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "1240px",
  height: "1249px",
  //   left: "83px",
  top: "142px",
  border: "1px solid red",
}));
const ImageBox = styled(Box)({
  position: "absolute",
  width: "550px",
  height: "685px",
});
const StyledTitlePosition = styled(Box)({
  position: "absolute",
  width: "287px",
  height: "48px",
  left: "610px",
  top: "50px",
  // border: "1px solid green",
});
const TitleTypo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  color: "#1D1D1D",
});
const RatingBox = styled(Box)({
  position: "absolute",
  left: "49.25%",
  right: "43.92%",
  top: "8.5%",
  bottom: "85.9%",
  // border: "1px solid red",
  width: "160px",
  height: "48px",
});
const RatingNumber = styled(Typography)({
  position: "absolute",
  width: "21px",
  height: "20px",
  left: "80.25%",
  top: "8.5%",
  fontFamily: "Source Sans Pro",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "16px",
  color: "#1D1D1D",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <ImageBox>
          <img
            src={image}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </ImageBox>
        <StyledTitlePosition>
          <TitleTypo>Plain White Shirt</TitleTypo>
        </StyledTitlePosition>
        <RatingBox>
          <Rating
            name="simple-controlled"
            value={4}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{ color: "#D6763C" }}
          />
          <RatingNumber>(15)</RatingNumber>
        </RatingBox>
      </StyledBox>
    </>
  );
};

export default Index;
