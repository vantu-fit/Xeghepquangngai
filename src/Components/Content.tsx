import React from "react";
import Pricing from "./Pricing";
import Title from "./Title";
import BookTicket from "./BookTicket";
import { MyContext } from "../utils/createContext";
import { useContext } from "react";
function Content() {
  const{ isBooking, setIsBooking } = useContext(MyContext);
  console.log(isBooking)
  console.log('ok')
  return (
    <>
      <Title />
      {!isBooking && <Pricing />}
      {isBooking && <BookTicket />}
    </>
  );
}

export default Content;
