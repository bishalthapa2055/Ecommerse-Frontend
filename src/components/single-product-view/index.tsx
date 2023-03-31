import Container from "@mui/material/Container";

import Headers from "../about-us/header/header";

import FooterForSinglePage from "../footer/footerForSinglePage";
import Content from "./content";

const Index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Headers />
        <Content />
        <FooterForSinglePage />
      </Container>
    </>
  );
};

export default Index;
