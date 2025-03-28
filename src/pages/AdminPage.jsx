import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import axiosInstance from "../api/axiosInstance";
import { CiLogout } from "react-icons/ci";

const AdminPage = () => {
  const { user, setUser } = useStore(); // Get setUser from store
  const [allRegistrations, setAllRegistrations] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchAllRegistrations = async () => {
      try {
        const response = await axiosInstance.get("/event/getall");
        // console.log(response.data);
        setAllRegistrations(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRegistrations();
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setUser(null); // Corrected: use setUser from store
      navigate("/"); // Navigate after logout
    } catch (error) {
      console.log(error.response);
    }
  };

  // ✅ Ensure hooks are at the top and return only valid JSX
  if (!user || user.role !== "admin") {
    return <div>Unauthorized Access</div>;
  }

  return (
    <div className="min-h-[85vh] p-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-blue-500 text-2xl">Admin Page</h1>
          <p>Welcome, {user?.fullname}</p>
        </div>
        <div
          className="flex items-center gap-1 bg-red-500 text-white p-1 rounded cursor-pointer"
          onClick={handleLogout}
        >
          <CiLogout />
          logout
        </div>
      </div>
      <h1 className="my-2 text-blue-500 text-2xl">
        All Registrations ({allRegistrations?.length || 0})
      </h1>

      {allRegistrations?.map((registration) => (
        <div
          key={registration._id}
          className="cursor-pointer p-2 border border-gray-300 rounded-lg my-2"
          onClick={() => navigate(`/single/${registration._id}`)} // Fixed path
        >
          <h1 className="font-bold">
            Event ID: {registration?.studentEventId}
          </h1>
          <h2>Name: {registration.name}</h2>
          <p>Email: {registration.email}</p>
          <p>Phone: {registration.mobile}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
