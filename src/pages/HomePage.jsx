import React from "react";
import { MdCelebration } from "react-icons/md";
import { PiFilePdfLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] w-full flex items-center flex-col justify-center bg-gradient-to-br from-white via-[#dbeafe] to-white">
      {/* Content */}
      <div className="flex flex-col items-center text-center px-6">
        <p className="bg-violet-300 rounded-2xl py-1 px-3 text-violet-700 texty2 shadow-sm flex items-center gap-1 ">
          It's Fest Season'25 <MdCelebration />
        </p>
        <h1 className="font-bold text-[50px] lg:text-[100px] drop-shadow-lg text-gray-900 texty">
          NEXUS'25
        </h1>
        <p className="md:text-xl text-gray-700 drop-shadow-md mx-[50px] lg:mx-[200px] texty2">
          {" "}
          Welcome to Nexus'25
        </p>
        <p className="md:text-xl text-gray-700 drop-shadow-md mx-[50px] lg:mx-[200px] texty2">
          The Annual Techfest of GEC Samastipur! This time it's an inter
          College tech fest. Join us for a celebration of innovation with
          workshops, competitions, and inspiring speakers. Connect with fellow
          tech enthusiasts and showcase your talents!
        </p>
        <p className="w-full text-center text-red-500 mx-6 my-3">
      Note: Event registration is mandatory for Nexus'25. You cannot be a part of Nexus just by participating in a single Victory Arena.
          </p>


        {/* Register Button */}
        <p
          className="mt-6 bg-[#0D0630] text-white hover:bg-blue-400 rounded-3xl px-6 py-3 cursor-pointer font-semibold shadow-md transition"
          onClick={() => navigate("/register")}
        >
          Register Now
        </p>

        {/* Brochure Download */}
        <div
          className="flex items-center justify-center my-4 gap-1 rounded-3xl border px-6 py-2 cursor-pointer transition hover:bg-gray-100"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1zI1x9FAWiGWl44HyLuL1CfwnbsU0hDv-/view?usp=sharing",
              "_blank"
            )
          }
        >
          <PiFilePdfLight />
          Brochure
        </div>
      </div>
      {/* Custom Moving "Register Now" */}
      <div
        className="w-full overflow-hidden bg-[#0D0630] text-white py-2 cursor-pointer mt-12"
        onClick={() => navigate("/register")}
      >
        <div className="marquee whitespace-nowrap text-xl font-bold uppercase">
          {Array(10)
            .fill("REGISTER NOW 🚀")
            .map((text, index) => (
              <span key={index} className="mx-8">
                {text}
              </span>
            ))}
        </div>
      </div>
         <p className="md:text-xl text-gray-700 drop-shadow-md mx-[50px] lg:mx-[200px] texty2">
          Note*: Registration is compulsory to access for free accomodation.
        </p>
    </div>
  );
};

export default HomePage;
