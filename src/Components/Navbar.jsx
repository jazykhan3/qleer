import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-3 items-center py-8 px-4 md:px-6 xl:px-24">
        <img src={logo} alt="_logo" />
        <div className="lg:flex justify-center items-center gap-12 hidden">
          <a className="text-[#100530] text-lg leading-normal">Product</a>
          <a className="text-[#100530] text-lg leading-normal">Features</a>
          <a className="text-[#100530] text-lg leading-normal">Marketplace</a>
          <a className="text-[#100530] text-lg leading-normal">Company</a>
        </div>
        <button className="hidden lg:flex py-4 px-6 bg-[#105244] rounded text-white text-lg font-medium leading-normal">
          CONTACT US
        </button>
        <FiMenu
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="lg:hidden text-black h-6 w-6"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="click"
        />
        {isDropdownOpen && (
          <div
            id="dropdown"
            className="absolute top-16 mt-[20px] right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
