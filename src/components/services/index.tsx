import { Container, styled, Box, Typography } from "@mui/material";
import Payment from "./payment";
import Return from "./return";
import Services from "./services";
import Shipping from "./shipping";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportIcon from "@mui/icons-material/Support";
import ReplayIcon from "@mui/icons-material/Replay";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
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
  // left: (292 + 10) * index + "px" ? (292 + 10) * index + "px" : 0,
  // bottom: "33.18%",
  // border: "1px solid red",
  width: "233px",
  height: "71px",
  // transform: "translateX(-50%)",
});
const FreeShipping = styled(Typography)({
  position: "absolute",
  left: "53px",
  top: "-2px",

  width: "300px",
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
const serviceArray = [
  {
    icon: <LocalShippingIcon />,
    name: "Free shipping",
    description: "Enjoy free shipping on all orders above $100",
  },
  {
    icon: <SupportIcon />,
    name: "Support 24/7",
    description: "Our support team is there to help you for queries",
  },
  {
    icon: <ReplayIcon />,
    name: "30 Days Return",
    description: "Simply return it within 30 days for an exchange.",
  },
  {
    icon: <FingerprintIcon />,
    name: "100% Payment Security",
    description: "Our payments are secured with 256 bit encryption",
  },
];

const styledIcon = styled(LocalShippingIcon)({
  position: "absolute",
  left: "0%",
  right: "87.12%",
  top: "0%",
  bottom: "60.56%",
  fontFamily: "Font Awesome 5 Free",
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "24px",
  lineHeight: "28px",
  /* identical to box height */

  display: "flex",
  alignItems: "center",
  color: "#024E82",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <Container maxWidth="lg">
          {serviceArray?.map((data, index) => {
            return (
              <>
                <Container maxWidth="lg">
                  <StyledShipping
                    sx={{
                      // position: "relative",
                      left: index ? (300 + 40) * (index + 0) + "px" : 0,
                    }}
                  >
                    <FreeShipping>{data.name}</FreeShipping>

                    {data.icon}

                    <FreeShippingDesc>{data.description}</FreeShippingDesc>
                  </StyledShipping>
                </Container>
              </>
            );
          })}
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
