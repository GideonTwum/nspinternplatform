"use client";

import Link from "next/link";

const Previous = () => {
  //logic to handle thank you page

  const handleClick = () => {
    window.location.href = "/form";
  };

  return (
    <div className="flex items-center justify-start ">
      <Link
        className=" items-center text-center justify-center rounded-lg bg-[#2D8FA5] px-6 py-4 text-white hover:bg-gray-700"
        href="/plimen"
        onClick={() => handleClick()}
      >
        Previous
      </Link>
    </div>
  );
};

export default Previous;
