import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from "@mui/material";
import image1 from "../../assets/n1.png";
import image2 from "../../assets/n2.png";
import image3 from "../../assets/n3.png";
import image4 from "../../assets/n4.png";
import image5 from "../../assets/n5.png";
import image6 from "../../assets/n6.png";
import image7 from "../../assets/n7.png";
import image8 from "../../assets/n8.png";

const objectofCards = [
  {
    name: "Plain White Shirt",
    price: "$29.00",
    img: { image1 },
  },
  {
    name: "Denim Jacket",
    price: "$19.00",
    img: { image2 },
  },
  {
    name: "Black Polo Shirt",
    price: "$49.00",
    img: { image3 },
  },
  {
    name: "Blue Sweatshirt",
    price: "$39.00",
    img: { image4 },
  },
  {
    name: "Blue Pant Shirt",
    price: "$49.00",
    img: { image5 },
  },
  {
    name: "Dark Blue Shirt",
    price: "$89.00",
    img: { image6 },
  },
  {
    name: "Outcast T  Shirt",
    price: "$19.00",
    img: { image7 },
  },
  {
    name: "Polo Plain Shirt",
    price: "$29.00",
    img: { image8 },
  },
];
const Cards = () => {
  console.log(objectofCards);
  return (
    <>
      <Box
        sx={{
          //   backgroundColor: "#F2F4F6",
          position: "absolute",
          height: "1226px",
          width: "100%",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            // left: "63px",
            top: "270px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* {data.name} */}
              Hello Nepla
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "315px",
            top: "270px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "630px",
            top: "270px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "945px",
            top: "270px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "0px",
            top: "730px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "315px",
            top: "730px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "630px",
            top: "730px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            position: "absolute",
            width: "295px",
            //   width: "100%",
            height: " 412px",
            left: "945px",
            top: "730px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
            sx={{
              position: "absolute",
              width: " 295px",
              height: "342px",
              left: " 0px",
              top: " 0px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Cards;
