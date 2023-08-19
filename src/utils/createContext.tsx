import React, { createContext, useContext, useState } from "react";

// Tạo context
const MyContext = createContext({});

// Tạo provider
const MyProvider = ({ children }) => {
  const [isBooking, setIsBooking] = useState<Boolean>(false);

  return (
    <MyContext.Provider value={{ isBooking, setIsBooking }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
