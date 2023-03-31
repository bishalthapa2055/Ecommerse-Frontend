import React from "react";
import {
  Box,
  styled,
  Typography,
  Rating,
  TextField,
  Autocomplete,
  Stack,
  Button,
} from "@mui/material";
import image from "../../../assets/singlepage/sp1.png";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MailIcon from "@mui/icons-material/Mail";
import CircleIcon from "@mui/icons-material/Circle";
import { theme } from "../../../theme";
const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "1240px",
  height: "1249px",
  //   left: "83px",
  top: "142px",
  // border: "1px solid red",
}));
const ImageBox = styled(Box)({
  position: "absolute",
  width: "550px",
  height: "685px",
});
const StyledTitlePosition = styled(Box)({
  position: "absolute",
  width: "287px",
  height: "48px",
  left: "610px",
  top: "50px",
  // border: "1px solid green",
});
const TitleTypo = styled(Typography)({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  color: "#1D1D1D",
});
const RatingBox = styled(Box)({
  position: "absolute",
  left: "49.25%",
  right: "43.92%",
  top: "8.5%",
  bottom: "85.9%",
  // border: "1px solid red",
  width: "160px",
  height: "48px",
});
const RatingNumber = styled(Typography)({
  position: "absolute",
  width: "21px",
  height: "20px",
  left: "80.25%",
  top: "8.5%",
  fontFamily: "Source Sans Pro",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "16px",
  color: "#1D1D1D",
});
const PriceBox = styled(Box)({
  position: "absolute",
  width: "166px",
  height: "30px",
  left: "49.5%",
  top: "13%",
  // border: "1px solid red",
});
const Price = styled(Typography)({
  position: "absolute",
  width: "76px",
  height: "29px",
  top: "10%",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "29px",

  display: "flex",
  alignItems: "center",
  textAlign: "center",
});
const Description = styled(Typography)({
  position: "absolute",
  width: "550px",
  height: "72px",
  left: "49.5%",
  top: "18%",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",

  color: "#555555",
});
const SizeTypo = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",

  color: "#1D1D1D",
});
const StyledButton = styled(Button)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "14px 30px",
  gap: "10px",

  position: "absolute",
  width: "165px",
  height: "48px",
  left: "49.5%",
  top: "36%",
  backgroundColor: " #024E82",
});
const ButtonTypo = styled(Typography)({
  width: "93px",
  height: "20px",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",

  display: "flex",
  alignItems: "center",
  textAlign: "center",
  textTransform: "uppercase",

  color: "#FFFFFF",

  borderRadius: "3px",
});

const DataBox = styled(Box)({
  position: "absolute",
  width: "550px",
  height: "48px",
  left: "49.5%",
  top: "43%",
  // border: "1px solid red",
});
const DataTypo = styled(Typography)({
  width: "500px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "24px",
  // border: "1px solid green",
  display: "flex",
  justifyContent: "start",
});

const StyledCircleIcon = styled(CircleIcon)({
  width: "32px",
  height: "32px",
});
const DescriptionBox = styled(Box)({
  position: "absolute",
  width: "1240px",
  height: "301px",
  // left: "63px",
  top: "950px",
  // border: "1px solid green",
});

const ReviewsBox = styled(Box)({
  position: "absolute",
  width: "136px",

  height: "56px",
  // left: 66px;
  // top: "1090px",
  border: "2px solid #EBEBEB",
  cursor: "pointer",
});
const RevTypo = styled(Typography)({
  position: "absolute",
  top: "30%",
  left: "15%",
  width: "89px",
  height: "19px",
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "18px",

  display: "flex",
  alignItems: "center",

  color: "#1D1D1D",
});
const AllDatas = styled(Box)({
  boxSizing: "border-box",
  position: "absolute",
  width: "1240px",
  height: "246px",
  // left: "66px",
  top: "20%",
  background: "#FFFFFF",
  border: "1px solid #EBEBEB",
  borderRadius: "0px",
});

