import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cloth from "../assets/cloth.png";
import cloth1 from "../assets/cloth1.png";
import cloth2 from "../assets/cloth2.png";
import cloth3 from "../assets/cloth3.png";
const Fabrics = () => {
  return (
    <div className="">
      <div className="lg:px-96 flex items-center justify-between">
        <select
          id="product"
          name="product"
          className="lg:hidden block w-40  mt-1 p-1 border border-gray-200 rounded-md"
        >
          <option value="select">All Products</option>
          <option value="option1">T-Shirt</option>
          <option value="option2">Hoodies</option>
          <option value="option3">Jacket</option>
        </select>
        <div className="hidden lg:flex gap-4 text-gray-400">
          <button className="text-xs font-bold text-black">All Products</button>
          <button className="text-xs">T-Shirt</button>
          <button className="text-xs">Hoodies</button>
          <button className="text-xs">Jacket</button>
        </div>

        <button className="bg-black px-1 py-1 lg:mr-2 text-white text-sm flex items-center flex-row gap-1">
          <FaFilter className="flex" />
          Filter
        </button>
      </div>

      <div className="flex lg:flex-row flex-col lg:px-96 lg:gap-8 mt-2 gap-2">
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color border p-2 lg:w-40 lg:h-40 relative">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="absolute mt-12 cursor-pointer hidden text-yellow-500" />
            <img src={cloth} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">ogidigidi</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color pt-6 pb-2 px-2 border p-2 lg:w-40 lg:h-40 relativce">
            <small className="bg-red-500 text-white text-xs w-12  items-center justify-center hidden">
              HOT
            </small>
            <IoIosArrowBack className="absolute mt-12 cursor-pointer text-yellow-500 hidden" />
            <img src={cloth1} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Sunkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="absolute hidden mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth2} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Odepa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth3} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Gyinkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-96 lg:gap-8 mt-2 gap-2">
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color border p-2 lg:w-40 lg:h-40 relative">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Gyinkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color pt-6 pb-2 px-2 border p-2 lg:w-40 lg:h-40 relativce">
            <small className="bg-black hidden text-white text-xs w-12  items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth1} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Sunkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth2} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Odepa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth3} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Gyinkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-96 lg:gap-8 mt-2 gap-2">
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color border p-2 lg:w-40 lg:h-40 relative">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">ogidigidi</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color border pt-6 pb-2 px-2 lg:w-40 lg:h-40 relative">
            <small className="bg-black  hidden text-white text-xs w-12 items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth1} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Sunkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth2} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Odepa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth3} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Gyinkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-96 lg:gap-8 mt-2 gap-2">
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color border p-2 lg:w-40 lg:h-40 relative">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              HOT
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">ogidigidi</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="block px-16  lg:px-0">
          <div className="bg-text-color pt-6 pb-2 px-2 border p-2 lg:w-40 lg:h-40 relativce">
            <small className="bg-black hidden text-white text-xs w-12  items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth1} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Sunkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth2} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Odepa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-text-color border p-2 w-40 h-40 relativce">
            <small className="bg-black text-white text-xs w-12 flex items-center justify-center">
              SALE
            </small>
            <IoIosArrowBack className="hidden absolute mt-12 cursor-pointer text-yellow-500" />
            <img src={cloth3} alt="Cloth" className="" />
          </div>
          <div className="mt-4">
            <span className="text-xs">Gyinkwa</span>
            <div className="mt-2 flex gap-12">
              <span className="text-xs text-gray-300">Textile</span>
              <span className="text-xs">GHC 220.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-96 my-12 flex flex-row justify-between">
        <div className="flex join space-x-2 px-16  lg:px-0">
          <button className="join-item btn ">1</button>
          <button className="join-item btn ">2</button>
          <button className="join-item btn ">3</button>
          <button className="join-item btn ">4</button>
          <button className="join-item btn ">5</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">11</button>
          <button className="join-item btn">
            <IoIosArrowForward />
          </button>
        </div>
        <div className="flex flex-row">
          <small className="hidden lg:flex items-center pr-2">show</small>
          <select
            id="show"
            name="show"
            typeof="number"
            className="hidden lg:block w-12 mt-1 p-1 bg-orange-400 rounded-md"
          >
            <option value="select">16</option>
            <option value="option1">8</option>
            <option value="option2">20</option>
            <option value="option3">24</option>
          </select>
          <small className="hidden lg:flex items-center pl-2">per page</small>
        </div>
      </div>
    </div>
  );
};

export default Fabrics;
