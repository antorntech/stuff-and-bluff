import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import loginGif from "../../images/login.gif";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="login-banner">
          <img className="lg:w-3/4" src={loginGif} alt="" />
        </div>
        <div className="login-form">
          <div class="card flex-shrink-0 justify-center w-full max-w-sm shadow-xl bg-base-100 mx-auto py-5">
            <div class="card-body p-0 mx-8">
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
                <button class="btn btn-primary">Login</button>
              </div>
              <span className="text-sm text-center">
                Don't Have an Account ?{" "}
                <Link to="/signup" className="text-secondary">
                  Create an account
                </Link>
              </span>
            </div>
            <div class="divider mx-8">OR</div>
            <div className="socialBtn mx-8">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-wide w-full"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
