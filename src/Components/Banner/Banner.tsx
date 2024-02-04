import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const url = [
    `${(import.meta as any).env.VITE_SERVER}/asset/banner1.jpeg`,
    `${(import.meta as any).env.VITE_SERVER}/asset/banner2.jpeg`,
    `${(import.meta as any).env.VITE_SERVER}/asset/banner3.jpeg`,
    `${(import.meta as any).env.VITE_SERVER}/asset/banner4.jpeg`,
  ]
  return (
    <section className="w-full">
      <Slider {...settings} className="mb-10 -z-10">
        {url.map((uri, index) => (<div
          key={index}
          className="bg-cover w-full lg:h-[700px] bg-center bg-no-repeat mx-3 "
        >
          <img src={uri} alt="" className="object-contain w-full" />
        </div>))}
      </Slider>

    </section>
  );
}
export default Banner;


