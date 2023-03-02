import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Container maxWidth="lg" sx={{ border: "1px solid black" }}>
      <App />
    </Container>
  </React.StrictMode>
);
