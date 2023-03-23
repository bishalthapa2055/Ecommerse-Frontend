import React from "react";
import { Box, styled, Typography } from "@mui/material";
import IndCard from "./indCard";
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
import f1 from "../../../assets/aboutus/f1.png";
import f2 from "../../../assets/aboutus/f2.png";
import f3 from "../../../assets/aboutus/f3.png";
import f4 from "../../../assets/aboutus/f4.png";

const objects = [
  {
    img: f1,
    name: "HM Jawad",
  },
  {
    img: f2,
    name: "Furqan Abid",
  },
  {
    img: f3,
    name: "Abdullah Ah",
  },
  {
    img: f4,
    name: "Akbar Kureshi",
  },
];
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
        <IndCard array={objects} />
      </StyledBox>
    </>
  );
};

export default Founder;
