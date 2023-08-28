import React from "react";
import "./Service.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImageName, getPrice } from "../../apis/api";
import { randomInt } from "crypto";
import { description } from "../../Components/data/data";

function PostBody() {
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
  const { data: name } = useQuery({
    queryKey: ["Pricingtable"],
    queryFn: getPrice,
  });
  const { data: img } = useQuery({
    queryKey: ["ImageName"],
    queryFn: getImageName,
  });
  console.log(name);
  return (
    <section className="max-w-[1150px] w-[90%] mx-auto text-slate-500 mb-5">
      <h1 className="text-center font-bold text-[18px] lg:text-[28px] text-sky-700 mt-4">
        Dịch vụ xe ghép Quảng Ngãi - Đà Nẵng
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10">
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 my-2">
            {name?.data.map((item, index) => (
              <NavLink to={"/chi-tiet-dich-vu"} key={index}>
                <div className="hover:text-sky-900 hover:-translate-y-1 post-transition">
                  <img
                    src={`http://localhost:4000/img/${
                      img?.data[
                        Math.floor(Math.random() * (img?.data.length || 0))
                      ]
                    }`}
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
          {name?.data.map((item, index) => {
            if (index < 10) {
              return (
                <div className="flex my-2" key={index}>
                  <img
                    src={`http://localhost:4000/img/${
                      img?.data[
                        Math.floor(Math.random() * (img?.data.length || 0))
                      ]
                    }`}
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
            {name?.data.map((item, index) => (
              <li className="text-[14px] my-2" key={index}>
                Xe Ghép {item.from} - {item.to}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PostBody;
