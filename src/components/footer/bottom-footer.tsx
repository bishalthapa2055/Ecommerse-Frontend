import React from "react";
import { Box, Container, styled, Typography, Stack } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import p1 from "../../assets/pal.png";
import p2 from "../../assets/pay.png";
import p3 from "../../assets/visa.png";
import p4 from "../../assets/visacred.png";

const StyledBox = styled(Box)({
  position: "relative",
  width: "1240px",
  //   width: "100%",
  height: "76px",
  top: "200px",
  //   left: "63px",
  //   border: "1px solid red",
});
const StyledTypo = styled(Typography)({
  position: "relative",
  top: "-28px",
  left: "30px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "28px",
});
const Bottomfooter = () => {
  return (
    <StyledBox>
      <Box
        sx={{
          width: "400px",
          height: "17px",
          top: "410px",
          //   left: "63px",
          //   border: "1px solid red",
        }}
      >
        <CopyrightIcon />
        <StyledTypo>2020 NorthStar eCommerse Center</StyledTypo>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "286px",
          height: "17px",
          top: "20px",
          //   left: "63px",
          //   border: "1px solid red",
        }}
      >
        <Stack direction="row" spacing={20}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "28px",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "28px",
            }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "245px",
          height: "34px",
          top: "-10px",
          left: "1000px",
          //   border: "1px solid red",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Box>
            <img src={p1} alt="payment1" />
          </Box>
          <Box>
            <img src={p2} alt="payment1" />
          </Box>
          <Box>
            <img src={p3} alt="payment1" />
          </Box>
          <Box>
            <img src={p4} alt="payment1" />
          </Box>
        </Stack>
      </Box>
    </StyledBox>
  );
};

export default Bottomfooter;
