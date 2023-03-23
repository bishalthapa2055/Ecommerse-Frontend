import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import image1 from "../../../assets/aboutus/by1.png";
import image2 from "../../../assets/aboutus/by2.png";
import Founder from "./founder";

const StyledContainer = styled(Box)({
  position: "absolute",
  // width: "1240px",
  width: "100%",
  height: "1476px",
  // left: "63px",
  top: "522px",
  border: "1 px solid red",
  backgroundColor: "yellow",
});

const StyledTypo = styled(Typography)({
  width: "124px",
  height: "39px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "20px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  textTransform: "uppercase",
});

const StyledButton = styled(Button)({
  position: "absolute",
  width: "196px",
  height: "67px",
  // left: "190px",
  top: "500px",
  background: "#FFFFFF",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.04)",
  borderRadius: "26px",
  opacity: 0.6,
});

const Index = () => {
  return (
    <>
      <StyledContainer sx={{}}>
        <Container>
          <Box
            sx={{
              position: "absolute",
              width: "1240px",
              height: "600px",
              // left: 63px;
              // top: "522px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Box sx={{ width: "600px", height: "300px" }}>
                <img src={image1} />
                <StyledButton
                  variant="outlined"
                  sx={{
                    left: "190px",
                  }}
                >
                  <StyledTypo>Buy Now</StyledTypo>
                </StyledButton>
              </Box>
              <Box sx={{ width: "600px", height: "300px" }}>
                <img src={image2} />
                <StyledButton
                  sx={{
                    left: "800px",
                  }}
                >
                  <StyledTypo>Buy Now</StyledTypo>
                </StyledButton>
              </Box>
            </Stack>
          </Box>
          <Founder />
        </Container>
      </StyledContainer>
    </>
  );
};

export default Index;
