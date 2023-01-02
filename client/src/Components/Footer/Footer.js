import React from "react";
import logo from "../../Assets/footer/Logo.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const links = [
    "Home",
    "About us",
    "Services",
    "Contact",
    "Terms of use",
    "Privacy Policy",
  ];
  const navigate = useNavigate();

  return (
    <div className="bg-black py-12 lg:py-20 text-white text-sm md:text-md font-bold px-5">
      <div className="max-w-[1200px] mx-auto grid  grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-20 lg:items-center">
        <div className="w-fit mx-auto lg:mx-0">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt=""
            className="w-full max-w-[170px] cursor-pointer"
          />
          <div className="flex items-center gap-2 mt-5 text-2xl w-fit mx-auto lg:mx-0">
            <AiFillFacebook className="cursor-pointer" />
            <AiFillInstagram className="cursor-pointer" />
            <RiWhatsappFill className="cursor-pointer" />
            <BsYoutube className="cursor-pointer" />
          </div>
        </div>

        <div className="lg:col-span-2 order-2 lg:order-1 border-y border-gray-500 lg:border-0 py-5 lg:py-0">
          <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-5">
            {links.map((link) => (
              <p
                key={link}
                className="text-gray-400 hover:text-white hover:cursor-pointer"
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="max-w-[300px] mx-auto text-center">
            <p>Stay In Touch</p>
            <p className="bg-[#0069B8] py-3 rounded-full mt-3">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
