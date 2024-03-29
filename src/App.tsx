import { Container } from "@mui/material";
import Collection from "./components/collections";
import Header from "./components/header";
import Services from "./components/services";
import Slider from "./components/slider/";
import Promo from "./components/promo";
import BestSelling from "./components/best-selling";
import Footer from "./components/footer";
import AboutUs from "../src/components/about-us";
import ContactUs from "./components/contact-us";
import SinglePageView from "./components/single-product-view";
import ContactSucess from "./components/contact-sucess";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Home from "./home";
function App() {
  return (
    <>
      {/* //for home */}
      <Home />
      {/* for abour us section */}
      {/* <AboutUs /> */}
      {/* for contact use section */}
      {/* <ContactUs /> */}
      {/* for contact sucessfull  */}
      {/* <ContactSucess /> */}
      {/* fot single page view */}
      {/* <SinglePageView /> */}
      {/* for cart page  */}
      {/* <Cart /> */}
      {/* for checkout  */}
      {/* <Checkout /> */}
    </>
  );
}

export default App;
