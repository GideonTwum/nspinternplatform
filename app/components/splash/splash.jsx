"use client";
import React from "react";

const Splash = () => {
  const handleClick = () => {
    
    window.location.href="/form"
  };
  return (
    <div className="flex flex-col items-center  h-screen ">
      <div className="h-[70vh] bg-[dodgerblue] flex items-center justify-center w-full image">
        <h1>spaces</h1>
      </div>
      <button
        className="flex items-center justify-center p-4 bg-[#2D8FA5] hover:bg-gray-700 text-white rounded-lg"
        onClick={() => handleClick()}
      >
        Apply Now here 
      </button>
    </div>
  );
};

export default Splash;
