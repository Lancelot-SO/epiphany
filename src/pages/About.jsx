import React from "react";
import aboutbg from "../assets/aboutbg.png";
import background from "../assets/aboutBackground.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <div>
        <img src={background} alt="contact" className="w-full h-80 bg-cover" />
      </div>
      <div>
        <div className="flex flex-col lg:px-72 lg:pt-2  lg:pb-8 items-start justify-center">
          <img
            src={aboutbg}
            alt="about"
            className="lg:w-60 lg:h-80 mt-11 relative "
          />
          <div className="flex absolute flex-col lg:w-96 lg:ml-20">
            <h2 className="font-bold lg:mt-8">About Us</h2>
            <small className="text-xs lg:mb-2">
              Epiphany is the Ghanian hyperlocal online platform that helps
              customers to connect with their potential customers in real-time.
              With Roffers, merchants can build a strong brand presence and
              increase high visibility to get discovered easily.
            </small>
            <h2 className="font-bold">Hey Shoppers!</h2>
            <small>Hate missing out on offers around you</small>
            <br />
            <small>
              Don’t worry with Epiphany now you will be able to see what your
              favorite <br />
              merchants have in store for you.
            </small>
            <br />
            <small>So, what are you waiting for? </small>
            <h2>Follow Epiphany AND SPREAD THE WORD!</h2>
            <ul className="flex flow-row lg:gap-2">
              <li>
                <RiTwitterXLine />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <BiLogoFacebook />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
