import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="bg-gray-100 py-12 lg:py-24">
      <div className="flex flex-col items-center newsLetter">
        <h1
          className="text-xl lg:text-3xl pb-3"
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          News Letter
        </h1>
        <h2 className="text-3xl lg:text-4xl">Sign Up For News</h2>
        <input
          type="text"
          name=""
          placeholder="Your e-mail"
          className="w-2/3"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
