import React from "react";

function Banner() {
  return (
    <section className="w-full">
      <div
        className="bg-cover w-full h-[400px] lg:h-[700px] bg-center bg-no-repeat pt-10 pl-10 lg:pl-20 lg:pt-20"
        style={{
          backgroundImage: `url('${
            import.meta.env.VITE_SERVER
          }/img/ce80b7d36c8f1d9eb44bfc700.jpeg')`,
        }}
      >
        <h1 className="uppercase text-slate-900 text-[20px] font-bold lg:text-[30px]">
          {" "}
          Dịch vụ xe ghép giá rẻ{" "}
        </h1>
        <h2 className="text-slate-700  font-semibold text-[10px] my-1 lg:text-[15px]">
          Nhận Ghép khách - Bao xe - Gửi đồ - Du lịch
        </h2>
        <ul className="text- text-[10px] ml-2 lg:text-[14px] leading-6">
          <li> Xe Ghép từ 250k/ghế </li>
          <li> Xe 4 chỗ từ 1.000k/xe </li>
          <li> Xe 7 chỗ từ 1.200k/xe </li>
          <li> Chuyên các tuyến từ Quảng Ngãi - Đà Nẵng</li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
