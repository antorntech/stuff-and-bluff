import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tShirt1 from "../../images/products/t-shirt/tshirt1.png";
import tShirt2 from "../../images/products/t-shirt/tshirt2.png";
import tShirt3 from "../../images/products/t-shirt/tshirt3.png";
import tShirt4 from "../../images/products/t-shirt/tshirt4.png";
import "./SlickSlider.css";

const SlickSlider = () => {
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
    <div className="text-center">
      {" "}
      <h2>Featured Items</h2>
      <Slider {...settings}>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={tShirt1} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={tShirt2} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={tShirt3} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={tShirt4} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
