import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "39.68%",
          right: "39.82%",
          top: "11.96%",
          bottom: "75.87%",
          border: "2px solid red",
          backgroundColor: "aqua",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            // position: "absolute",
            width: "272px",
            height: "48px",
            left: "587px",
            top: "110px",
            // border: "1px solid red",
            // backgroundColor: "grey",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arimo",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "48px",
              /* identical to box height, or 133% */

              textAlign: "center",
            }}
          >
            Top Sellers
          </Typography>
        </Box>
        <Box
          sx={{
            // position: "absolute",
            width: "280px",
            height: "48px",
            left: "542px",
            top: "174px",
            // border: "2px solid white",
            // backgroundColor: "teal",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "48px",
              /* identical to box height, or 240% */

              textAlign: "center",
            }}
          >
            Browse our top-selling products
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
