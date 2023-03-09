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
} from "@mui/material";
import image1 from "../../assets/hs1.png";
import image2 from "../../assets/hs2.png";
import image3 from "../../assets/hs3.png";
import image4 from "../../assets/hs4.png";
import CardIndividuals from "./cardIndividuals";
// import theme from "../../theme";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  //   padding: theme.spacing(5),
  textAlign: "center",
  elevation: 0,
  //   color: theme.palette.text.secondary,
}));

const objects = [
  {
    name: "Gray Polo Shirt",
    image: { image1 },
    price: "$49.00",
  },
  {
    name: "Red Shirt",
    image: { image2 },
    price: "$69.00",
  },
  {
    name: "Polo White Shirt",
    image: { image3 },
    price: "$29.00",
  },
  {
    name: "Pink Cashy Shirt",
    image: { image4 },
    price: "$39.00",
  },
];
const Cards = () => {
  console.log(objects);
  return (
    <>
      <Stack direction="row" spacing={10}>
        {/* <Item>
          <Card
            sx={{
              position: "absolute",
              width: "315px",
              //   width: "100%",
              height: " 432px",
              // left: "63px",
              top: "260px",
              backgroundColor: "whitesmoke",
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
                width: "109px",
                height: "26px",
                left: "90px",
                top: "340px",
                // border: "2px solid red",
                backgroundColor: "none",
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
        </Item> */}
        {objects.map((data) => (
          <Item>
            <CardIndividuals data={data} />
          </Item>
        ))}
      </Stack>
    </>
  );
};

export default Cards;
