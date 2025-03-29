import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import axiosInstance from "../utils/axiosInstance";

const SingleRegistrationPage = () => {
  const { id } = useParams();
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads

    const fetchRegistration = async () => {
      try {
        const res = await axiosInstance.get(`/event/getsingle/${id}`);
        // console.log("Fetched Registration:", res.data);
        setRegistration(res.data);
      } catch (error) {
        console.error("Error fetching registration:", error);
      }
    };

    fetchRegistration();
  }, [id]);

  if (!registration || !id) return <p className="min-h-screen">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white  rounded-lg min-h-screen">
      <div
        className="absolute top-28 left-4  md:top-28 md:left-10  "
        onClick={() => {
          window.history.back();
        }}
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4">Registration Details</h2>
      <p>
        <strong>Student Event ID:</strong> {registration.studentEventId}
      </p>
      <p>
        <strong>Name:</strong> {registration.name}
      </p>
      <p>
        <strong>Email:</strong> {registration.email}
      </p>
      <p>
        <strong>College:</strong> {registration.clgName}
      </p>
      <p>
        <strong>Registration No:</strong> {registration.registrationNo}
      </p>
      <p>
        <strong>Branch:</strong> {registration.branch}
      </p>
      <p>
        <strong>Batch:</strong> {registration.batch}
      </p>
      <p>
        <strong>Mobile:</strong> {registration.mobile}
      </p>
      <p>
        <strong>Team Name:</strong> {registration.teamName}
      </p>
      <p>
        <strong>Events:</strong> {registration.event?.join(", ")}
      </p>
      <p>
        <strong>Tshirt Size:</strong> {registration?.tshirtSize}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(registration.createdAt).toLocaleString()}
      </p>

      <div className="mt-4">
        <strong>Payment Proof:</strong>
        <img
          src={registration.paymentProof}
          alt="Payment Proof"
          className="w-full mt-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SingleRegistrationPage;
