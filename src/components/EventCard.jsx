import { useState } from "react";
import { FaInfoCircle, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`w-full sm:w-80 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 ${
        isHovered ? "scale-105 shadow-xl" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={event.image}
        alt={event.eventName}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          {event.eventName}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {event.date} | {event.venue}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
          {event.shortInfo}
        </p>
        <div className="mt-4 flex gap-2">
          <button
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            onClick={() => {
              navigate(`/singleevent/${event.id}`);
            }}
          >
            <FaInfoCircle />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
