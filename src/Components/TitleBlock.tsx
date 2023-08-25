import React from "react";
import { Post } from "../types/types";
import { NavLink } from "react-router-dom";

function TitleBlock({ _id, content, image, title }: Post) {
  return (
    <NavLink to={`/chi-tiet/${_id}`}>
      <div className="w-full h-[100px] lg:h-[200px] my-2 py-2 grid grid-cols-12 gap-1 shadow-lg rounded-md">
        <div className="col-span-4 lg:col-span-3 h-full">
          <img
            src={image}
            alt=""
            className="h-[90px] lg:h-[180px] rounded-xl py-1 w-full"
          />
        </div>
        <div className="col-span-8 lg:col-span-9 overflow-y-hidden pl-2">
          <h3 className="uppercase text-[12px] lg:text-[22px] font-semibold ">
            {title}
          </h3>
          <span className="text-[12px] lg:text-[16px]"> {content} </span>
        </div>
      </div>
    </NavLink>
  );
}

export default TitleBlock;
