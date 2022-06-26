import React, { useEffect, useState } from "react";
import PremiumProduct from "./PrimiumProduct/PremiumProduct";

const PremiumProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-12 lg:py-24">
      <header className="flex flex-col items-center text-center pb-5 lg:pb-10">
        <h1
          className="text-3xl lg:text-5xl pb-3"
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          Premium Products
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
      <PremiumProduct data={products}></PremiumProduct>
    </div>
  );
};

export default PremiumProducts;
