import React from "react";
import { Box, Container, styled, Stack } from "@mui/material";
import Column1 from "./column1";
import Column2 from "./column2";
import Column3 from "./column3";
import Column4 from "./column4";
const StyledBox = styled(Box)({
  //   top: "",
  // position: "absolute",
  //   display: "flex",
  // left: 4.61%;
  // right: 87.7%;
  // top: "1200px",
  // top: "14.68%",
  //   bottom: "41.3%",
});

const Footer = () => {
  return (
    <>
      {/* <StyledBox> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        // spacing={100}
        //   sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Column1 />
        </Box>
        <Box>
          <Column2 />
        </Box>
        <Box>
          <Column3 />
        </Box>
        <Box>
          <Column4 />
        </Box>
      </Stack>
      {/* </StyledBox> */}
    </>
  );
};

export default Footer;
