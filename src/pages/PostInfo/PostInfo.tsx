import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Properti from "./Properti";
import Contact from "../../Components/Contact";
import { useParams } from "react-router-dom";

function PostInfo() {
  const param = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);
  return (
    <>
      <Header />
      <Contact />
      <Properti />
      <Footer />
    </>
  );
}

export default PostInfo;
