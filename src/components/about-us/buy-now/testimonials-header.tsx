import { Box, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const StyledBox = styled(Box)({
  position: "relative",
  width: "218px",
  height: "48px",
  left: "496px",
  top: "1300px",
});
const StyledTyp = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  textAlign: "center",

  color: "#1D1D1D",
});
const TestimonialsHeader = () => {
  return (
    <>
      <Container maxWidth="lg">
        <StyledBox>
          <StyledTyp>Testimonials</StyledTyp>
        </StyledBox>
      </Container>
    </>
  );
};

export default TestimonialsHeader;
