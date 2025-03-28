import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[84vh] z-[0]">
      <div className="relative min-h-[70vh] h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('./nexusbg.avif')]">
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/90 to-transparent"></div>

        {/* Content */}
        <div className="relative text-white flex items-center justify-center flex-col  w-[90%] md:w-[50%] text-center gap-4">
          <h1 className="font-bold text-5xl my-2 drop-shadow-lg">NEXUS'25</h1>
          <p className="text-3xl drop-shadow-md">
            Welcome to <span className=" text-orange-500 rounded">Nexus'25</span>{" "}
            , the Annual Techfest of GEC Samastipur, This time it's inter college tech fest.  Join us for a celebration
            of innovation with workshops, competitions, and inspiring speakers.
            Connect with fellow tech enthusiasts and showcase your talents!
          </p>
          <p
            className="my-4 bg-white text-black rounded-3xl px-6 py-3 cursor-pointer font-semibold shadow-lg hover:bg-gray-200 transition"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
