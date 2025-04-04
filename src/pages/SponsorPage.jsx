import React from "react";

const sponsors = [
  "/s1.jpg",
  "/s2.jpg",
  "/s3.jpg",
  "/s4.jpg",
  "/s5.jpg",
  "/s6.jpg",
  "/s7.jpg",
  // "/s8.jpg",
];

const SponsorPage = () => {
  return (
    <div className="min-h-[84vh] p-4 text-blue-500">
      <div className="flex flex-col items-center">
        <h1 className="my-4 text-3xl font-semibold text-black">Our Sponsors</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
