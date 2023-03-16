import { Container } from "@mui/material";
import Collection from "./components/collections";
import Header from "./components/header";
import Services from "./components/services";
import Slider from "./components/slider/";
import Promo from "./components/promo";
import BestSelling from "./components/best-selling";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Collection />
      {/* <Services /> */}
      <Promo />
      <BestSelling />
      <Footer />
    </>
  );
}

export default App;
