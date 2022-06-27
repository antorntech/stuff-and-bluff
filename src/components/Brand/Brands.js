import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleBrand from "./SingleBrand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-12 lg:py-24">
      <header className="flex flex-col items-center text-center pb-5 lg:pb-10">
        <h1
          className="text-3xl lg:text-5xl pb-3"
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          Our Brand
        </h1>
        <p className="text-gray-400">
          There is some brand which are connect with us.
        </p>
        <div
          className="bg-primary mt-3"
          style={{
            width: "150px",
            height: "3px",
          }}
        ></div>
      </header>
      <Slider {...settings}>
        {brands.map((brand) => (
          <SingleBrand key={brand.id} brand={brand}></SingleBrand>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
