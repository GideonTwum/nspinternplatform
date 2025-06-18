"use client";

import Link from "next/link";

const Submit = () => {
  const handleClick = () => {
    window.location.href = "/thankyou";
  };

  return (
    <div className="flex items-center justify-end">
      <Link
        href="/thankyou"
        onClick={handleClick}
        className="items-center text-center justify-center rounded-lg bg-[#2D8FA5] px-6 py-4 text-white hover:bg-gray-700"
      >
        Done
      </Link>
    </div>
  );
};

export default Submit;
