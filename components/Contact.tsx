'use client';
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_zor7czt";
    const templateID = "template_kcaqurk";
    const publicKey = "wjSVdqqYRzladYY3x";
    const templateParams = {
      to_name: "Rachel", // Receiver's name
      from_name: formData.name, // Sender's name
      message: formData.message, // User's message
      reply_to: formData.email, // Reply email
    };
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus("Failed to send email. Try again.");
        console.error("EmailJS Error:", error);
      });
  };
  return (
    <div className="text-black bg-gray-200 py-28" id="contact">
      <div className="container px-8 mx-auto md:px-20 lg:px-24">
        <h2 className="mb-10 text-4xl font-bold text-black text-center">Contact Me</h2>
        <div className="flex flex-col items-center md:flex md:space-x-12">
          <div className="flex-1">
            <h3 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-900">
              let's Talk
            </h3>
            <p className="text-gray-900 mb-4">
              I'm open to discussing web development project or partnership
              opportunities.
            </p>
            <div className="mb-2">
              <FaEnvelope className="inline-block mr-2 text-gray-800"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline text-black"
              >
                youremail@example.com
              </a>
            </div>
            <div className="mb-2">
              <FaPhone className="inline-block mr-2 text-gray-800"></FaPhone>
              <span className="text-black">+250-783350275</span>
            </div>
            <div className="mb-2">
              <FaMapMarkedAlt className="inline-block mr-2 text-gray-800"></FaMapMarkedAlt>
              <span className="text-black">Kigali,Gasabo,Rwanda</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-gray-200 border border-gray-600 rounded focus:outline-none focus:border-grays-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-gray-200 border text-bla border-gray-600 rounded focus:outline-none focus:border-gray-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  // type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-gray-200 border border-gray-600 rounded focus:outline-none focus:border-gray-400"
                  rows={5}
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 text-black rounded-full shadow-lg bg-gradient-to-r from-orange-300 to-gray-500 hover:scale-105"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactMe;