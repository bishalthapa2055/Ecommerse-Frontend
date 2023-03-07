import { Container, styled, Box } from "@mui/material";
import Payment from "./payment";
import Return from "./return";
import Services from "./services";
import Shipping from "./shipping";

const StyledBox = styled(Box)({
  position: "relative",
  border: "1px solid red",
  width: "1366px",
  height: "211px",
  top: "1900px",
  backgroundColor: "yellow",
});
const Index = () => {
  return (
    <StyledBox>
      {/* <Container fixed> */}
      <Shipping />
      <Services />
      <Return />
      <Payment />
      {/* </Container> */}
    </StyledBox>
  );
};

export default Index;
