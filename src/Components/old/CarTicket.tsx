import React from "react";
import { MyContext } from "../../utils/createContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Price } from "../../types/types";
function CarTicket({ from, price, priceOne, to, type }: Price) {
  return (
    <div className="bg-slate-300 w-full rounded-xl px-2 py-2 hover:-translate-y-1 transition-all shadow-md font-semibold">
      <div className="flex justify-between border-b border-slate-800 pb-3 mb-2 relative">
        <h2 className="font-bold text-orange-700"> {from} </h2>
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1e153c"
          className="w-6 h-6 lg:w-8 lg:h-8 absolute left-1/2 transform -translate-x-1/2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>swap-horizontal</title>{" "}
            <g id="Layer_2" data-name="Layer 2">
              {" "}
              <g id="invisible_box" data-name="invisible box">
                {" "}
                <rect width={48} height={48} fill="none" />{" "}
              </g>{" "}
              <g id="icons_Q2" data-name="icons Q2">
                {" "}
                <g>
                  {" "}
                  <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z" />{" "}
                  <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z" />{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div>
          <h2 className="font-bold text-orange-700"> {to} </h2>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <span className=""> Giá : {priceOne}k/ghe </span>
        <span className=""> Thời gian : mọi lúc </span>
      </div>
      <div className="flex justify-between">
        <span className=""> Giá : {price}k/xe </span>
        <span className=""> Loại xe : {type}</span>
      </div>
      <div className=" flex justify-center">
        <NavLink to={"/book-ticket"}>
          <button
            type="button"
            className=" font-semibold py-2.5 px-5 mr-2 mb-2 mt-1 text-sm  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Đặt vé
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default CarTicket;
