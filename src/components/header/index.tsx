import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Logo from "./logo";
import Center from "./center";
import Icons from "./icons";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  // border: "1px solid red",
  height: "88px",
  position: "relative",
  left: "0%",
  right: "0%",
  top: "30.16%",
  // "33.48px",
  bottom: "0%",
  // backgroundColor: "grey",
  backgroundColor: "#FFFFFF",
}));
const Index = () => {
  return (
    // <Container maxWidth="lg">
      <StyledBox>
        <Logo />
        <Center />
        <Icons />
      </StyledBox>
    // </Container>
  );
};

export default Index;