const AllDataTypo = styled(Typography)({
  position: "relative",
  width: "1144px",
  height: "150px",
  left: "15px",
  top: "10%",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#555555",
  // border: "1px solid red",
  margin: "20px 20px 20px 20px",
});
const sizes = [
  { label: "Small", subScript: "S" },
  { label: "Medium", subScript: "Md" },
  { label: "Large", subScript: "L" },
  { label: "ExtraLarge ", subScript: "XL" },
];

const Index = () => {
  return (
    <>
      <StyledBox>
        <ImageBox>
          <img
            src={image}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </ImageBox>
        <StyledTitlePosition>
          <TitleTypo>Plain White Shirt</TitleTypo>
        </StyledTitlePosition>
        <RatingBox>
          <Rating
            name="simple-controlled"
            value={4}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{ color: "#D6763C" }}
          />
          <RatingNumber>(15)</RatingNumber>
        </RatingBox>
        <PriceBox>
          <Price
            sx={{
              left: "0%",
              color: "#818181",
              textDecorationLine: "line-through",
            }}
          >
            $69.75
          </Price>
          <Price sx={{ color: "#024E82", left: "50%" }}>$49.50</Price>
        </PriceBox>
        <Description>
          A classic t-shirt never goes out of style. This is our most premium
          collection of shirt. This plain white shirt is made up of pure cotton
          and has a premium finish.
        </Description>
        <Autocomplete
          // disablePortal
          id="combo-box-demo"
          options={sizes}
          sx={{
            position: "absolute",
            width: "210px",
            height: "48px",
            left: "49.5%",
            top: "28%",
            backgroundColor: "#FBFBFB",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Size" />
          )}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{
                border: "1px solid grey",
              }}
              {...props}
            >
              <Box>
                <SizeTypo>{option?.label}</SizeTypo>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "85%",
                }}
              >
                <SizeTypo>{option?.subScript}</SizeTypo>
              </Box>
            </Box>
          )}
        />
        <StyledButton variant="contained">
          <ButtonTypo>Add To Cart</ButtonTypo>
        </StyledButton>
        <DataBox>
          <DataTypo sx={{ color: "#1D1D1D" }}>
            Category:
            <DataTypo sx={{ color: "#555555" }}> Women, Polo, Casual</DataTypo>
          </DataTypo>

          <DataTypo sx={{ color: "#1D1D1D" }}>
            Tags:
            <DataTypo sx={{ color: "#555555" }}>
              Modern, Design, cotton
            </DataTypo>
          </DataTypo>
        </DataBox>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "absolute",
            left: "49.5%",
            right: "38.43%",
            top: "50%",
            bottom: "58.71%",
          }}
        >
          <CircleIcon
            style={{ color: "#F1F1F1", width: "32px", height: "32px" }}
          />
          <StyledCircleIcon style={{ color: "#818181" }} />
          <StyledCircleIcon style={{ color: "#F1F1F1" }} />
          <StyledCircleIcon style={{ color: "#818181" }} />
          <StyledCircleIcon style={{ color: "#F1F1F1" }} />
          <MailIcon
            style={{
              position: "absolute",
              color: "green",
              left: "96%",
              top: "4px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          />
        </Stack>
        <DescriptionBox>
          <ReviewsBox>
            <RevTypo>Descriptions</RevTypo>
          </ReviewsBox>
          <ReviewsBox sx={{ left: "11%" }}>
            <RevTypo>Reviews (0)</RevTypo>
          </ReviewsBox>
          <AllDatas>
            <AllDataTypo>
              A key objective is engaging digital marketing customers and
              allowing them to interact with the brand through servicing and
              delivery of digital media. Information is easy to access at a fast
              rate through the use of digital communications. Users with access
              to the Internet can use many digital mediums, such as Facebook,
              YouTube, Forums, and Email etc.
              <br />
              <br />
              Through Digital communications it creates a Multi-communication
              channel where information can be quickly exchanged around the
              world by anyone without any regard to whom they are.[28] Social
              segregation plays no part through social mediums due to lack of
              face to face communication and information being wide spread
              instead to a selective audience.
            </AllDataTypo>
          </AllDatas>
        </DescriptionBox>
      </StyledBox>
    </>
  );
};

export default Index;
