import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import bgImage from "../Assets/bgRight.jpg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { text: "Product", href: "#" },
    { text: "Features", href: "#" },
    { text: "Marketplace", href: "#" },
    { text: "Contact Us", href: "#" },
  ];
  const polygonStyle = {
    clipPath: "polygon(19% 0, 100% 0%, 100% 100%, 0% 100%)",
 backgroundImage: `url(${bgImage})` ,
 backgroundPosition:'center', 
 backgroundSize:'cover'
  };

  return (
    <>
      <div className="flex flex-col">
        {" "}
       
        <div className="w-4/4 flex justify-between h-screen">
          <div className="w-2/4 pl-[4rem] flex flex-col    items-start">
          <div className="flex gap-16 items-center py-8 ">
          <img src={logo} width={200} height={60} alt="_logo" />
          <div className="lg:flex justify-center items-center gap-10 hidden">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#100530] text-lg leading-normal cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* <button className="hidden lg:flex py-4 px-6 rounded text-lg font-medium leading-normal cursor-pointer">
          Contact Us{" "}
           <span>
            <FiArrowRight className="ml-2 mt-1 " width={30} height={30} fontSize={20} />
          </span> 
        </button> */}
          <FiMenu
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="lg:hidden text-black h-6 w-6 cursor-pointer"
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
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
            <div className="flex items-start flex-col gap-10 mt-[10rem]" ><div className="flex items-center rounded-full border border-[#e5e5e5] px-3 py-1">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <a href="#" className="flex items-center ml-2 text-[#4f46e5]">
                Read More <FiArrowRight className="ml-2" />
              </a>
            </div>
            <div className="text-6xl font-bold">Data to enrich your online business</div>
            <div className="text-[#4b5563] font-lg">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</div>
            <div className="flex gap-4 items-center"><button className="px-[14px] py-[10px] rounded text-white bg-[#4f46e5] text-sm font-bold">Get Started</button><button className="px-[14px] py-[10px] rounded  text-sm font-bold flex items-center">Learn More <FiArrowRight className="ml-2" /></button></div>
         </div> </div>
          <div style={polygonStyle} className="w-2/4 bg-[#000000]"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
