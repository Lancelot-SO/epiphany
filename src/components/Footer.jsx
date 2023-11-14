import React from "react";

const Footer = () => {
  return (
    <div className="bg-custom-blue lg:px-60 overflow-x-hidden">
      <div className="border-b-2 border-yellow-500 text-xs flex flex-row lg:ml-40 lg:space-x-20 py-4 lg:gap-12 gap-2">
        <div className="flex flex-col">
          <h1 className="font-bold">Need help?</h1>
          <span>Terms and Condition</span>
          <span>Delivery Policy</span>
          <span>No Refund </span>
          <span>Contact</span>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold">The Company</h1>
          <span>About us</span>
          <span>Shop</span>
          <span>Products</span>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold">Find us on</h1>
          <span>Facebook</span>
          <span>Tiktok</span>
          <span>Instagram </span>
        </div>

        <div className="hidden lg:flex flex-col">
          Locate Us
          <button className="bg-green-500 text-white px-4">
            Get Direction
          </button>
        </div>
      </div>
      <div className="flex text-xs lg:hidden flex-col py-2">
        Locate Us
        <button className="bg-green-500 text-white px-4 w-28 py-1">
          Get Direction
        </button>
      </div>
      <div className="flex items-center justify-center mt-2 text-xs">
        <span>All rights reserved GTP 2022</span>
      </div>
    </div>
  );
};

export default Footer;
