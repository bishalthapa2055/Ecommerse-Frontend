import React from "react";
import { Stack, Box, Typography, styled, Badge } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const StyledBox1 = styled(Box)({
  position: "relative",
  //   width: "156px",
  height: "44px",
  //   left: "65px",
  top: "17px",
});

const StyledTypo = styled(Typography)({
  fontStyle: "normal",
  alignItems: "center",
  //   textAlign: "center",
  color: "#1D1D1D",
  borderRadius: "3px",
});
const StyledTypo2 = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "center",
  letterSpacing: "0.05em",
  cursor: "pointer",
});
const StyledBadge = styled(Badge)({
  cursor: "pointer",
});
const Headers = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <StyledBox1
          flex={1}
          //   sx={{ border: "1px solid red", backgroundColor: "grey" }}
        >
          <StyledTypo
            sx={{
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: " 43px",
              fontFamily: "Lato",
            }}
          >
            NorthStar
          </StyledTypo>
        </StyledBox1>
        <Box
          flex={3}
          //   sx={{
          //     border: "1px solid black",
          //     backgroundColor: "yellow",
          //   }}
        >
          <Box
            sx={{
              position: "relative",
              width: "280px",
              height: "25px",
              top: "36px",
              left: "30px",
              //   border: "1px solid red",
              //   backgroundColor: "white",
            }}
          >
            <Stack direction="row" spacing={15}>
              <StyledTypo2>HOME</StyledTypo2>
              <StyledTypo2>ABOUT US</StyledTypo2>
              <StyledTypo2>CONTACT US</StyledTypo2>
            </Stack>
          </Box>
        </Box>
        <Box
          // flex={0}
          sx={{
            position: "relative",
            // border: "1px solid green",
            left: "50px",
            // backgroundColor: "red",
            height: "80px",
          }}
        >
          <Box
            sx={{
              //   position: "absolute",
              width: "150px",
              height: "25px",
              left: "1177px",
              top: "20px",
              //   border: "1px solid green",
              // backgroundColor: "grey",
              //   right: "0px",
            }}
          ></Box>
          <Box
            sx={{
              position: "relative",
              // border: "1px solid red",
              // backgroundColor: "yellow",
              top: "4px",
              width: "150px",
              height: "30px",
              bottom: "30px ",
            }}
          >
            <Stack direction="row" spacing={15}>
              <StyledBadge>
                <PersonOutlineOutlinedIcon />
              </StyledBadge>

              <StyledBadge badgeContent={10} color="primary">
                <ShoppingBagOutlinedIcon />
              </StyledBadge>
              <StyledBadge>
                <MenuOutlinedIcon />
              </StyledBadge>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Headers;
