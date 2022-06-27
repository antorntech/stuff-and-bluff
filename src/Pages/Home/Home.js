import React from "react";
import Brands from "../../components/Brand/Brands";
import Category from "../../components/Category/Category";
import CountDown from "../../components/CountDown/CountDown";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PremiumProducts from "../../components/PremiumProducts/PremiumProducts";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SlickSlider></SlickSlider>
      <Category></Category>
      <CountDown></CountDown>
      <PremiumProducts></PremiumProducts>
      <NewsLetter></NewsLetter>
      <Testimonial></Testimonial>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
