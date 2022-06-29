import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li tabindex="0">
        <a class="justify-between">
          Men
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul class="p-2 z-40">
          <li>
            <a>Shirt</a>
          </li>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>Watch</a>
          </li>
        </ul>
      </li>
      <li tabindex="0">
        <a class="justify-between">
          Women
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul class="p-2 z-40">
          <li>
            <a>Shirt</a>
          </li>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>Watch</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        {user ? (
          <button className="text-primary" onClick={handleSignOut}>
            Sign Out
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        ) : (
          <Link to="/login">
            Login
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 justify-between z-40">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a>
          <img src={logo} alt="logo.png" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
