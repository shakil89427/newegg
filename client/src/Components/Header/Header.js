import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../Store/useStore";
import logo from "../../Assets/header/Logo.png";
import defaultUser from "../../Assets/defaultUser.png";
import male from "../../Assets/Male.png";
import female from "../../Assets/Female.png";
import { ImUser } from "react-icons/im";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  const { user, cart, setUser, setShowLoginSignup } = useStore();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-[#FE5900] px-5 h-[60px] md:h-[75px]">
      <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between gap-5 md:gap-10">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className="cursor-pointer h-[35px] md:h-[50px]"
        />
        <div className="w-full flex items-center justify-end gap-5 md:gap-10">
          <form
            action="#"
            className="bg-[#F0F0F0] w-full max-w-[700px] md:flex items-center pr-3 rounded-lg gap-3 hidden text-xs"
          >
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none border-none w-full p-3 placeholder:text-xs"
            />
            <button type="submit">
              <BiSearchAlt2 className="text-2xl" />
            </button>
          </form>
          <BiSearchAlt2 className="text-2xl text-white md:hidden" />
          <div
            className="flex items-center gap-2 text-white select-none cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="relative">
              <p className="absolute -top-3 -right-2 text-xs">{cart.length}</p>
              <BsFillCartFill className="text-2xl" />
            </span>
          </div>
          {user?._id ? (
            <div
              className="relative select-none md:mr-5 xl:mr-0"
              onClick={() => setShow((prev) => !prev)}
            >
              <div className="flex items-center gap-2 cursor-pointer font-bold text-white text-xs">
                <img
                  src={
                    user?.gender === "Male"
                      ? male
                      : user?.gender === "Female"
                      ? female
                      : defaultUser
                  }
                  alt=""
                  className="w-8 rounded-full"
                />
                <p className="whitespace-nowrap">{user?.fullName}</p>
                <p>
                  <IoMdArrowDropdown className="text-2xl -translate-x-2" />
                </p>
              </div>
              {show && (
                <>
                  <div className="fixed top-0 left-0 w-screen h-screen z-30" />
                  <div className="absolute top-full right-0 bg-white w-[220px] p-2 rounded-md z-40 mt-2 font-bold shadow-xl text-xs">
                    <div className="absolute top-0 right-5 w-4 h-4 bg-white rotate-45 -translate-y-1/2" />
                    <p
                      onClick={() => navigate("/profile")}
                      className="hover:bg-[#FE5900] hover:text-white py-2 my-2 px-3 rounded-lg cursor-pointer"
                    >
                      Profile
                    </p>
                    <p
                      onClick={() => navigate("/myorders")}
                      className="hover:bg-[#FE5900] hover:text-white py-2 my-2 px-3 rounded-lg cursor-pointer"
                    >
                      My Orders
                    </p>
                    <p
                      onClick={() => {
                        setUser({});
                        localStorage.removeItem("accessToken");
                      }}
                      className="hover:bg-[#FE5900] hover:text-white py-2 my-2 px-3 rounded-lg cursor-pointer"
                    >
                      Signout
                    </p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              onClick={() => setShowLoginSignup(true)}
              className="flex items-center gap-2 text-white text-sm select-none cursor-pointer"
            >
              <ImUser className="text-2xl" />
              <p className="font-bold whitespace-nowrap">Sign in / Sign up</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
