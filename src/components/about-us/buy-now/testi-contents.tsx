import { Box, Stack, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import t1 from "../../../assets/aboutus/t1.png";

const MainBox = styled(Box)({
  position: "absolute",
  width: "1200px",
  height: "456px",
  //   left: "223px",
  top: "1350px",
  backgroundColor: "red",
});
const TestiContents = () => {
  return (
    <>
      <MainBox>
        <Box
          sx={{
            position: "relative",
            width: "921px",
            height: "216px",
            left: "193px",
            top: "130px",
            backgroundColor: "yellow",
          }}
        >
          <Avatar
            alt="avatar"
            src={t1}
            sx={{
              position: "relative",
              width: "210px",
              height: "210px",
              //   left: "223px",
              //   top: "2128px",
            }}
          />
        </Box>
      </MainBox>
    </>
  );
};

export default TestiContents;
