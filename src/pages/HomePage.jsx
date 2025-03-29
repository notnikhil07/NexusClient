import React from "react";
import { PiFilePdfLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] z-[0]">
      <div className="flex items-center justify-center flex-col w-full min-h-[80vh]">
        <h1 className="font-bold text-[50px] lg:text-[100px]  drop-shadow-lg texty">
          NEXUS'25
        </h1>
        <p className="md:text-xl drop-shadow-md mx-[50px] lg:mx-[200px] text-center  texty2">
          Welcome to Nexus'25 , the Annual Techfest of GEC Samastipur! Join us
          for a celebration of innovation with workshops, competitions, and
          inspiring speakers. Connect with fellow tech enthusiasts and showcase
          your talents!
        </p>{" "}
        <p
          className=" bg-[#0D0630] text-white  hover:bg-blue-400 mt-6 rounded-3xl px-6 py-3  cursor-pointer font-semibold shadow-md transition"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register Now
        </p>
        <div
          className="flex items-center justify-center my-4 gap-1 rounded-3xl border  px-6 py-2 cursor-pointer "
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1zI1x9FAWiGWl44HyLuL1CfwnbsU0hDv-/view?usp=sharing",
              "_blank"
            );
          }}
        >
          <PiFilePdfLight />
          Brochure
        </div>
      </div>

      {/* <div className="relative  h-screen w-full flex items-center justify-center bg-center  bg-contain bg-no-repeat  bg-[url('./bg1.png')]"> */}
      {/* Overlay for darkening the background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/90 to-transparent"></div> */}
      {/* <p
          className="my-4 bg-white mt-102  text-black rounded-3xl px-6 py-3 cursor-pointer font-semibold shadow-lg hover:bg-gray-200 transition"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register Now
        </p> */}
      {/* Content */}
      {/* <div className="relative text-white flex items-center justify-center flex-col  w-[90%] md:w-[50%] text-center gap-4"> */}
      {/* <h1 className="font-bold text-5xl my-2 drop-shadow-lg">NEXUS'25</h1>
          <p className="text-3xl drop-shadow-md">
            Welcome to{" "}
            <span className=" text-orange-500 rounded">Nexus'25</span> , the
            Annual Techfest of GEC Samastipur! Join us for a celebration of
            innovation with workshops, competitions, and inspiring speakers.
            Connect with fellow tech enthusiasts and showcase your talents!
          </p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
