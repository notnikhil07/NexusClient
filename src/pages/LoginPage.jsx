import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
import useStore from "../store/store";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axiosInstance from "../api/axiosInstance";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useStore();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [isLoggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      setLoginError("Please fill all required fields");
      return;
    }
    if (userData.password.length < 8) {
      setLoginError("Password must be at least 8 characters long");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userData.email)) {
      setLoginError("Please provide a valid email address");
      return;
    }
    try {
      setLoggingIn(true);

      const response = await axiosInstance.post("/auth/login", userData);
      // console.log(response.data);

      setUser(response.data.user);
      setLoggingIn(false);
      setLoginError("");
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
      setLoginError("Failed to signup. Please try again later.");
      setLoggingIn(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col ">
      <div
        className="absolute top-4 left-4 md:top-10 md:left-10 flex items-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaAngleLeft className="size-5" />
        Home
      </div>
      <form
        className="flex items-center justify-center flex-col gap-4 md:border p-4 w-full sm:w-[70%] md:w-[50%] lg:w-[30%] rounded border-gray-300 md:shadow-sm"
        onSubmit={handleSubmit}
      >
        <img src="/nexus logo.png" alt="" className="h-20" />
        <h1 className="font-bold">Login Page</h1>

        <div className="w-full">
          <p className="flex items-center gap-1 my-1">
            <MdOutlineEmail />
            Email Address
          </p>

          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="nikhil@gmail.com"
            className="rounded border px-2 py-1 w-full border-gray-300"
          />
        </div>

        <div className="w-full">
          <p className="flex items-center gap-1 my-1">
            <PiPassword />
            Password
          </p>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="**********"
              className="rounded border border-gray-300 px-2 py-1 w-full"
            />
            <div
              className={` absolute right-4 top-2 cursor-pointer text-gray-400`}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FiEye className="" /> : <FiEyeOff />}
            </div>
          </div>
        </div>

        <input
          type="submit"
          value={isLoggingIn ? "Logging in..." : "Sign In"}
          className="bg-blue-500 w-full p-2 rounded font-bold cursor-pointer hover:bg-blue-400 text-white"
        />
        {loginError && <p className="text-red-400">{loginError}</p>}
        <p>
          Don't have an account?{" "}
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
