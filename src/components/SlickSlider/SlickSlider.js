import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlickSlider.css";
import SingleSlider from "./SingleSlider";

const SlickSlider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {" "}
      <div className="wrapper flex justify-between pb-4 px-5">
        <div className="left">
          <h2 className="text-2xl">Featured Products</h2>
        </div>
        <div className="right text-gray-400">
          <i class="fa-solid fa-arrow-left-long "></i>
          <i class="fa-solid fa-arrow-right-long pl-3"></i>
        </div>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <SingleSlider key={product.id} product={product}></SingleSlider>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
