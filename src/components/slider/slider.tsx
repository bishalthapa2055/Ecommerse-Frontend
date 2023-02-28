import React, { ImgHTMLAttributes } from "react";
import myImage from "../../assets/img_1.png";
import { styled } from "@mui/material";

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
    sx: {
      position: "absolute",
      width: "1366px",
      height: "648px",
      left: "-1px",
      top: "94px",
    },
  };

  return (
    <div>
      <img
        //    src={myImage}

        {...imageProps}
      />
    </div>
  );
};

export default Slider;
