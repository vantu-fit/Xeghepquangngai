import React from "react";
import { getPrice } from "../../apis/api";
import { useQuery } from "@tanstack/react-query";

function Properti() {
  const data = [
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
    {
      title: "Xe Ghép Quảng Ngãi - Đà Nẵng giá rẻ",
      description: "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng",
      content:
        "Bạn đang cần tìm xe để di chuyển từ Quảng Ngãi đi Đà Nẵng hoặc ngược lại? Bạn đang phân vân không biết nên chọn hãng xe nào để có thể di chuyển một cách an toàn và tiết kiệm nhất? Hãy đến với dịch vụ xe ghép Quảng Ngãi - Đà Nẵng của chúng tôi. Chúng tôi sẽ đáp ứng được tất cả những yêu cầu của bạn.",
      image: "http://localhost:4000/img/33576a5c500ae532499d8ac00.png",
    },
  ];
  const { data : name } = useQuery({
    queryKey: ["Pricingtable"],
    queryFn: getPrice,
  });
  console.log(name?.data)
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate() - 2;
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500 mb-5 leading-7">
      <h1 className="text-center font-bold text-[18px] lg:text-[28px] text-sky-700 mt-4">
        Dịch vụ xe ghép Quảng Ngãi - Đà Nẵng
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10">
        <div className="col-span-3">
          <div className=" my-2">
            <h3 className="uppercase text-slate-600 text-center text-[12px] font-semibold">
              {" "}
              xe ghép quảng ngãi - đà nẵng{" "}
            </h3>
            <h1 className="font-bold text-slate-700 text-center text-[30px]">
              {" "}
              Dịch vụ xe Chu Lai - Đức Phổ{" "}
            </h1>
            <h3 className="uppercase text-slate-600 text-center text-[12px] font-medium">
              {" "}
              {day} Tháng {month}, {year}{" "}
            </h3>
            <p>
              {" "}
              Trường Phát Tourist dịch vụ xe Chu Lai – Đức Phổ chất lượng đảm
              bảo và cam kết mang đến sự hài lòng dành cho bạn. Nếu bạn đang
              muốn đến địa điểm này và muốn di chuyển thoải mái, nhanh chóng,
              tiết kiệm thì nhớ đừng quên nhấc máy gọi ngay cho Trường Phát
              Tourist để được tư vấn, báo giá chi tiết và đặt lịch xe ngay nhé!
            </p>
            <img
              src={`${import.meta.env.VITE_SERVER}/img/33576a5c500ae532499d8ac00.png`}
              alt=""
              className="w-[90%] lg:h-[400px] h-[150px] sm:h-[300px] object-cover my-5 mx-auto"
            />
            <div className="bg-slate-200 border-[1px] border-slate-950 px-4 py-3">
              <h3 className="text-center font-semibold "> Mục lục </h3>
              <ol className="ml-3 leading-6 list-decimal">
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Giới thiệu về Đức Phổ{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Địa điểm nổi bật ở Đức Phổ{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Các dịch vụ của chúng tôi{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Lý do bạn nên chọn chúng tôi{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Bảng giá dịch vụ{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Hình ảnh xe{" "}
                </li>
                <li className="text-[14px] hover:text-sky-600 transition">
                  {" "}
                  Liên hệ đặt xe{" "}
                </li>
              </ol>
            </div>
            <h2 className="font-bold text-slate-700 text-[25px] my-3">
              {" "}
              Dịch vụ xe Đà Nẵng - Quảng ngãi{" "}
            </h2>
            <p>
              Khoảng cách đi lại từ sân bay Chu Lai đi về Đức Phổ tầm khoảng
              90km, di chuyển bằng ô tô khoảng 110 phút
            </p>
            <img
              src={`${import.meta.env.VITE_SERVER}/img/0944e3e09693209130c09e300.png`}
              alt=""
              className="w-[90%] lg:h-[400px] h-[150px] sm:h-[300px] object-cover my-5 mx-auto"
            />
            <p>
              Bạn có thể di chuyển nhiều loại hình dịch vụ khác nhau như taxi,
              xe ôm, ô tô… Nhưng thuê xe ô tô giá rẻ vẫn là lựa chọn hợp lý và
              tiện lợi nhất để di chuyển giữa sân bay Chu Lai – Đức Phổ. Với
              dịch vụ Trường Phát Tourist bạn sẽ trải nghiệm sự riêng tư, sang
              trọng từ các xe du lịch đời mới, xe 7 chỗ thoải mái.
            </p>
            <h2 className="font-bold text-slate-700 text-[25px] my-3">
              {" "}
              Bảng giá xe 7 chỗ Chu Lai – Đức Phổ
            </h2>
            <table className="my-2">
              <thead>
                <tr>
                  <th className="border-[1px] border-slate-950">Tuyến đường</th>
                  <th className="border-[1px] border-slate-950"> Loại </th>
                  <th className="border-[1px] border-slate-950"> Giá </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    Chu Lai – Đức Phổ{" "}
                  </td>
                  <td className="border-[1px] border-slate-950"> 7 chỗ </td>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    1000k/xe - 250k/ghế{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    Chu Lai – Đức Phổ{" "}
                  </td>
                  <td className="border-[1px] border-slate-950"> 7 chỗ </td>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    1000k/xe - 250k/ghế{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    Chu Lai – Đức Phổ{" "}
                  </td>
                  <td className="border-[1px] border-slate-950"> 7 chỗ </td>
                  <td className="border-[1px] border-slate-950">
                    {" "}
                    1000k/xe - 250k/ghế{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="">
              {" "}
              Giá thuê xe sân bay Chu Lai – Đức Phổ đã toàn bộ chi phí quý khách
              phải trả, sẽ không có phụ thu nào khác (trừ những phát sinh ngoài
              lộ trình của quý khách, nếu có). Chưa bao gồm hóa đơn VAT.
            </p>
            <h2 className="font-bold text-slate-700 text-[25px] my-3">
              {" "}
              Đặt xe nhanh chóng dễ dàng từ Xe Ghép Quảng Ngãi - Đà Nẵng{" "}
            </h2>
            <ul className="list-disc leading-8 pl-8">
              <li>
                {" "}
                Bước 1: Kết nối tổng đài đặt xe 0928 901 901 – 0972 747 052{" "}
              </li>
              <li>
                {" "}
                Bước 2: Gửi yêu cầu về xe, ngày giờ, địa điểm đón, số người đi
                dự kiến.{" "}
              </li>
              <li> Bước 3: Nhân viên tư vấn sẽ báo giá phù hợp. </li>
              <li>
                {" "}
                Bước 4: Xác nhận đặt xe (Tiền bạn có thể thanh toán tiền mặt cho
                tài xế hoặc chuyển khoản trước khi xe trả khách){" "}
              </li>
              <li>
                {" "}
                Bước 5: Điều xe sẽ gửi thông tin xe + tài xế cho bạn. Tài xế sẽ
                chuyển động liên hệ với quý khách trước 01 ngày phục vụ{" "}
              </li>
            </ul>
            <h2 className="font-bold text-slate-700 text-[25px] my-3">
              {" "}
              Cam kết dịch vụ thuê xe
            </h2>
            <ul className="list-disc leading-8 pl-8">
              <li>
                {" "}
                Đón khách đúng giờ, thực hiện đúng các quy trình đã thỏa thuận{" "}
              </li>
              <li>
                {" "}
                Xe đưa đón tại sân bay Chu Lai là xe đời mới nội thất thiết bị
                bên trong sang trọng{" "}
              </li>
              <li>
                {" "}
                Đội ngũ lái xe nhiệt tình, chuyên nghiệp, có kinh nghiệm lâu năm{" "}
              </li>
              <li>
                {" "}
                Giá thuê xe luôn được minh bạch, rõ ràng cho khách trước khi
                thuê xe{" "}
              </li>
              <li>
                {" "}
                Thủ tục thuê xe nhanh chóng, thuận tiện phục vụ khách hàng.{" "}
              </li>
            </ul>
            <h2 className="font-bold text-slate-700 text-[25px] my-3">
              {" "}
              Ưu điểm và những lợi ích dành cho quý khách{" "}
            </h2>
            <ul className="list-disc leading-8 pl-8">
              <li> Luôn luôn hỗ trợ và lắng nghe khi quý khách cần </li>
              <li> Phương tiện di chuyển thoải mái nhất khi đi du lịch </li>
              <li>
                Bạn sẽ được đưa đón tận nơi từ khách sạn, nhà ở hoặc bất cứ nơi
                nào yêu cầu{" "}
              </li>
              <li> Với dàn tài xế bản địa, trẻ trung, vui vẻ và tận tâm </li>
              <li>
                {" "}
                Thuê xe an toàn, bạn sẽ được cung cấp thông tin tài xế đầy đủ,
                cam kết không bia rượu{" "}
              </li>
              <li> Giá thuê xe rẻ nhất </li>
              <li> Đặt xe dễ dàng nhất </li>
              <li> Đội ngũ tư vấn nhiệt tình nhất </li>
              <li>
                {" "}
                Dịch vụ rất tiện lợi, các bạn thoải mái tự do đi chơi mua sắm
                hay gì{" "}
              </li>
              <li> Thanh toán dịch vụ linh hoạt nhất </li>
            </ul>
            <p>
              Nhấc máy gọi ngay cho Xe Ghép Quảng Ngãi nếu bạn đang cần thuê xe
              nhé! Với nhiều năm kinh nghiệm trong nghề và sở hữu dàn tài xế
              chất lượng cam kết mang lại cho bạn một chuyến đi chất lượng.
            </p>
            <h2 className="font-bold text-slate-700 text-[20px] my-3">
              {" "}
              Thông tin liên hệ
            </h2>
            <ul className="list-disc leading-8 pl-8">
              <li>Địa chỉ: 333 Nguyễn Trãi , TP. Quảng Ngãi</li>
              <li>Điện thoại: 0386 6876 96 – 0386 6876 96</li>
              <li>Email: dotram@gmail.com</li>
              <li>Website: xegheoquangngai.net</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1 sm:col-span-4 col-span-4">
          <h2 className="font-bold my-5"> Bài Viết Mới </h2>
          <hr />
          {data.map((item, index) => (
            <div className="flex my-2" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover"
              />
              <div className="ml-2">
                <h3 className="text-slate-600 font-semibold text-[14px]">
                  {item.title}
                </h3>
                <p className="text-[10px] my-1">Tháng 10 , 2023</p>
              </div>
            </div>
          ))}
          <h2 className="font-bold my-5"> Bài Viết Nổi Bật </h2>
          <ul className="ulli ml-3">
            {data.map((item, index) => (
              <li className="text-[14px] my-2" key={index}>
                {" "}
                {item.title}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Properti;
