import React from "react";
import { Box, styled } from "@mui/material";
import Hero from "../../../assets/contactus/hero.jpg";

const StyledBox = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "348px",
  left: "0px",
  top: "85px",
  border: "1px solid red",
  backgroundColor: "green",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <img
          src={Hero}
          alt="hero "
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </StyledBox>
    </>
  );
};

export default Index;
