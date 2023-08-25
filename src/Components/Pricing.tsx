import React from "react";
import OnePrice from "./OnePrice";
import CarTicket from "./CarTicket";
import { useQuery } from "@tanstack/react-query";
import { getPrice } from "../apis/api";
import { ResponseApi } from "../types/response";
import { Price } from "../types/types";
function Pricing() {
  const { data } = useQuery({
    queryKey: ["prices"],
    queryFn: getPrice,
  });
  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          Bảng giá
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {data?.data.map((price: Price) => (
            <CarTicket
              from={price.from}
              to={price.to}
              price={price.price}
              priceOne={price.priceOne}
              type={price.type}
              key={price._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
