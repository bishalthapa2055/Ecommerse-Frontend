import { Box, Stack } from "@mui/material";
import React from "react";

// osition: absolute;
// width: 1366px;
// height: 456px;
// left: 0px;
// top: 1998px;
const TestiContents = () => {
  return (
    <>
      <Stack direction="column">
        <Box
          sx={{
            border: "2px solid red",
            backgroundColor: "yellow",
            width: "300px",
            height: "200px",
            position: "relative",
            top: "2000px",
          }}
        >
          hello there
        </Box>
        <Box>hello there</Box>
        <Box>hello there</Box>
      </Stack>
    </>
  );
};

export default TestiContents;
