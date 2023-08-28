import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BookForm from "../../Components/BookForm";
import Pricingtable from "../../Components/PricingTable";
import Post from "./Post";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Contact />
      <Banner />
      <BookForm />
      <Pricingtable />
      <Post />
      <Footer />
    </>
  );
}

export default Home;
