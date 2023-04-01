import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
const StyledBox = styled(Box)({
  position: "absolute",
  width: "1240px",
  height: "530px",
  // left: 63px
  top: "263px",
  border: "1px solid red",
});
const BoxCoupen = styled(Box)({
  position: "relative",
  width: "531px",
  height: "312px",
  //   left: "63px",
  top: "40px",
  border: "1px solid red",
});
const CartTotal = styled(Typography)({
  position: "absolute",
  width: "186px",
  height: "48px",
  // left: 63px;
  // top: 481px

  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  /* identical to box height, or 133% */

  display: "flex",
  alignItems: "flex-end",

  /* heading */

  color: "#1D1D1D",
});
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Index = () => {
  return (
    <>
      <StyledBox>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    <CloseIcon sx={{ color: "#818181" }} />
                  </TableCell>

                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <BoxCoupen>
          <CartTotal>Cart Totals </CartTotal>
        </BoxCoupen>
      </StyledBox>
    </>
  );
};

export default Index;
