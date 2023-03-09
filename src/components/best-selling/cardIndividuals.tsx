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
// import theme from "../../theme";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  //   padding: theme.spacing(5),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const CardIndividuals = (data: any) => {
  return (
    <>
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
          image={data.image}
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
            {data.name}
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
            {data.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardIndividuals;
