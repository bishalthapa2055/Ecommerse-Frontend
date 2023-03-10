import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Paper,
  styled,
  Stack,
  Container,
} from "@mui/material";
import image1 from "../../assets/hs1.png";
import image2 from "../../assets/hs2.png";
import image3 from "../../assets/hs3.png";
import image4 from "../../assets/hs4.png";
import CardIndividuals from "./cardIndividuals";
// import theme from "../../theme";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "red",
  // ...theme.typography.body2,
  //   padding: theme.spacing(5),
  textAlign: "center",
  // elevation: 0,
  //   color: theme.palette.text.secondary,
}));

// const objects = [
//   {
//     name: "Gray Polo Shirt",
//     image: image1,
//     price: "$49.00",
//   },
//   {
//     name: "Red Shirt",
//     image: image2,
//     price: "$69.00",
//   },
//   {
//     name: "Polo White Shirt",
//     image: image3,
//     price: "$29.00",
//   },
//   {
//     name: "Pink Cashy Shirt",
//     image: image4,
//     price: "$39.00",
//   },
// ];
const Cards = () => {
  // console.log(objects);
  return (
    <>
      <Stack direction="row" spacing={5}>
        <Item>
          <Card
            sx={{
              position: "absolute",
              width: "295px",
              //   width: "100%",
              height: " 412px",
              // left: "63px",
              top: "270px",

              // backgroundColor: "green",
              //   border: "none",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={image1}
              alt="hs1"
              sx={{
                position: "absolute",
                width: "100%",
                height: "342px",
                left: " 0px",
                top: " 0px",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                width: "200px",
                height: "26px",
                left: "50px",
                top: "340px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Baloo",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "25px",
                  textAlign: "center",
                }}
              >
                Gray Polo Shirt
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                position: "absolute",
                width: "51px",
                height: "20px",
                left: "122px",
                top: "370px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                $49.00
              </Typography>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Card
            sx={{
              position: "absolute",
              width: "295px",
              // width: "100%",
              height: " 412px",
              left: "708px",
              top: "270px",
              barder: "1px solid red",
              // backgroundColor: "green",
              //   border: "none",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={image3}
              alt="hs1"
              sx={{
                position: "absolute",
                width: "100%",
                height: "342px",
                left: " 0px",
                top: " 0px",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                width: "200px",
                height: "26px",
                left: "45px",
                top: "340px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Baloo",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "25px",
                  textAlign: "center",

                  // left: "200px",
                }}
              >
                Polo White Shirt
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                position: "absolute",
                width: "51px",
                height: "20px",
                left: "122px",
                top: "370px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                $29.00
              </Typography>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Card
            sx={{
              position: "absolute",
              width: "295px",
              //   width: "100%",
              height: " 412px",
              left: "395px",
              top: "270px",
              barder: "1px solid red",
              // backgroundColor: "green",
              //   border: "none",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={image2}
              alt="hs1"
              sx={{
                position: "absolute",
                width: "100%",
                height: "342px",
                left: " 0px",
                top: " 0px",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                width: "200px",
                height: "26px",
                left: "45px",
                top: "340px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Baloo",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "25px",
                  textAlign: "center",

                  // left: "200px",
                }}
              >
                Red Shirt
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                position: "absolute",
                width: "51px",
                height: "20px",
                left: "122px",
                top: "370px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                $69.00
              </Typography>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Card
            sx={{
              position: "absolute",
              width: "295px",
              //   width: "100%",
              height: " 412px",
              left: "1018px",
              top: "270px",
              barder: "1px solid red",
              // backgroundColor: "green",
              //   border: "none",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={image4}
              alt="hs1"
              sx={{
                position: "absolute",
                width: "100%",
                height: "342px",
                left: " 0px",
                top: " 0px",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                width: "200px",
                height: "26px",
                left: "45px",
                top: "340px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Baloo",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "25px",
                  textAlign: "center",

                  // left: "200px",
                }}
              >
                Pink Cashy Shirt
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                position: "absolute",
                width: "51px",
                height: "20px",
                left: "122px",
                top: "370px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                $39.00
              </Typography>
            </CardContent>
          </Card>
        </Item>
      </Stack>
    </>
  );
};

export default Cards;
