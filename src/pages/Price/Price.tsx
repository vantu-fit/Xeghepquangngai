import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Pricingtable from "../../Components/PricingTable";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";

function Price() {
  useEffect(() => {
    // Cuộn lên đầu trang khi chuyển đến URL khác
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Contact />
      <Banner />
      <Pricingtable />
      <Footer />
    </>
  );
}

export default Price;
