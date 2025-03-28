import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Reach out to us for any inquiries or visit us at our location.
      </p>

      {/* Contact Info */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 gap-2 flex flex-col md:flex-row md:justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-blue-600 text-3xl" />
          <p className="text-gray-700 text-lg">GEC Samastipur, India</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-600 text-3xl" />
          <p className="text-gray-700 text-lg">+91-9934152747</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-600 text-3xl" />
          <p className="text-gray-700 text-lg">asimo.gecsamastipur@gmail.com</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl h-80 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3028808859026!2d85.72860547539925!3d25.72749557737338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed85495774ca1d%3A0x5419858c74237c33!2sGovernment%20Engineering%20College%20(GEC)%2C%20Samastipur!5e0!3m2!1sen!2sin!4v1743066830289!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
