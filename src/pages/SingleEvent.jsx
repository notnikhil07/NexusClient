import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFilePdf } from "react-icons/fa";
import eventsData from "../data.json"; // Import your JSON data

const SingleEvent = () => {
  const { id } = useParams(); // Get event ID from URL params
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Event Not Found
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="max-w-3xl mx-6 md:mx-auto  bg-white  rounded-lg my-3 min-h-screen ">
      <button
        className="flex items-center text-gray-700 hover:text-gray-900 absolute top-28 left-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-3xl font-bold text-blue-500 mt-10 ">
        {event.eventName}
      </h1>
      <p className="text-gray-500 mt-2">
        {event.date} | {event.venue}
      </p>
      <p className="text-lg mt-4">{event.about}</p>

      <img src={event.image} className="my-3" alt="" />
      <div className="mt-6">
        {event.registrationClosed ? (
          <p className="text-red-600 font-semibold">Registration is Closed</p>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate(`/register`)}
          >
            Register Now
          </button>
        )}
      </div>
      <a
        href={event.pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mt-4 text-black hover:underline"
      >
        <FaFilePdf className="mr-2 text-black" /> View Event Details
      </a>
    </div>
  );
};

export default SingleEvent;
