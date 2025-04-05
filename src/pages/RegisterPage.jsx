import React, { useEffect, useState } from "react";
import QRCodeImage from "../assets/payment.jpg";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { FiUpload } from "react-icons/fi";
import { PiFilePdfLight } from "react-icons/pi";

const eventsList = [
  "Robo Kickoff",
  "Hurdle Hustle",
  "Path Follower",
  "Quizaholic",
  "Sand Surfer",
  "Victory Arena",
  "The Golden Quest",
  "Cadion",
  "Interface Insider",
  "Debug Dynamo",
  "Robo Rally",
  "Truss Arch",
  "Armstrong",
  "Startup Idea",
  "Thrust Arena",
  "Stall Showdown",
  "Amphibious Robot",
];

const tshirtSizes = ["S", "M", "L", "XL", "XXL"];

const RegisterPage = () => {
  const { user } = useStore();
  const navigate = useNavigate();
  const name = user?.fullname;
  const email = user?.email;
  const [formData, setFormData] = useState({
    clgName: "",
    registrationNo: "",
    branch: "",
    mobile: "",
    batch: "",
    events: [],
    teamName: "",
    paymentProof: null,
    tshirtSize: "", // Added T-shirt size field
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentProof: e.target.files[0] });
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      events: checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value),
    }));
  };
  const handleTshirtChange = (e) => {
    setFormData({ ...formData, tshirtSize: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.clgName) newErrors.clgName = "College Name is required";
    if (!formData.registrationNo)
      newErrors.registrationNo = "Registration No. is required";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit Mobile No. required";
    if (!formData.batch) newErrors.batch = "Batch is required";
    if (formData.events.length === 0)
      newErrors.events = "Select at least one event";
    if (!formData.paymentProof) newErrors.paymentProof = "Upload payment proof";
    if (!formData.tshirtSize) newErrors.tshirtSize = "Select a T-shirt size";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    Object.keys(formData).forEach((key) => {
      if (key === "events") {
        formData[key].forEach((event) =>
          formDataToSend.append("events", event)
        );
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axiosInstance.post(
        "/event/register",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      navigate(`/success/${response.data.newRegistration.studentEventId}`);
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error);
      alert("Registration Failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-3 my-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Event Registration
      </h2>
      <div
        className="text-blue-500 flex items-center gap-1 cursor-pointer"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1gRTyqlEp_nESPCmVxgO_-iaRM_DFUsOQ/view?usp=sharing",
            "_blank"
          );
        }}
      >
        <PiFilePdfLight /> Click here to know how to register
      </div>
      <form
        onSubmit={handleSubmit}
        className=" md:shadow-lg rounded-lg md:p-8 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 "
      >
        <InputField label="Full Name" name="name" value={name} disabled />
        <InputField label="Email" name="email" value={email} disabled />
        <InputField
          label="College Name"
          name="clgName"
          value={formData.clgName}
          onChange={handleChange}
          error={errors.clgName}
        />
        <InputField
          label="Registration No."
          name="registrationNo"
          value={formData.registrationNo}
          onChange={handleChange}
          error={errors.registrationNo}
        />
        <InputField
          label="Branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          error={errors.branch}
        />
        <InputField
          label="Mobile No."
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />
        <InputField
          label="Batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          error={errors.batch}
        />
        <InputField
          label="Team Name (Optional)"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
        />

        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Events
          </label>
          <div className="grid grid-cols-2 gap-2">
            {eventsList.map((event) => (
              <label key={event} className="flex items-center">
                <input
                  type="checkbox"
                  value={event}
                  onChange={handleEventChange}
                  checked={formData.events.includes(event)}
                />
                <span className="ml-2">{event}</span>
              </label>
            ))}
          </div>
          {errors.events && (
            <p className="text-red-500 text-xs mt-1">{errors.events}</p>
          )}
        </div>
        {/* T-shirt Size Selection */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            T-shirt Size
          </label>
          <select
            name="tshirtSize"
            value={formData.tshirtSize}
            onChange={handleTshirtChange}
            className="w-full border p-2 rounded bg-gray-50"
          >
            <option value="">Select Size</option>
            {tshirtSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.tshirtSize && (
            <p className="text-red-500 text-xs mt-1">{errors.tshirtSize}</p>
          )}
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <p className="font-semibold">Scan QR Code to Pay</p>
          <img src={QRCodeImage} alt="QR Code" className="w-40 my-2" />
          <p className="font-bold">Or</p>
          <div>
            <p className="text-center"> Bank Details of ASIMO</p>
            <p>A/C No.:-902802010001228</p>
            <p> A/C Holder Name :- AASHU PRAKASH</p>
            <p>IFSC Code :-UBIN0590282</p>
            <p>Bank:- Union Bank of India</p>
            <p> Branch:- Narghoghi Subhash Chowk, Narghoghi</p>
            
          </div>
        </div>
          <div className="text-red-500 w-full">
         <p> NOTE*: Add Screenshot with visible UTR no. or UPI transaction ID </p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Payment Proof
          </label>
          <div
            className="border p-3 flex items-center justify-center rounded cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <FiUpload className="text-gray-600" />
            <span className="ml-2">
              {formData.paymentProof
                ? formData.paymentProof.name
                : "Choose File"}
            </span>
          </div>

          {errors.paymentProof && (
            <p className="text-red-500 text-xs mt-1">{errors.paymentProof}</p>
          )}
        </div>
        <div className="text-red-500 w-full">
          Note: The registration fee for NEXUS'25 is ₹300 per person, And all
          participants must register individually.If you participate in the
          Victory Arena, An additional charge of ₹50 will apply.Event registration
          is mandatory for Nexus'25. You cannot be a part of Nexus just by 
          participating in a single Victory Arena(for other colleges only).

        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, error, disabled }) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full border p-2 rounded bg-gray-50"
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default RegisterPage;
