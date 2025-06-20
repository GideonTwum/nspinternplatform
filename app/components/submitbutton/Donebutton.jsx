"use client";

import Link from "next/link";

const Submit = () => {
  //logic to handle thank you page

  const handleClick = () => {
    window.location.href = "/thank-you";
  };

  return (
    <div className="flex items-center justify-start ">
      <Link
        className=" items-center text-center justify-center rounded-lg bg-[#2D8FA5] px-6 py-4 text-white hover:bg-gray-700"
        href="/thank-you"
        onClick={() => handleClick()}
      >
        Previous
      </Link>
    </div>
  );
};

export default Submit;
