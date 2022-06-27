import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  const [testimonials, settestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => settestimonials(data));
  }, []);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-12 lg:py-24">
      <header className="flex flex-col items-center text-center pb-5 lg:pb-10">
        <h1
          className="text-3xl lg:text-5xl pb-3"
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          Our Client Say
        </h1>
        <p className="text-gray-400">
          There is some premium collection which are best product.
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
        {testimonials.map((testimonial) => (
          <SingleTestimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></SingleTestimonial>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
