import { Container, styled, Box, Typography } from "@mui/material";
import Payment from "./payment";
import Return from "./return";
import Services from "./services";
import Shipping from "./shipping";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const StyledBox = styled(Box)({
  position: "absolute",
  // border: "1px solid red",
  width: "100%",
  height: "211px",
  top: "1900px",
  // backgroundColor: "green",
});
const StyledShipping = styled(Box)({
  position: "absolute",
  // left: "4.61%",
  // right: "78.33%",
  top: "70px",
  // bottom: "33.18%",
  border: "1px solid red",
  width: "233px",
  height: "71px",
  // transform: "translateX(-50%)",
});
const FreeShipping = styled(Typography)({
  position: "absolute",
  left: "53px",
  top: "-2px",

  width: "149px",
  height: "26px",

  fontFamily: "Baloo",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "25px",

  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",

  /* heading */

  color: "#1D1D1D",
});
const FreeShippingDesc = styled(Typography)({
  position: "absolute",
  left: "55px",

  width: "189px",
  height: "39px",
  top: "33px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",

  /* text */

  color: "#555555",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <Container maxWidth="lg">
          <StyledShipping>
            <FreeShipping>Free shipping</FreeShipping>
            <FreeShippingDesc>
              Enjoy free shipping on all orders above $100
            </FreeShippingDesc>
          </StyledShipping>
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
