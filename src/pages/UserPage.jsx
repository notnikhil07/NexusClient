import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { CiLogout } from "react-icons/ci";import { FaWhatsapp } from "react-icons/fa6";

const UserPage = () => {
  const { user, setUser } = useStore();
  const [userRegistration, setUserRegistration] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      // console.log(response.data);
      setUser(null);

      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchRegistrationByEmail = async () => {
    try {
      const response = await axiosInstance.get(`/event/get`);
      // console.log(response.data.registrations);
      if (response.data.message == "Registration found") {
        setUserRegistration(response.data.registrations);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchRegistrationByEmail();
  }, [user]);
  return (
    <div className="min-h-screen">
      <div className="flex items-center  my-2 p-2 justify-between">
        <p>Hi {user?.fullname}, Welcome to our website. </p>
        <p
          className="bg-red-500 flex items-center justify-center gap-1 cursor-pointer hover:bg-red-400 text-white px-2 py-1 rounded"
          onClick={() => {
            handleLogout();
          }}
        >
          <CiLogout /> Logout
        </p>
      </div>
      <div className="my-2 mx-2 bg-green-500 text-white px-3 py-2 rounded flex items-center justify-center gap-1">
        <FaWhatsapp />
        <a href="https://chat.whatsapp.com/Jvn8gGrBqvqHFXZHRlmYHu" target="_blank">Click to join Whatsapp Group</a>
      </div>
      {!userRegistration  ? (
        <div>
          <div className="mx-2 text-green-700">
            Please register for events if you have not yet registered.
          </div>
          <p
            className="mx-2 bg-blue-500 w-[130px] my-2 rounded flex items-center justify-center text-white px-2 py-1"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register here
          </p>
        </div>
      ) : (
        userRegistration &&
        userRegistration.map((r) => (
          <div
            key={r._id}
            className="cursor-pointer"
            onClick={() => {
              navigate(`/single/${r._id}`);
            }}
          >
            <div className="mx-2">
              <span className="font-bold">Student Event ID: </span>
              {r.studentEventId}
            </div>
            <div className="mx-2">
              <span className="font-bold">Registration Date: </span>
              {new Date(r.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserPage;
