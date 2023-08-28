import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 ">
      <div className="grid grid-cols-12 max-w-[1150px] mx-auto">
        <div className="col-span-12 lg:col-span-6 sm:col-span-6 text-slate-400 px-5 ">
          <h2 className="text-white font-semibold my-2">
            Xe Quảng Ngãi - Sa Kỳ - Chu Lai - Đà Nẵng
          </h2>
          <p>Địa chỉ : 333 Nguyễn Trãi , TP Quảng Ngãi</p>
          <p className="my-2"> Điện thoại: 03 8668 7696 </p>
          <p> Email: dotram@gmail.com</p>
          <p className="my-2"> Website: https://xeghepquangngai.net</p>
        </div>
        <div className="col-span-12 sm:col-span-3 lg:col-span-3  text-slate-400 px-5 ">
          <h2 className="text-white font-semibold my-2">LIÊN KẾT</h2>
          <p> về chúng tôi </p>
          <p className="my-2"> Xe Ghép Quảng Ngãi </p>
          <p> Bảng giá xe </p>
          <p className="my-2"> Liên hệ </p>
        </div>
        <div className="col-span-12 sm:col-span-3 lg:col-span-3 text-slate-400 px-5 ">
          <h2 className="text-white font-semibold my-2">TỔNG ĐÀI ĐẶT XE</h2>
          <button className="bg-cyan-500 py-2 px-4 rounded-full text-gray-950 font-bold my-4">
            03 8668 7696
          </button>
        </div>
      </div>
      <hr />
      <div className="w-full  text-slate-400 flex justify-center pt-2 pb-4">
        <div className="text-xs">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <p>
            Powered by <a href="https://nodejs.org/">Node.js</a> and{" "}
            <a href="https://nextjs.org/"> React.js</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
