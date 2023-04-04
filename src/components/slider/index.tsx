import { Box, Container } from "@mui/material";
import React from "react";
import Slider from "./slider";
import myimage from "../../assets/img_1.png";
import { theme } from "../../theme";
import styled from "styled-components";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const StyledBox = styled(Box)({
  position: "absolute",
  // width: "1366px",
  width: "100%",
  height: "648px",
  left: "1px",
  top: "94px",
  border: "1px solid red",
  // objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    maxWidth: "100%",
  },
});

const Index = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isSmallScreen);
  return (
    // <Container>
    <>
      <StyledBox>
        <img
          src={myimage}
          alt="image "
          style={{
            height: isSmallScreen ? "auto" : "100%",
            width: isSmallScreen ? "auto" : "100%",
            objectFit: "cover",
            maxWidth: "100%",
            // [theme.breakpoints.down("md")]: {
            //   height: "auto",
            //   maxWidth: "100%",
            // },
          }}
        />
        <Slider />
      </StyledBox>
    </>
    // </Container>
  );
};

export default Index;
