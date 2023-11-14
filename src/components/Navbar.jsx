import React, { useState } from "react";
import epiphany from "../assets/epiphanyLogo.png";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="overflow-x-hidden">
      <header>
        <div className="lg:flex lg:items-center lg:justify-center ">
          <nav className=" lg:w-96 w-full flex flex-row gap-2 lg:gap-0 items-center justify-between">
            <ul className="lg:text-3xl font-logoName border-b-2 flex lg:flex-row items-center justify-center">
              <li className="">
                <a href="/" className="text-black">
                  Epiphany
                </a>
              </li>
              <li className="">
                <a href="/" className="flex items-center">
                  <img
                    src={epiphany}
                    alt="Epiphany Logo"
                    className="w-16 h-16"
                  />
                </a>
              </li>
              <li className="">
                <a href="/" className="text-black">
                  Testiles
                </a>
              </li>
            </ul>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden cursor-pointer z-50 pr-4"
            >
              {nav ? <FaTimes className="text-white" /> : <FaBars />}
            </div>
            {nav && (
              <ul
                className="flex text-2xl gap-6 flex-col justify-center items-center
            absolute top-0 left-0 z-10 w-full h-screen bg-black text-white"
              >
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/about">
                  <li>About Us</li>
                </a>
                <a href="/fabrics">
                  <li>Fabrics</li>
                </a>
                <a href="/contact">
                  <li>Contact Us</li>
                </a>
                <a href="/" className="flex flex-row gap-2">
                  <FaShoppingBag />
                  <li>Shopping</li>
                </a>
              </ul>
            )}
          </nav>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center">
          <nav className="w-full">
            <ul className="flex flex-row h-16 ml-32 mr-6 pt-4 space-x-8 pb-4 items-center justify-center font-logoName">
              <Link
                to="/"
                onClick={() => handleLinkClick(0)}
                className={`${
                  activeLink === 0
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                } hover:border-b-2 hover:border-red-500`}
              >
                <li
                  className={`${
                    activeLink === 0 ? "text-red-500" : "text-black"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link
                to="/about"
                onClick={() => handleLinkClick(1)}
                className={`${
                  activeLink === 1
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                } hover:border-b-2 hover:border-red-500`}
              >
                <li
                  className={`${
                    activeLink === 1 ? "text-red-500" : "text-black"
                  }`}
                >
                  About Us
                </li>
              </Link>
              <Link
                to="/fabrics"
                onClick={() => handleLinkClick(2)}
                className={`${
                  activeLink === 2
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                } hover:border-b-2 hover:border-red-500`}
              >
                <li
                  className={`${
                    activeLink === 2 ? "text-red-500" : "text-black"
                  }`}
                >
                  Fabrics
                </li>
              </Link>
              <Link
                to="/contact"
                onClick={() => handleLinkClick(3)}
                className={`${
                  activeLink === 3
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                } hover:border-b-2 hover:border-red-500`}
              >
                <li
                  className={`${
                    activeLink === 3 ? "text-red-500" : "text-black"
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
          <ul className="mr-8 flex flex-row items-center justify-center gap-2">
            <FaShoppingBag />
            <li>Shopping</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
