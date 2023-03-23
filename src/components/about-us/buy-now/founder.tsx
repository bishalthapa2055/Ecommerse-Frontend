import React from "react";
import { Box, styled, Typography } from "@mui/material";
const StyledBox = styled(Box)({
  position: "absolute",
  width: "1200px",
  //   width: "100%",
  height: "744px",
  // left: 0px
  top: "600px",
  border: "1px solid red",
  backgroundColor: "#FBFBFB",
});
const Founder = () => {
  return (
    <>
      <StyledBox>
        <Box
          sx={{
            position: "absolute",
            width: "1200px",
            height: "527px",
            top: "107px",
            border: "1px solid red",
            backgroundColor: "green",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "239px",
              height: " 48px",
              left: "480px",
              //   top: "107px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Arimo",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "48px",

                textAlign: "center",
              }}
            >
              The Founders
            </Typography>
          </Box>
        </Box>
      </StyledBox>
    </>
  );
};

export default Founder;
