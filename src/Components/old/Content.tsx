import React from "react";
import Pricing from "./Pricing";
import Title from "./Title";
import BookTicket from "./BookTicket";
import { MyContext } from "../../utils/createContext";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
function Content() {
  return (
    <>
      <Title />
    </>
  );
}

export default Content;
