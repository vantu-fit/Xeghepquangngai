import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImageName, getPrice } from "../../apis/api";
import { description } from "../../Components/data/data";
function Post() {
  const { data: name } = useQuery({
    queryKey: ["Pricingtable"],
    queryFn: getPrice,
  });
  const { data: img } = useQuery({
    queryKey: ["ImageName"],
    queryFn: getImageName,
  });
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500">
      <h2 className="text-center text-sky-500 font-semibold text-[25px] my-4">
        Xe Ghép Quảng Ngãi - Đà Nẵng
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 my-2">
        {name?.data.map((item, index) => (
          <NavLink
            to={{
              pathname: `/chi-tiet-dich-vu/${item.from}-${item.to}`,
              search: `?location=${index}`,
            }}
            key={index}
          >
            <div className="hover:text-sky-900 hover:-translate-y-1 post-transition shadow-md pb-3">
              <img
                src={`${(import.meta as any).env.VITE_SERVER}/img/${img?.data[index]}`}
                // alt={item.title}
                className="w-full h-[200px] lg:h-[200px] object-cover rounded-lg mt-4"
              />
              <h3 className="text-sky-400 font-bold text-center text-[16px] pt-3">
                {" "}
                Xe Ghép {item.from} - {item.to}
              </h3>
              <p className="text-center text-[10px] my-1"> Tháng 10 , 2023 </p>
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
