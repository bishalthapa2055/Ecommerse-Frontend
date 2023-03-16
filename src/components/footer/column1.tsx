import React from "react";
import { Box, styled, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";

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

const StyledTyo = styled(Typography)(({ theme }) => ({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "28px",
}));

const Column1 = () => {
  return (
    <>
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
            Company Info
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "105px",
            height: " 166.42px",

            top: "30px",
            // left: " 63px",
            // border: "1px solid red",
          }}
        >
          <Stack direction="column" spacing={4}>
            <StyledTyo>About Us</StyledTyo>
            <StyledTyo>Latest Posts</StyledTyo>
            <StyledTyo>Contact Us</StyledTyo>
            <StyledTyo>Shop</StyledTyo>
          </Stack>
        </Box>
      </StyledBox>
    </>
  );
};

export default Column1;
