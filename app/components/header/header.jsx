"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../../public/site_logo_black.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-center items-center sticky top-0 z-50 h-16 w-full shadow-xl bg-white ${
        isScrolled ? "shadow-sm backdrop-blur-[10px]" : ""
      }`}
    >
      {/* <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="" width={150} height={140} />
          </Link>
          <div className="font-extrabold text-[24px]">Internship Programme</div>
        </div>
      </div> */}
      <div className="flex items-center gap-[20rem] p-2" >
        <div>
          <Image width={200} height={200} src="/images/site_logo_black.png"/>
        </div>
        <div className="flex items-center gap-10 ">
          <a href="" className="text-sm text-[#2D8FA5]" >Home</a>
          <a href="" className="text-sm text-[#2D8FA5]">About GNPC</a>
          <a href="" className="text-sm text-[#2D8FA5]">Our Services</a>
          <a href="" className="text-sm text-[#2D8FA5]">Jobs</a>
        </div>

        <div>
            <button className="text-sm bg-[#2D8FA5] text-white p-3 rounded-lg  w-28 cursor-pointer hover:bg-[#4EB0C7]">Apply Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
