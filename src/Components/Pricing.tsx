import React from "react";
import OnePrice from "./OnePrice";
import CarTicket from "./CarTicket";

function Pricing() {
  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          Bang gia
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <CarTicket />
          <CarTicket />
          <CarTicket />
          <CarTicket />
          <CarTicket />
          <CarTicket />
          <CarTicket />


        </div>
      </div>
    </section>
  );
}

export default Pricing;
