import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImageName, getPrice } from "../../apis/api";
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
          <NavLink to={"/chi-tiet-dich-vu"} key={index}>
            <div className="hover:text-sky-900 hover:-translate-y-1 post-transition">
              <img
                src={`http://localhost:4000/img/${
                  img?.data[Math.floor(Math.random() * (img?.data.length || 0))]
                }`}
                // alt={item.title}
                className="w-full h-[200px] lg:h-[200px] object-cover rounded-lg mt-4"
              />
              <h3 className="text-sky-400 font-bold text-center text-[16px] pt-3">
                {" "}
                Xe Ghép {item.from} - {item.to}
              </h3>
              <p className="text-center text-[10px] my-1"> Tháng 10 , 2023 </p>
              <p className="text-center text-[14px] mb-2">
                {" "}
                "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc
                ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để
                có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với
                dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ
                đáp ứng được tất cả những yêu cầu của bạn.",
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Post;
