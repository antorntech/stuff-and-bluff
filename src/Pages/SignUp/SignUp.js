import React from "react";
import { Link } from "react-router-dom";
import signUpGif from "../../images/signup.gif";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="signup-banner">
          <img className="lg:w-3/4" src={signUpGif} alt="" />
        </div>
        <div className="signup-form">
          <div class="card flex-shrink-0 justify-center w-full max-w-sm shadow-xl bg-base-100 mx-auto py-5">
            <div class="card-body p-0 mx-8">
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
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
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
                <button class="btn btn-primary">SignUp</button>
              </div>
              <span className="text-sm text-center">
                Already Have an Account ?{" "}
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </span>
            </div>
            <div class="divider mx-8">OR</div>
            <div className="socialBtn mx-8">
              <button className="btn btn-outline btn-wide w-full">
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
