import React from "react";
import "./Service.css";
import { NavLink } from "react-router-dom";
import { description } from "../../Components/data/data";
import { PostImgs } from "../Home/Import";
import { PriceData } from "../../Components/data/pricing";

function PostBody() {
  const name = PriceData;
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500 mb-5">
      <h1 className="text-center font-bold text-[18px] lg:text-[28px] text-sky-700 mt-4">
        Dịch vụ xe ghép Quảng Ngãi - Đà Nẵng
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10">
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 my-2">
            {name.map((item, index) => (
              <NavLink to={{
                pathname: `/chi-tiet-dich-vu/${item.from}-${item.to}`,
                search: `?location=${index}`,
              }} key={index}>
                <div className="hover:text-sky-900 hover:-translate-y-1 post-transition">
                  <img
                    src={PostImgs[index]}
                    // alt={item.title}
                    className="w-full h-[200px] lg:h-[200px] object-cover rounded-lg mt-4"
                  />
                  <h3 className="text-sky-400 font-bold text-center text-[16px] pt-3">
                    Xe Ghép {item.from} - {item.to}
                  </h3>
                  <p className="text-center text-[10px] my-1">
                    Tháng 10 , 2023
                  </p>
                  <p className="text-center text-[14px] mb-2">
                    {description(item.from, item.to)[index]}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="font-bold my-5"> Bài Viết Mới </h2>
          <hr />
          {name.map((item, index) => {
            if (index < 10) {
              return (
                <div className="flex my-2" key={index}>
                  <img
                    src={PostImgs[index]}
                    // alt={item.title}
                    className="w-[100px] h-[100px] object-cover"
                  />
                  <div className="ml-2">
                    <h3 className="text-slate-600 font-semibold text-[14px]">
                      Xe Ghép {item.from} - {item.to}
                    </h3>
                    <p className="text-[10px] my-1">Tháng 10 , 2023</p>
                  </div>
                </div>
              );
            }
          })}
          <h2 className="font-bold my-5"> Bài Viết Nổi Bật </h2>
          <ul className="ulli ml-3">
            {name.map((item, index) => (
              <NavLink
                to={{
                  pathname: `/chi-tiet-dich-vu/${item.from}-${item.to}`,
                  search: `?location=${index}`,
                }}
                key={index}
                className={"cursor-pointer"}
              >
                <li className="text-[14px] my-2 text-sky-700" key={index}>
                  Xe Ghép {item.from} - {item.to}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PostBody;
