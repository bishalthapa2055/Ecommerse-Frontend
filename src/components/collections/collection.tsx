import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)({
  position: "absolute",
  left: "35.01%",
  right: "37.02%",
  top: "8.97%",
  bottom: "81.89%",
  backgroundColor: "white",
  border: "1px solid white",
  // alignItems: "center",
});
const Collection = () => {
  return (
    <>
      <StyledBox>
        <Box
          sx={{
            // border: "1px solid green",
            position: "absoulte",
            width: "359px",
            height: "48px",
            left: "488px",
            top: "110px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arimo",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "36px",
              lineHeight: "48px",
              textAlign: "center",
            }}
          >
            Discover NEW Arrivals
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absoulte",
            width: "371.5px",
            height: "48px",
            left: "586px",
            top: "174px",
            // border: "2px solid white",
            // backgroundColor: "whitesmoke",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "48px",
              textAlign: "center",
            }}
          >
            Recently added shirts!
          </Typography>
        </Box>
      </StyledBox>
      {/* </Box> */}
    </>
  );
};

export default Collection;
