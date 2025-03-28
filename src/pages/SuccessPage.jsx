import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full ">
        <FaCheckCircle className="text-green-500 w-full text-6xl mb-4" />
        <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
        <p className="text-gray-600">Your Student Event ID:</p>
        <p className="text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md my-2">
          {id}
        </p>
        <p>
          You must have received the details on your mail. (check you spam
          folder)
        </p>
        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/user")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
