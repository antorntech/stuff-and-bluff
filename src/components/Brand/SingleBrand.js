import React from "react";
import "./SingleBrand.css";

const SingleBrand = (props) => {
  const { img } = props.brand;
  return (
    <div>
      <div className="brand">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SingleBrand;
