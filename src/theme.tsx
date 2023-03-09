import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007aff",
      light: "skyblue",
    },
    secondary: {
      main: "#ff3b30",
    },
    success: {
      main: "#357a38",
      light: "#4caf50",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: ["Lato", "-apple-system", "Roboto", "Arimo", "Arial"].join(","),
    subtitle1: {
      fontSize: 12,
    },
    h1: {
      fontSize: "12px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "12px",
      fontWeight: 500,
    },
  },
  spacing: 2,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
});

export { theme };
