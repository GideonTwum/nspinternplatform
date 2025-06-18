"use client";

import Link from "next/link";

const Button = () => {
  //logic to handle thank you page

  const handleClick = () => {
    window.location.href = "/plimen";
  };

  return (
    <div className="flex items-center justify-end ">
      <Link
        className=" items-center text-center justify-center rounded-lg bg-[#2D8FA5] px-6 py-4 text-white hover:bg-gray-700"
        href="/plimen"
        onClick={() => handleClick()}
      >
        Next
      </Link>
    </div>
  );
};

export default Button;
