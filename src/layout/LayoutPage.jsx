import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useStore from "../store/store";
import logo from "../assets/nexus.png";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
const LayoutPage = () => {
  const navigate = useNavigate();
  const { checkAuth, user } = useStore();
  const [menu, setMenu] = useState(true);
  // console.log(user);
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);
  return (
    <div>
        <div className="flex items-center justify-center py-2 bg-[#0D0630] text-white text-sm md:text-md">
        NEXUS'25 – Innovate ✨ Compete 🏆 Conquer 🚀
      </div>
      <nav className=" border-b  border-blue-500  py-3 px-4  flex items-center justify-between ">
        {/* logo  */}
        <h1
          className="font-bold text-black cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/newlogo.png" alt="" className="h-10" />
          {/* NEXUS'25 */}
        </h1>
        {/* <img src={logo} alt="" className="size-10 bg-black" /> */}

        {/* items  */}
        <ul
          className={` ${
            menu ? "translate-x-[-200%]" : "translate-x-0"
          } transition-all duration-300 md:bg-transparent  md:translate-x-0 md:static md:p-0 md:pt-0 md:flex-row md:flex items-center justify-center  gap-5 lg:gap-10 absolute top-0 left-0 bg-white w-full p-4 flex  flex-col pt-14 md:text-black z-[999] h-full text-2xl  md:text-[18px]`}
        >
          <li
            className="absolute right-5 top-5 md:hidden"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <IoMdClose />
          </li>
          <li
            onClick={() => {
              navigate("/");
              setMenu(true);
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Home
          </li>
          {/* <li
            onClick={() => {
              navigate("/team");
              setMenu(true);
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Team
          </li> */}
          <li
            onClick={() => {
              setMenu(true);
              navigate("/sponsor");
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Sponsors
          </li>
          <li
            onClick={() => {
              setMenu(true);
              navigate("/event");
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Events
          </li>
          <li
            onClick={() => {
              setMenu(true);
              navigate("/schedule");
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Schedule
          </li>
          <li
            onClick={() => {
              setMenu(true);
              navigate("/register");
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Register
          </li>
          <li
            onClick={() => {
              setMenu(true);
              navigate("/contact");
            }}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact Us
          </li>
          <li
            className={` ${
              user ? "hidden" : ""
            } md:hidden bg-blue-500 rounded-3xl px-4 py-2 `}
            onClick={() => {
              setMenu(true);
              navigate("/login");
            }}
          >
            Login
          </li>
        </ul>

        <div
          className={` ${
            user ? "hidden" : ""
          } md:flex items-center justify-center gap-4 hidden`}
        >
          <div
            onClick={() => {
              navigate("/login");
            }}
            className={`${
              user ? "hidden" : ""
            } bg-blue-500 px-2 py-1 rounded-3xl text-white cursor-pointer border`}
          >
            Login
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 flex-row-reverse">
          <div
            className="text-xl md:hidden"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <CiMenuFries />
          </div>
           <div
            className={` ${
              user ? "" : "hidden"
            } flex items-center justify-center gap-4 size-8 md:size-10 rounded-full  cursor-pointer  text-black  text-2xl  border-black `}
            onClick={() => {
              if (user.role === "admin") {
                navigate("/admin");
              } else {
                navigate("/user");
              }
            }}
          >
            <FaUser />
            {/* <p>{user?.fullname.charAt(0)}</p> */}
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      {/* footer  */}
      <footer className="border-t border-blue-500 p-8 bg-gradient-to-r from-blue-900 to-black text-white flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:px-16">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold">Nexus'25</h2>
          <p className="text-gray-300 text-sm max-w-sm mt-2">
            Connecting innovators and visionaries for a brighter future.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-medium mb-2">Contact Us</h3>
          <a
            href="tel:+91-7050705004"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaPhoneAlt /> +91-7050705004
          </a>
          <a
            href="mailto:asimogecsamastipur@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition mt-1"
          >
            <FaEnvelope />
            asimo.gecsamastipur@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-medium mb-2">Follow Us On</h3>
          <div className="flex gap-4">
            <a
              href=" https://www.facebook.com/100083200943059/posts/pfbid022C4nAHLs7LsBaVKDfT24TSSMA3YQCToUj2U5ekfvWtFDyU49fLia8JmwjDEbBvuXl/?app=fbl
https://www.instagram.com/p/DD_OrNGSUfn/?igsh=MTFmbjcyeWg3eHdh
"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/asimo_gecsmp/status/1871771249632035134?t=bnPnKlHDsOxlQGBebTlyoQ&s=08
"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/asimo_gecsamastipur?igsh=MWxqbnQ4ZHNwbTYz
"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/asimo-gecsamastipur/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-6 md:mt-0 text-center w-full md:w-auto">
          &copy; 2025 Nexus. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LayoutPage;
