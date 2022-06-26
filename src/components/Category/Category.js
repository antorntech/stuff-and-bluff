import React from "react";
import "./Category.css";
import clotheBg from "../../images/category-banner/clothebg.png";
import shoesBg from "../../images/category-banner/shoesbg.png";
import watchBg from "../../images/category-banner/watchbg.png";

const Category = () => {
  return (
    <div className="py-8 lg:py-24 px-4 lg:px-0">
      <header className="flex flex-col items-center text-center pb-5 lg:pb-16">
        <h1
          className="text-3xl lg:text-5xl pb-3"
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          Product Category
        </h1>
        <p className="text-gray-400">
          There is some product category which are best product like Clothes,
          Shoes and Watches.
        </p>
        <div
          className="bg-primary mt-3"
          style={{
            width: "150px",
            height: "3px",
          }}
        ></div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-0 lg:gap-8">
        <div className="main" style={{ background: "#56ff001c" }}>
          <div className="submain">
            <img className="mx-auto" src={clotheBg} alt="" />
            <div className="categoryDetails flex flex-col justify-center">
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2 className="text-center text-5xl font-bold text-white">
                Clothes
              </h2>
              <button className="btn btn-sm btn-primary text-white lg:w-1/4 mx-auto mt-2">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="main" style={{ background: "#00fff31c" }}>
          <div className="submain">
            <img className="mx-auto" src={shoesBg} alt="" />
            <div className="categoryDetails flex flex-col justify-center">
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2 className="text-center text-5xl font-bold text-white">
                Shoes
              </h2>
              <button className="btn btn-sm btn-primary text-white lg:w-1/4 mx-auto mt-2">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="main" style={{ background: "#ff46001c" }}>
          <div className="submain">
            <img className="mx-auto" src={watchBg} alt="" />
            <div className="categoryDetails flex flex-col justify-center">
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2 className="text-center text-5xl font-bold text-white">
                Watches
              </h2>
              <button className="btn btn-sm btn-primary text-white lg:w-1/4 mx-auto mt-2">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
