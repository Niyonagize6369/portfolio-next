"use client";
import React, { useState } from "react";
import Login from "@/components/Logins";
import Signup from "@/components/Signup";

function Page() {
  const [activeComponent, setActiveComponent] = useState("login");

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col lg:flex-row text-white items-center justify-evenly lg:justify-between text-24px px-20">
      <div className="flex flex-col text-center gap-5">
        {/* <p className="text-48px">Welcome!</p>
        <p>Login to view</p>
        <a href="/">
          <button
            className={`w-48 px-6 py-2 rounded-xl text-[12px] font-bold transition-colors duration-700 bg-gray text-white border border-white hover:bg-white hover:text-black
                        `}
          >
            Go To Portfolio
          </button>
        </a> */}
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveComponent("login")}
            className={`w-44 px-6 py-2 rounded-xl text-[18px] font-bold transition-colors duration-700 ${
              activeComponent === "login"
                ? "bg-white text-black hover:bg-gray hover:text-white hover:border"
                : "bg-gray text-white border border-white hover:bg-white hover:text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveComponent("signup")}
            className={`w-44 px-6 py-2 rounded-xl text-[18px] font-bold transition-colors duration-700 ${
              activeComponent === "signup"
                ? "bg-white text-black hover:bg-gray hover:text-white hover:border"
                : "bg-gray text-white border border-white hover:bg-white hover:text-black"
            }`}
          >
            Register
          </button>
        </div>

        {/* Conditional rendering of components */}
        {activeComponent === "login" && <Login />}
        {activeComponent === "signup" && <Signup />}
      </div>
    </div>
  );
}

export default Page;
