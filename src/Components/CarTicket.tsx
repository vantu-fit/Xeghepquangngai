import React from "react";
import { MyContext } from "../utils/createContext";
import { useContext } from "react";
function CarTicket() {
  const { isBooking, setIsBooking } = useContext(MyContext);
  return (
    <div className="bg-slate-300 w-full rounded-xl px-2 py-2 hover:-translate-y-1 transition-all shadow-md font-semibold">
      <div className="flex justify-between border-b border-slate-800 pb-3 mb-2">
        <h2 className="font-bold"> Đà Năng </h2>
        <div> -------------</div>
        <h2 className="font-bold"> Quang Ngai </h2>
      </div>
      <div className="flex justify-between py-2">
        <span className=""> Gia : 250k/ghe </span>
        <span className=""> Thời gian : mọi lúc </span>
      </div>
      <div className="flex justify-between">
        <span className=""> Gia : 1000k/xe </span>
        <span className=""> </span>
      </div>
      <div className=" flex justify-center">
        <button
          type="button"
          className=" font-semibold py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setIsBooking(true)}
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
}

export default CarTicket;
