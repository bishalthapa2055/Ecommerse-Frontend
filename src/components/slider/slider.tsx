import React, { ImgHTMLAttributes } from "react";
import myImage from "../../assets/img_1.png";
import { Box, Container, styled, Typography } from "@mui/material";

interface MyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sx?: {
    position?: string;
    width?: string;
    height?: string;
    left?: string;
    top?: string;
  };
}
const Slider: React.FC = () => {
  const imageProps: MyImageProps = {
    src: myImage,
    alt: "Image description",
    // fixed,
    sx: {
      position: "absolute",
      // width: "1366px",
      width: "100%",
      height: "648px",
      left: "-10px",
      top: "94px",
    },
  };

  return (
    <>
      {/* <Container fixed> */}
      <Box>
        <img
          // src={myImage}
          {...imageProps}
          // style={{
          //   objectFit: "cover",
          //   width: "100%",
          //   height: "100%",
          // }}
        ></img>
        <Box
          sx={{
            // border: "1px solid black",
            position: "absolute",
            width: "492.42px",
            // width: "100%",
            height: "104px",
            left: "770.03px ",
            top: "296px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: "48px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#FFFFFF",
              // textShadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }}
          >
            stylist picks beat the heat
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: "18px  36px",
            gap: "10px",
            boxSizing: "border-box",

            position: "absolute",
            width: "175.16px",
            height: "58px",
            left: "920.66px",
            top: "448px",

            border: "5px solid red",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              textTransform: "uppercase",
              bordeRadius: "3px",
              height: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",

                width: "118px",
                height: " 22px",

                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "21px",
                lineHeight: "22px",
              }}
            >
              SHOP NOW
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <h1>Hello NwpL HOFHADSHFJDHFHDKJ</h1> */}
      {/* </Container> */}
    </>
  );
};

export default Slider;
