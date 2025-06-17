"use client";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "user",
    conditions: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Form submit handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.conditions) {
      setError("You must agree to the terms and conditions");
      return;
    }

    try {
      const { userName, email, password, role } = formData;
      const username = `${userName}`;

      const res = await axios.post("http://localhost:5000/api/v1/auth/signup", {
        username,
        email,
        password,
        role,
      });

      if (res.status === 201) {
        setSuccess(
          "Signup successful! Please check your email to verify your account."
        );
        setFormData({
          userName: "",
          email: "",
          password: "",
          role: "user",
          conditions: false,
        });
      }
    } catch (err: any) {
      console.log("Signup Error:", err.response?.data);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="items-center" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="text-[16px] text-grey">
          UserName
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="bg-grey text-white border border-gray-800 rounded-2xl text-[18px] w-90"
          required
        />

        <label htmlFor="email" className="text-[16px] text-grey">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-grey text-white border border-gray-800 rounded-2xl text-[18px] w-90"
          required
        />

        <label htmlFor="password" className="text-[16px] text-grey">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-grey text-white border border-gray-800 rounded-2xl text-[18px] w-90"
          required
        />
        <div className="flex w-[300px] gap-2 pt-8">
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            checked={formData.conditions}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="conditions"
            className="text-[14px] leading-none items-center"
          >
            Agree to terms and conditions.
          </label>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}

        <button
          type="submit"
          className="bg-gray w-full my-8 text-white border border-white px-6 py-2 rounded-xl text-[18px] font-bold hover:bg-green hover:text-black hover:border-green cursor-pointer transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
