import React from "react";
import { Box, styled, Container } from "@mui/material";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "1240px",
  height: "429px",
  top: "2124px",
  border: "5px solid red",
  backgroundColor: "yellow",
  display: "flex",
  justifyContent: "space-between",
});
const Index = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Box
          sx={{
            // position: "absoulte",
            width: "715px",
            height: "429px",
            top: "2124px",
            backgroundColor: "green",
            border: "2 px solid white",
          }}
        >
          <Box
            sx={{
              //   position: "absolute",
              width: "368px",
              height: "38px",
              left: "237px",
              top: "2243px",
            }}
          >
            Peace Of Mind
          </Box>
        </Box>
        <Box
          sx={{
            position: "absoulte",
            width: "505px",
            height: "429px",
            left: "798px",
            top: "2124px",
            backgroundColor: "grey",
          }}
        >
          Buy 2 get 1 free
        </Box>
      </StyledBox>
    </Container>
  );
};

export default Index;
