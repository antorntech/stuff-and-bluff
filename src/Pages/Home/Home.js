import React from "react";
import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import SlickSlider from "../../components/SlickSlider/SlickSlider";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SlickSlider></SlickSlider>
      <Category></Category>
    </div>
  );
};

export default Home;
