import React from "react";

const Footer = () => {
  return (
    <div className="bg-custom-blue px-60">
      <div className="border-b-2 border-yellow-500 text-xs flex flex-row ml-40 space-x-20 py-4 gap-12">
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

        <div className="flex flex-col">
          Locate Us
          <button className="bg-green-500 text-white px-4">
            Get Direction
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 text-xs">
        <span>All rights reserved GTP 2022</span>
      </div>
    </div>
  );
};

export default Footer;
