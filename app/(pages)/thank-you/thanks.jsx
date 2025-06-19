"use client";
import React from "react";

const Thanks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We appreciate your submission. Our team will get back to you soon.
        </p>
        <p className="text-gray-500 text-sm">
          If you have any questions in the meantime, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
