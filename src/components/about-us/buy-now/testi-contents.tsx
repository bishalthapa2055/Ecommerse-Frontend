import { Box, Stack, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import t1 from "../../../assets/aboutus/t1.png";
import t2 from "../../../assets/aboutus/t2.png";
import t3 from "../../../assets/aboutus/t3.png";
import q from "../../../assets/aboutus/q.png";
import Typography from "@mui/material/Typography";

const MainBox = styled(Box)({
  position: "absolute",
  width: "1200px",
  height: "456px",
  //   left: "223px",
  //   (292 + 10) * index + "px"

  top: 1350 + 10 + "px",
  //   top: "1350px",
  backgroundColor: "red",
});

const objects = [
  {
    img: t1,
    description:
      "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
    name: "Stacy",
  },
  {
    img: t2,
    description:
      "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
    name: "Tiffany",
  },
  {
    img: t3,
    description:
      "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
    name: "James",
  },
];
const TestiContents = () => {
  console.log(objects);
  return (
    <>
      {objects?.map((data, index) => {
        return (
          <>
            <Box
              sx={{
                position: "relative",
                width: "1200px",
                height: "456px",
                //   left: "223px",
                // top: (1350 + 10) * index + "px",
                top: "1350px",
                // backgroundColor: "red",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "921px",
                  height: "216px",
                  left: "193px",
                  top: "130px",
                  //   backgroundColor: "yellow",
                }}
              >
                <Avatar
                  alt="avatar"
                  src={data.img}
                  sx={{
                    position: "relative",
                    width: "210px",
                    height: "210px",
                    //   left: "223px",
                    //   top: "2128px",
                  }}
                />
                <img
                  src={q}
                  alt="quotes"
                  width="48px"
                  height="48px"
                  style={{ position: "absolute", left: "220px", top: "0px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: "663px",
                    height: "102px",
                    left: "250px",
                    top: "70px",
                    //   backgroundColor: "grey",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Baloo",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "36px",
                      color: "#555555",
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "210px",
                    height: "210px",
                    left: "250px",
                    top: "190px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arimo",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "21px",
                      lineHeight: "24px",
                      color: " #1D1D1D",
                    }}
                  >
                    {data.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default TestiContents;
