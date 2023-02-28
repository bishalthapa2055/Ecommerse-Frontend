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
      main: "green",
      light: "#4caf50",
    },
    text: {
      primary: "black",
    },
  },
});

export { theme };
