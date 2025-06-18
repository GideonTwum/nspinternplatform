import React from "react";
// import heroBG from ".../../../public/hero-bg.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('../../../public/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "50% 35%",
      }}
      className="relative flex h-[540px] w-full bg-slate-200 justify-center items-center"
    >
      <div /* Overlay */ className="absolute z-0 inset-0 bg-black opacity-50" />
      <div className="z-10 font-black text-[120px] text-white">Internship</div>
    </div>
  );
};

export default Hero;
