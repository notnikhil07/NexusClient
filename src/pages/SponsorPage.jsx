import React from "react";
import BoxCard from "../components/BoxCard";

const SponsorPage = () => {
  return (
    <div className="min-h-[84vh] p-2  text-3xl text-blue-500">
      <div className="flex items-center justify-center flex-col">
      <h1 className="my-2 text-black text-md">Our Sponsors</h1>
        <div className="flex items-center justify-center flex-wrap gap-6">
          <BoxCard />
          <BoxCard />
          <BoxCard />
          <BoxCard />
          <BoxCard />
          <BoxCard />
          <BoxCard />
          <BoxCard />
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
