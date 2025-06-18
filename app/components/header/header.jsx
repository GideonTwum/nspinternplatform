"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/site_logo_black.png";

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
      className={`flex justify-center items-center sticky top-0 z-50 h-16 w-full bg-white ${
        isScrolled ? "shadow-sm backdrop-blur-[10px]" : ""
      }`}
    >
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="" width={150} height={140} />
          </Link>
          <div className="font-extrabold text-[24px]">Internship Programme</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
