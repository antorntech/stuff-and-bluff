import React from "react";
import tShirt1 from "../../images/products/t-shirt/tshirt1.png";

const SingleSlider = () => {
  return (
    <div className="product px-5">
      <div className="productBanner flex justify-center">
        <img src={tShirt1} alt="" />
      </div>
      <div className="productDetails">
        <h2 className="font-bold text-2xl">T-Shirt</h2>
        <p>
          This t-shirt is so beautiful and this is a brand new collection of
          summer. If you want, you can buy.
        </p>
      </div>
    </div>
  );
};

export default SingleSlider;
