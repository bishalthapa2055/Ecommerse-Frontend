import { Container, styled, Box } from "@mui/material";
import Payment from "./payment";
import Return from "./return";
import Services from "./services";
import Shipping from "./shipping";

const StyledBox = styled(Box)({
  position: "absolute",
  // border: "1px solid red",
  width: "100%",
  height: "211px",
  top: "1900px",
});
const Index = () => {
  return (
    <>
      <StyledBox>
        <Container maxWidth="lg">
          <Shipping />
          {/* <Services /> */}
          {/* <Return /> */}
          {/* <Payment /> */}
        </Container>
      </StyledBox>
    </>
  );
};

export default Index;
