import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/banner1.jpeg";
import Banner2 from "../../assets/banner2.jpeg";
import Banner3 from "../../assets/banner3.jpeg";
import Banner4 from "../../assets/banner4.jpeg";
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
    Banner1,
    Banner2,
    Banner3,
    Banner4
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


