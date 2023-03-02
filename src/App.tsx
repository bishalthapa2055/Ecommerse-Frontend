import Container from "@mui/material/Container";
import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Slider from "./components/slider/";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Slider />
    </ThemeProvider>
  );
}

export default App;
