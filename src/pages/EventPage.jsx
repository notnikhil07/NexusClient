import React from "react";
import data from "../data.json";
import EventCard from "../components/EventCard";

const EventPage = () => {
  // console.log(data);

  return (
    <div className="min-h-[84vh] p-2 my-4 ">
      <p className="font-bold text-2xl">Events</p>
      <div className="mt-6 flex items-center flex-wrap gap-4 justify-center  ">
        {data.map((d) => (
          <div key={d.id} className="flex items-center">
            <EventCard event={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
