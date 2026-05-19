import React from "react";
import Image from "next/image";

const HeroBackground = () => {
  return (
    <>
      {/* Background Image for large screens */}
      <div className="absolute inset-0 -z-30 bg-[#CBC2B9]" />
      <div className="pointer-events-none absolute -z-20 opacity-50 left-1/2 -translate-x-1/2 top-[130px] w-[610px] h-[1190px]">
        <Image
          src="/hero/bkg-figure.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  );
};

export default HeroBackground;
