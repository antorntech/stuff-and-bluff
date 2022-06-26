import React from "react";
import Category from "../../components/Category/Category";
import CountDown from "../../components/CountDown/CountDown";
import Hero from "../../components/Hero/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PremiumProducts from "../../components/PremiumProducts/PremiumProducts";
import SlickSlider from "../../components/SlickSlider/SlickSlider";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SlickSlider></SlickSlider>
      <Category></Category>
      <CountDown></CountDown>
      <PremiumProducts></PremiumProducts>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
