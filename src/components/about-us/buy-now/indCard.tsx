import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import f1 from "../../../assets/aboutus/f1.png";
import React from "react";

const IndCard = (array: any) => {
  console.log(array.array);
  return (
    <>
      {array?.array?.map((data: any, index: any) => {
        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "295px",
              height: "364px",
              left: (295 + 10) * index + "px" ? (295 + 10) * index + "px" : 0,
              top: "270px",
              //   border: "1px solid white",
              //   backgroundColor: "grey",
              margin: "10px",
            }}
          >
            <Card>
              <CardActionArea>
                <>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={data.img}
                    alt="founder Imagees"
                    sx={{
                      width: "295px",
                      height: "280px",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                  </CardContent>
                </>
              </CardActionArea>
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default IndCard;
