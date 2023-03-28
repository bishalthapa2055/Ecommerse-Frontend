import React from "react";
import { Box, styled, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const MainBox = styled(Box)({
  position: "absolute",
  width: "820px",
  height: "408px",
  //   left: "63px",
  top: "737px",
  // border: "1px solid red",
});
const StyledBox = styled(Box)({
  position: "absolute",
  // border: "1px solid red",
  width: "400px",
  height: "86px",
});

const StyledTypo = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#555555",
});

const StyledText = styled(TextField)({
  // boxSizing: " border-box",
  position: "absolute",
  width: "400px",
  height: "58px",
  left: "0px",
  top: "28px",
  backgroundColor: "#FFFFFF",
  // border: "1px solid #EBEBEB",
});
const MessageBox = styled(Box)({
  position: "absolute",
  width: "820px",
  height: "220px",
  left: "0px",
  top: "106px",
});
const StyledButton = styled(Button)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "18px 34px",
  gap: "10px",
  // position: "absolute",
  width: "192px",
  height: "58px",
  left: " 0px",
  top: "350px",
  backgroundColor: "#024E82",
  borderRadius: "10px",
});
const ButtonTypo = styled(Typography)({
  width: "400px",
  // top: "30px",
  height: "22px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "22px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  textTransform: "uppercase",
  flexGrow: 0,
});
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    // alert("Button Clicked");
    setOpen(true);
  };
  const handleClickBack = () => {
    setOpen(false);
  };
  // console.log(name, email, message);
  return (
    <>
      {open ? (
        <>
          <Typography
            sx={{
              position: "relative",
              width: "659px",
              height: "48px",
              left: "100px",
              top: "500px",
              fontFamily: "Arimo",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "48px",

              color: "#3A3939",
            }}
          >
            Message sent. We’ll contact you soon.
          </Typography>
          <StyledButton
            variant="contained"
            onClick={handleClickBack}
            sx={{
              position: "relative",
              width: "143px",
              left: "0px",
              top: "680px",
            }}
          >
            <ButtonTypo>Go Back</ButtonTypo>
          </StyledButton>
        </>
      ) : (
        <>
          <MainBox>
            <StyledBox
              sx={{
                left: "0px",
                top: "0px",
              }}
            >
              <StyledTypo>Name</StyledTypo>
              <StyledText
                id="name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </StyledBox>
            <StyledBox sx={{ left: "420px", top: "0px" }}>
              <StyledTypo>EMail</StyledTypo>
              <StyledText
                id="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledBox>
            <MessageBox>
              <StyledTypo>Message</StyledTypo>
              <TextField
                id="message"
                variant="outlined"
                multiline
                rows={6.75}
                sx={{
                  // boxSizing: "border-box",
                  position: "absolute",
                  width: "820px",
                  height: "188px",
                  left: "0px",
                  border: "1px solid #EBEBEB",
                }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </MessageBox>
            <StyledButton
              variant="contained"
              onClick={handleClick}
              sx={{
                position: "absolute",
              }}
            >
              <ButtonTypo>Send Message</ButtonTypo>
            </StyledButton>
          </MainBox>
        </>
      )}
    </>
  );
};
export default Form;
