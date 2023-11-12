import React from "react";
import epiphany from "../assets/epiphanyLogo.png";
import { FaShoppingBag } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="flex items-center justify-center">
          <nav className=" w-96">
            <ul className="text-3xl font-logoName border-b-2 flex flex-row items-center justify-center">
              <li className="">
                <a href="#" className="text-black">
                  Epiphany
                </a>
              </li>
              <li className="">
                <a href="#" className="flex items-center">
                  <img
                    src={epiphany}
                    alt="Epiphany Logo"
                    className="w-16 h-16"
                  />
                </a>
              </li>
              <li className="">
                <a href="#" className="text-black">
                  Testiles
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-center">
          <nav className=" w-full ">
            <ul className="flex flex-row h-16 ml-32 mr-6 pt-4 space-x-8 pb-4 items-center justify-center font-logoName">
              <li>Home</li>
              <li>About Us</li>
              <li>Fabrics</li>
              <li>Contact US</li>
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
