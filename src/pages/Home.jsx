import React from "react";
import hero from "../assets/heroImg.png";
import background from "../assets/background.png";
import flower from "../assets/flower.png";
import brand from "../assets/brand.png";
import style1 from "../assets/style1.png";
import style2 from "../assets/style2.png";
import style3 from "../assets/style3.png";
import style4 from "../assets/styles4.png";
import styles5 from "../assets/styles5.png";
import cloth from "../assets/cloth.png";
import epiphany from "../assets/epiphany1.png";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="">
      <section className="overflow-x-hidden">
        <div>
          <img
            src={hero}
            alt="contact"
            className="lg:w-full h-80 bg-cover relative"
          />

          <div className="flex flex-row">
            <div className="absolute lg:top-1/2 lg:left-1/4 lg:transform -translate-y-1/2 top-60">
              <h1 className="lg:text-4xl text-2xl font-bold text-white">
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
          </div>
        </div>
      </section>
      <div className="lg:px-40 px-2">
        <section className=" h-20 lg:px-60 py-4">
          <img src={brand} alt="brand" className=" w-72 lg:w-full" />
        </section>
        <section className="lg:px-20 pl-4 py-4 flex lg:ml-40">
          <div class="flex lg:flex-row flex-col gap-2">
            <img src={style1} alt="Image 1" className="lg:w-80 w-64" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-96 h-40 gap-2">
                <img
                  src={style2}
                  alt="Image 1"
                  className="lg:w-96 w-32 lg:h-40"
                />
                <img
                  src={style3}
                  alt="Image 1"
                  className="lg:w-96 w-32 lg:h-40"
                />
              </div>
              <div className="flex flex-row w-96 h-40 gap-2">
                <img
                  src={style4}
                  alt="Image 1"
                  className="lg:w-96 w-32 lg:h-40"
                />
                <img
                  src={styles5}
                  alt="Image 1"
                  className="lg:w-96 w-32 lg:h-40"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pr-24 lg:pr-0">
          <h2 className="lg:px-20 flex items-center justify-center pt-4 text-xl">
            Best Sellers
          </h2>
          <div className="lg:px-60 flex items-center justify-between">
            <span>All Products</span>
            <button className="bg-black px-1 py-1 lg:mr-2 text-white text-sm">
              View All
            </button>
          </div>
        </section>
        <section className="lg:px-60 pb-2 flex flex-col">
          <div className="gap-6 flex lg:flex-row flex-col">
            <div className="flex flex-row lg:gap-6 gap-2">
              <div className=" max-h-screen flex flex-col py-4">
                <div className="bg-text-color border p-2 w-40 h-40 relativce">
                  <small className="bg-red-500 text-white text-xs w-12 flex items-center justify-center">
                    HOT
                  </small>
                  <IoIosArrowBack className="absolute mt-12 cursor-pointer text-yellow-500" />
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
                <div className="bg-text-color border p-2 w-40 h-40   relativce">
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
            <div className="flex flex-row lg:gap-6 gap-2">
              <div className=" max-h-screen flex flex-col py-4">
                <div className="bg-text-color border p-2 w-40 h-40 relativce">
                  <small className="bg-black text-xs text-white w-12 flex items-center justify-center">
                    SALE
                  </small>
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
                  <small className="bg-black text-xs text-white w-12 flex items-center justify-center">
                    SALE
                  </small>
                  <IoIosArrowForward className="absolute cursor-pointer mt-12 ml-32 text-yellow-500" />
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
          </div>
        </section>
        <section className="lg:px-60 mb-2 flex flex-col">
          <div className="gap-6 flex lg:flex-row flex-col">
            <div className="flex flex-row lg:gap-6 gap-2">
              <div className=" max-h-screen flex flex-col py-4">
                <div className="bg-text-color border p-2 w-40 h-40 relativce">
                  <small className="bg-black text-xs text-white w-12 flex items-center justify-center">
                    HOT
                  </small>
                  <IoIosArrowBack className="absolute cursor-pointer mt-12 text-yellow-500" />
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
            </div>
            <div className="flex flex-row lg:gap-6 gap-2">
              <div className=" max-h-screen flex flex-col py-4">
                <div className="bg-text-color border p-2 w-40 h-40 relativce">
                  <small className="bg-black text-xs text-white w-12 flex items-center justify-center">
                    SALE
                  </small>
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
                  <small className="bg-black text-xs text-white w-12 flex items-center justify-center">
                    SALE
                  </small>
                  <IoIosArrowForward className="absolute cursor-pointer mt-12 ml-32 text-yellow-500" />
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
          </div>
        </section>
      </div>
      <section className="flex flex-row">
        <div
          className="w-full h-80 bg-cover relative"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flow-row lg:gap-10">
            <img
              src={epiphany}
              alt="epiphany"
              className="lg:w-80 w-40 mt-12 lg:mt-0 lg:pt-6 lg:ml-60"
            />
            <div className="flex flex-col lg:ml-44 lg:mt-24 mt-20 mr-4">
              <h2 className="text-white text-2xl">Epiphany</h2>
              <p className="text-gray-300 lg:w-80 w-40">
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
      <section className="lg:px-40 flex flex-col">
        <h2 className="lg:px-20 flex pt-4 text-xl">References</h2>
        <div className="lg:px-20 flex lg:flex-row flex-col lg:m-4 mb-4 gap-4">
          <div className="lg:w-1/2 bg-custom-blue p-4 flex flex-col">
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
          <div className="lg:w-1/2 bg-custom-blue p-4 flex flex-col">
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
        <div className="hidden lg:flex flex-row gap-2 items-center justify-center mt-4 mb-12">
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
