import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "435px",
  height: "22px",
  //   left: "63px",
  top: "166px",
  //   border: "1px solid red",
});
const StyledTypo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "15px",
  lineHeight: "17px",
  /* identical to box height */

  textTransform: "uppercase",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <StyledTypo sx={{ color: "#888888" }}>
          home/
          <StyledTypo
            sx={{
              color: "#555555",
              position: "absolute",
              left: "55px",
              top: "0px",
            }}
          >
            shopping cart
          </StyledTypo>
        </StyledTypo>
      </StyledBox>
    </>
  );
};

export default Index;
