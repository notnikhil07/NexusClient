import React from 'react';

const RegisterPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Registrations Closed
        </h1>
        <p className="text-gray-600 text-base">
          Thank you for your interest. Registrations for this event are now closed. We hope to see you at our future events!
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-indigo-600 font-medium hover:underline transition duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
