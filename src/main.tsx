import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Container maxWidth="lg" sx={{ border: "1px solid black" }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Container>
  </React.StrictMode>
);
