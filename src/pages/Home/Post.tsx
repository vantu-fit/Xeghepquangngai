import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { description } from "../../Components/data/data";
import { PostImgs } from "./Import";
import { PriceData } from "../../Components/data/pricing";
function Post() {
  const name = PriceData;
  const data = PostImgs;
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500">
      <h2 className="text-center text-sky-500 font-semibold text-[25px] my-4">
        Xe Ghép Quảng Ngãi - Đà Nẵng
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 my-2">
        {name.map((item, index) => (
          <NavLink
            to={{
              pathname: `/chi-tiet-dich-vu/${item.from}-${item.to}`,
              search: `?location=${index}`,
            }}
            key={index}
          >
            <div className="hover:text-sky-900 hover:-translate-y-1 post-transition shadow-md pb-3">
              <img
                src={PostImgs[index]}
                alt={`Xe Ghép ${item.from} - ${item.to}`}
                className="w-full h-[200px] lg:h-[200px] object-cover rounded-lg mt-4"
              />
              <h3 className="text-sky-400 font-bold text-center text-[16px] pt-3">
                {" "}
                Xe Ghép {item.from} - {item.to}
              </h3>
              <p className="text-center text-[10px] my-1"> {(new Date()).getMonth() > 1 ? new Date().getMonth() : 1 } , {new Date().getFullYear()} </p>
              <p className="text-center text-[14px] mb-2">
                {description(item.from, item.to)[index]}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Post;
