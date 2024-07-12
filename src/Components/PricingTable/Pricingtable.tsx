import React from "react";
import "./PricingTable.css";
import { PriceData } from "../data/pricing";
function Pricingtable() {
  const data = PriceData
  //   {
  //     from: "Quảng Ngãi",
  //     to: "Đà Nẵng",
  //     price: 1000,
  //     priceOne: 250,
  //     type: "7 Chỗ",
  //   },
  //   {
  //     from: "Quảng Ngãi",
  //     to: "Đà Nẵng",
  //     price: 1000,
  //     priceOne: 250,
  //     type: "7 Chỗ",
  //   },
  //   {
  //     from: "Quảng Ngãi",
  //     to: "Đà Nẵng",
  //     price: 1000,
  //     priceOne: 250,
  //     type: "7 Chỗ",
  //   },
  //   {
  //     from: "Quảng Ngãi",
  //     to: "Đà Nẵng",
  //     price: 1000,
  //     priceOne: 250,
  //     type: "4 Chỗ",
  //   },
  // ];
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500 my-10">
      {/* class="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0  top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)]  dark:bg-[center_top_-1px] " */}
      <h2 className="text-sky-400 uppercase font-bold w-full text-center my-3">
        {" "}
        bảng giá{" "}
      </h2>
      <p className="text-center my-3">
        Quý khách hàng có nhu cầu Đặt xe trực tuyến hoặc cần hỗ trợ tư vấn các
        dịch vụ về Xe Quảng Ngãi – Đà Nẵng, xin vui lòng liên hệ với chúng tôi
        qua những kênh liên lạc dưới đây hoặc gọi trực tiếp vào Hotline 0386
        6876 96. chúng tôi luôn sẵn sàng trực tiếp hỗ trợ quý khách 24/7.
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="uppercase">Tuyến xe</th>
            <th>Loại xe</th>
            <th>giá xe</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.from} - {item.to}{" "}
              </td>
              <td>{item.type}</td>
              <td>
                {item.priceOne}k/ghế - {item.price}k/xe{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Pricingtable;
