"use client";
import React, { useState, useRef } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { BsCalendar4Week } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import { FiChevronDown, FiChevronUp, FiLogOut, FiUsers } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { AiOutlineFileText } from "react-icons/ai";

function Admiheader() {
  const [isExpanded, setIsExpanded] = useState(true); // State for sidebar expansion
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`font-poppins h-screen space-y-8 pl-6 pr-8 py-8 bg-gray-500 text-black transition-all duration-200 ${
        isExpanded ? "w-80" : "w-24"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute bottom-4 p-2 bg-guidebg rounded-full hover:bg-guidebg-dark transition-colors text-whiteText"
      >
        {isExpanded ? (
          <AiOutlineMenu className="text-24px" />
        ) : (
          <AiOutlineClose className="text-24px" />
        )}
      </button>

      {/* Logo */}
      <div className="text-24px font-bold pb-4">
        <a href="/" className="whitespace-nowrap">
          {isExpanded ? "Management" : "MD"}
        </a>
      </div>

      {/* Navigation as */}
      <div className="text-18px">
        <ul className="space-y-8">
          {/* Dashboard */}
          <li>
            <a href="/admin/dashboard" className="flex items-center">
              <FaTachometerAlt className="text-24px mr-2" />{" "}
              {isExpanded && "Dashboard"}
            </a>
          </li>

          {/* Blogs */}
          <li>
            <a href="/admin/blogs" className="flex items-center">
              <AiOutlineFileText className="text-24px mr-2" />{" "}
              {isExpanded && "Blogs"}
            </a>
          </li>

          {/* Users */}
          <li>
            <a href="/admin/users" className="flex items-center">
              <FiUsers className="text-24px mr-2" /> {isExpanded && "Users"}
            </a>
          </li>

          {/* Profile Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full text-left focus:outline-none"
            >
              <FaTools className="text-24px mr-2" />
              {isExpanded && "Settings"}
              {isDropdownOpen ? (
                <FiChevronUp className={`${isExpanded ? "ml-2" : "hidden"}`} />
              ) : (
                <FiChevronDown
                  className={`${isExpanded ? "ml-2" : "hidden"}`}
                />
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && isExpanded && (
              <div className="absolute left-8 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 text-16px">
                {/* Profile Settings */}
                <a
                  href="/admin/profile"
                  className="px-4 py-2 text-gray-600 hover:bg-gray-700 flex items-center"
                >
                  <FaTools className="mr-2" /> Profile
                </a>

                {/* Logout */}
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-600 flex items-center"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Admiheader;
