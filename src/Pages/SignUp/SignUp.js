import React from "react";
import signUpGif from "../../images/signup.gif";

const SignUp = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="signup-banner">
          <img className="lg:w-3/4" src={signUpGif} alt="" />
        </div>
        <div className="signup-form mt-10">
          <div class="card flex-shrink-0 justify-center w-full max-w-sm shadow-xl bg-base-100 mx-auto">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
