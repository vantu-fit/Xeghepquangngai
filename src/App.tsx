import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Picture from "./Components/Picture";
import Contact from "./Components/Contact";
import React from "react";
function App() {
  return (
    <>
      <Contact />
      <Navigation />
      <Picture />
      <Content />
      <Footer />
    </>
  );
}

export default App;
