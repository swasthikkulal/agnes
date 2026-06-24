import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="max-lg:collapse bg-base-200 lg:mb-0 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <button className="btn btn-ghost text-xl">daisyUI</button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-9">
              <li
                onClick={() => {
                  navigation("/");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigation("/landing");
                }}
              >
                Landing
              </li>
              <li
                onClick={() => {
                  navigation("/about");
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  navigation("/contact");
                }}
              >
                Contact
              </li>
              <li
                onClick={() => {
                  navigation("/state");
                }}
              >
                State
              </li>
              <li
                onClick={() => {
                  navigation("/input");
                }}
              >
                Input
              </li>
              <li onClick={()=>{
                navigation("/toggle")
              }}>Toggle</li>
              <li onClick={()=>{
                navigation("/profile")
              }}>Profile</li>
            </ul>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
              <button onClick={() => navigation("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigation("/landing")}>Landing</button>
            </li>

            <li>
              <button onClick={() => navigation("/about")}>About</button>
            </li>
            <li>
              <button onClick={() => navigation("/contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
