import React from "react";

import { Box, styled, Container, Typography, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const StyledBox = styled(Box)({
  position: "relative",
  //   left: "4.61%",

  top: " 70px",
  bottom: "197px",
  width: "105px",
  height: "210px",
  //   border: "1px solid red",
  //   backgroundColor: "yellow",
});
const Column4 = () => {
  return (
    <StyledBox>
      <Box
        sx={{
          // position: "relative",
          width: "105px",
          height: "14px",
          top: "70px",
          left: "63px",
          // border: "1px solid black",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arimo",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "14px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Get in know
        </Typography>
      </Box>
      {/* <Box
        sx={{
          position: "relative",
          width: "105px",
          height: " 166.42px",

          top: "30px",
          // left: " 63px",
          border: "1px solid red",
        }}
      > */}
      <Box
        sx={{
          position: "relative",
          width: "200px",
          height: "48px",
          //   left: "150 px",
          top: "25px",
          //   border: "1px solid red",
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter Your Email"
          variant="standard"
          sx={{ overflow: "hidden", width: "150px" }}
        />
        <ArrowForwardIosIcon
          sx={{
            position: "relative",
            color: "red",
            top: "13px",
            // left: "50px",
          }}
        />
      </Box>
    </StyledBox>
  );
};

export default Column4;
