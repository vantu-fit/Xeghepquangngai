import React from "react";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Picture from "../Components/Picture";
import Title from "../Components/Title";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import PropertiTitle from "../Components/PropertiTitle";
function Home() {
  return (
    <>
      <Contact />
      <Header />
      <Picture />
      {/* <PropertiTitle /> */}
      <Title />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
