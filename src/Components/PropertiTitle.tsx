import React from "react";
import { Post } from "../types/types";
import { NavLink } from "react-router-dom";

function PropertiTitle({ title, content, image }: Post) {
  return (
    <div className="max-h-[80%] fixed w-[90%] left-1/2 -translate-x-1/2 top-[10%] bg-slate-100 z-40 rounded-lg overflow-y-scroll">
      <div className="absolute top-0 right-0 w-5 h-5">
        <NavLink to={"/"}>
          <svg
            fill="#101f2d"
            width="64px"
            height="64px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#101f2d"
            className="w-full h-full"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>cross-round</title>{" "}
              <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z" />{" "}
            </g>
          </svg>
        </NavLink>
      </div>
      <h2 className="uppercase text-center text-red-500 font-semibold text-[14px] my-2 ">
        {title}
      </h2>
      <img
        className="object-fill w-[90%] mx-auto border-[3px] border-orange-500"
        src={image}
        alt=""
      />
      <p className="w-[85%] mx-auto mt-2 text-[12px] text">{content}</p>
    </div>
  );
}

export default PropertiTitle;
