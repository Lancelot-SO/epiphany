import React from "react";
import hero from "../assets/heroImg.png";
import background from "../assets/background.png";
import flower from "../assets/flower.png";
import brand from "../assets/brand.png";
import style1 from "../assets/style1.png";
import cloth from "../assets/cloth.png";
import epiphany from "../assets/epiphany1.png";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <section className="flex">
        <div
          className=" w-full h-80 bg-cover relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="flex flex-row">
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
              <h1 className="text-4xl font-bold text-white">
                Epiphany textiles & fashion
              </h1>
              <span className="text-white block">
                You can browse our shop’s numerous collection
              </span>
              <span className="text-white block">
                from various fabrics here.
              </span>
              <button className="flex flex-row text-white items-center p-1 rounded-lg gap-2 mt-4 bg-black">
                <FaShoppingBag />
                Shop Now
              </button>
            </div>
            <div className="">
              <img src={flower} alt="flower" className="object-fit" />
            </div>
          </div>
        </div>
      </section>
      <div className="px-40">
        <section className=" h-20 px-60 py-4">
          <img src={brand} alt="brand" className="" />
        </section>
        <section className="px-20 py-4 flex ml-40">
          <div class="flex flex-row gap-2">
            <img src={style1} alt="Image 1" className="w-80" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-96 h-40 gap-2">
                <img src={style1} alt="Image 1" className="w-96 h-40" />
                <img src={style1} alt="Image 1" className="w-96 h-40" />
              </div>
              <div className="flex flex-row w-96 h-40 gap-2">
                <img src={style1} alt="Image 1" className="w-96 h-40" />
                <img src={style1} alt="Image 1" className="w-96 h-40" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="px-20 flex items-center justify-center pt-4 text-xl">
            Best Sellers
          </h2>
          <div className="px-60 flex items-center justify-between">
            <span>All Products</span>
            <button className="bg-black px-1 py-1 mr-2 text-white text-sm">
              View All
            </button>
          </div>
        </section>
        <section className="px-60 pb-2 flex flex-col">
          <div className="gap-6 flex flex-row">
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
                <IoIosArrowBack className="absolute mt-12 text-yellow-500" />
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
                <IoIosArrowForward className="absolute mt-12 ml-32 text-yellow-500" />
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
          </div>
        </section>
        <section className="px-60 mb-2 flex flex-col">
          <div className="gap-6 flex flex-row">
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
                <IoIosArrowBack className="absolute mt-12 text-yellow-500" />
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
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
            <div className=" max-h-screen flex flex-col py-4">
              <div className="bg-text-color border p-2 w-40 h-40 relativce">
                <IoIosArrowForward className="absolute mt-12 ml-32 text-yellow-500" />
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
          </div>
        </section>
      </div>
      <section className="flex flex-row">
        <div
          className=" w-full h-80 bg-cover relative"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flow-row gap-10">
            <img src={epiphany} alt="epiphany" className="w-80 pt-6 ml-60" />
            <div className="flex flex-col ml-44 mt-24">
              <h2 className="text-white text-2xl">Epiphany</h2>
              <p className="text-gray-300 w-80">
                Adinkra hin. The new outing Wear collection exclusively offered
                at the reopened Epiphany Shops Accra Ghana.
              </p>
              <button className="bg-white text-black mt-4 w-28 p-1">
                See collection
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-40 flex flex-col">
        <h2 className="px-20 flex pt-4 text-xl">References</h2>
        <div className="px-20 flex flex-row m-4 gap-4">
          <div className="w-1/2 bg-custom-blue p-4 flex flex-col">
            <p className="pb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tristique in pellentesque ultrices et massa neque, convallis
              lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
              scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
              placerat ultricies pretium.
            </p>
            <span>Emerson Aminoff</span>
            <small>3 bedroom apartment in Accra</small>
          </div>
          <div className="w-1/2 bg-custom-blue p-4 flex flex-col">
            <p className="pb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tristique in pellentesque ultrices et massa neque, convallis
              lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
              scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
              placerat ultricies pretium.
            </p>
            <span>Emerson Aminoff</span>
            <small>3 bedroom apartment in Accra</small>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mt-4 mb-12">
          <div className="w-2 h-2 bg-custom-blue rounded-full"></div>
          <div className="w-2 h-2 bg-custom-blue rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-custom-blue rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
