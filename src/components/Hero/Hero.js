import React from "react";
import banner from "../../images/banner.gif";

const Hero = () => {
  return (
    <div class="hero min-h-screen z-30">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="max-w-lg" alt="" />
        <div>
          <h1 class="text-5xl font-bold">
            Stuff And <span className="text-primary">Bluff</span>
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
