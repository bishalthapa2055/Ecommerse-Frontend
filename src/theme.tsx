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
});

export { theme };
