import React from "react";

const SingleSlider = (props) => {
  const { name, description, img, price, category } = props.product;
  return (
    <div className="py-5">
      <div className="product px-3">
        <div
          class="card bg-base-100 rounded-none"
          style={{
            boxShadow:
              "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
          }}
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {name}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div class="card-actions justify-end mt-3">
              <div class="badge badge-outline">{price} Taka</div>
              <div class="badge badge-outline">{category}</div>
            </div>
          </div>
          <div class="cartBtn flex justify-center">
            <button class="btn btn-wide" id="cartBtn">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
