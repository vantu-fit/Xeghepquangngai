import React from "react";

function Banner() {
  return (
    <section className="w-full">
      <div
        className="bg-cover w-full h-[400px] lg:h-[700px] bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('${
            (import.meta as any).env.VITE_SERVER
          }/img/ce80b7d36c8f1d9eb44bfc700.jpeg')`,
        }}
      >
        {" "}
        <div className="bg-gradient-to-r from-blue-900 to-transparent pt-10 pl-10 lg:pl-20 lg:pt-20 pb-3">
          <h1 className="uppercase text-sky-400 text-[20px] font-bold lg:text-[30px]">
            {" "}
            Dịch vụ xe ghép giá rẻ{" "}
          </h1>
          <h2 className="text-slate-300  font-semibold text-[10px] my-1 lg:text-[15px]">
            Nhận Ghép khách - Bao xe - Gửi đồ - Du lịch
          </h2>
          <h2 className="text-slate-300  font-semibold text-[10px] my-1 lg:text-[15px]">
            Xe ghép tuyến cố định hằng ngày
          </h2>
          <h2 className="text-slate-300  font-semibold text-[10px] my-1 lg:text-[15px]">
            Xe thăm khám chữa bệnh
          </h2>
          <ul className="text- text-[10px] ml-2 lg:text-[14px] leading-6 font-medium text-slate-100">
            <li> Xe Ghép từ 250k/ghế </li>
            <li> Xe 4 chỗ từ 1.000k/xe </li>
            <li> Xe 7 chỗ từ 1.200k/xe </li>
            <li> Chuyên các tuyến từ Quảng Ngãi - Đà Nẵng</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Banner;
