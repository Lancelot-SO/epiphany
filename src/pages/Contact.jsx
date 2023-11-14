import React from "react";
import contactbg from "../assets/contactbg.png";
import map from "../assets/map.png";
import { BsTelephone } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div>
        <img src={contactbg} alt="contact" className="w-full h-80 bg-cover" />
      </div>
      <div className="flex lg:flex-row flex-col lg:px-60 pb-4 lg:pb-0">
        <div className="lg:w-1/2 w-full lg:py-4 py-8">
          <h1 className="text-3xl">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <small>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </small>
          <form className="lg:mt-4 flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="lg:w-96 lg:h-10 border lg:p-2 lg:mb-2 mb-4 mt-4 lg:mt-0"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="lg:w-96 lg:h-10 border lg:p-2 lg:mb-2 mb-4 mt-4 lg:mt-0"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="PhoneNumber"
              className="lg:w-96 lg:h-10 border lg:p-2 lg:mb-2 mb-4 mt-4 lg:mt-0"
            />

            <select
              id="media"
              name="media"
              className="lg:w-96 lg:h-10 border lg:p-2 lg:mb-2 mb-4 mt-4 lg:mt-0"
            >
              <option>How did you find us?</option>
              <option value="option1">Twitter</option>
              <option value="option2">Facebook</option>
              <option value="option3">Tiktok</option>
            </select>

            <button
              type="submit"
              className="lg:w-96 lg:h-10 bg-yellow-500 text-white lg:p-2 lg:mb-4 mb-4 mt-4 lg:mt-0"
            >
              Send
            </button>

            <div className="flex lg:flex-row flex-col lg:gap-12 text-xs ">
              <div className="flex lg:flex-row items-center lg:gap-2 mb-2 lg:mb-0">
                <BsTelephone />
                <div className="flex lg:flex-col">
                  <small>Phone</small>
                  <a
                    href="hanisberg19@gmail.com"
                    className="text-yellow-500"
                    target="_blank"
                  >
                    0556318804
                  </a>
                </div>
              </div>

              <div className="flex lg:flex-row items-center lg:gap-2 mb-2 lg:mb-0">
                <FaFax />
                <div className="flex lg:flex-col ">
                  <small>Fax</small>
                  <a
                    href="hanisberg19@gmail.com"
                    className="text-yellow-500"
                    target="_blank"
                  >
                    030 547 6886{" "}
                  </a>
                </div>
              </div>

              <div className="flex lg:flex-row items-center lg:gap-2 mb-2 lg:mb-0">
                <MdOutlineEmail />
                <div className="flex lg:flex-col">
                  <small>Email</small>
                  <a
                    href="hanisberg19@gmail.com"
                    className="text-yellow-500"
                    target="_blank"
                  >
                    hanisberg19@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:py-2">
          <img src={map} alt="contact" className="lg:w-full lg:h-96 bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
