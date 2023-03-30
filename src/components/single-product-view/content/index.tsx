import React from "react";
import { Box, styled } from "@mui/material";
import image from "../../../assets/singlepage/sp1.png";
const StyledBox = styled(Box)({
  position: "absolute",
  width: "1240px",
  height: "1249px",
  //   left: "83px",
  top: "166px",
  border: "1px solid red",
});
const ImageBox = styled(Box)({
  position: "absolute",
  width: "550px",
  height: "685px",
  // left: "63px",
  // top: " 142px",
  border: "1px solid black",
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
      </StyledBox>
    </>
  );
};

export default Index;
