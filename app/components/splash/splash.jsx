"use client";
import React from "react";

const Splash = () => {
  const handleClick = () => {
    
    window.location.href="/form"
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <button
        className="flex items-center justify-center p-4 bg-[#2D8FA5] hover:bg-gray-700 text-white rounded-lg"
        onClick={() => handleClick()}
      >
        Apply Now
      </button>
    </div>
  );
};

export default Splash;
