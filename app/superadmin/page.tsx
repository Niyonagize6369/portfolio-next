"use client";
import React, { useState } from "react";
import Login from "@/components/Logins";
import Signup from "@/components/Signup";

function Page() {
  const [activeComponent, setActiveComponent] = useState("login");

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col lg:flex-row text-white items-center justify-evenly lg:justify-between text-24px px-20">
      <p className="text-48px text-center w-1/2">
        Super Admin Management System
      </p>
      <div className="w-1/2">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveComponent("login")}
            className={`w-44 px-6 py-2 rounded-xl text-[18px] font-bold transition-colors duration-700 ${
              activeComponent === "login"
                ? "bg-white text-black hover:bg-gray-500 hover:text-white hover:border"
                : "bg-gray-500 text-white border border-white hover:bg-white hover:text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveComponent("signup")}
            className={`w-44 px-6 py-2 rounded-xl text-[18px] font-bold transition-colors duration-700 ${
              activeComponent === "signup"
                ? "bg-white text-black hover:bg-gray-500 hover:text-white hover:border"
                : "bg-gray-500 text-white border border-white hover:bg-white hover:text-black"
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
