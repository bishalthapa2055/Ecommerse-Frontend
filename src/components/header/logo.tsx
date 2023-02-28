import { Box, Typography, styled } from "@mui/material";

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: "156px",
  height: "60px",
  fontWeight: "400px",
  fontSize: "36px",
  lineHeight: "50px",
  fontFamily: "Lato",
  fontStyle: "normal",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "3px",
}));

const Logo = () => {
  return (
    <Box flex={1}>
      <Box
        sx={{
          position: "absolute",
          width: "156px",
          height: "44px",
          //   left: "65px",
          top: "17px",
        }}
      >
        <StyledTypo>NorthStar</StyledTypo>
      </Box>
    </Box>
  );
};

export default Logo;
