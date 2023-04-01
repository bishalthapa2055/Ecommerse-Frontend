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
function App() {
  return (
    <>
      {/* //for home */}
      {/* <Header /> */}
      {/* <Slider /> */}
      {/* <Collection /> */}
      {/* <Services />  */}
      {/* <Promo /> */}
      {/* <BestSelling /> */}
      {/* <Footer /> / */}
      {/* for abour us section */}
      {/* <AboutUs /> */}
      {/* for contact use section */}
      {/* <ContactUs /> */}
      {/* for contact sucessfull  */}
      {/* <ContactSucess /> */}
      {/* fot single page view */}

      {/* <SinglePageView /> */}
      {/* for cart page  */}

      <Cart />
    </>
  );
}

export default App;
