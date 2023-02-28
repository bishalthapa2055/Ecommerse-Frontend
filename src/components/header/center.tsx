import React from "react";
import { Box, Paper, Stack, styled, Typography } from "@mui/material";

const StyledStack = styled(Stack)({
  // border: "1px solid red",
  backgroundColor: "transparent",
  position: "absolute",
  width: "252px",
  height: "25px",
  left: "356px",
  top: "44px",
});
const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  // border: "1px solid red",
  backgroundColor: "transparent",

  textAlign: "center",
  fontFamily: "Arimo",
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "25px",
  letterSpacing: "0.05em",
  cursor: "pointer",
}));
const Center = () => {
  return (
    <Box flex={2}>
      <StyledStack direction="row" spacing={2}>
        <StyledTypo>HOME</StyledTypo>
        <StyledTypo>ABOUT</StyledTypo>
        <StyledTypo>CONTACT US</StyledTypo>
      </StyledStack>
    </Box>
  );
};

export default Center;
