import React from "react";

type HeroContentProps = {
  subtitle: React.ReactNode;
  topTitle: React.ReactNode;
  capsulePhoto: React.ReactNode;
  bottomTitle: React.ReactNode;
  cta: React.ReactNode;
};

const HeroContent = ({ subtitle, topTitle, capsulePhoto, bottomTitle, cta }: HeroContentProps) => {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <div className="mb-2">{subtitle}</div>
      <div className="-mb-9 z-10">{topTitle}</div>

      <div  className="z-0">{capsulePhoto}</div>

      {/* Pegado visual a la cápsula, pero con ancho completo (w-full) */}
      <div className="-mt-16 z-10">{bottomTitle}</div>

      <div className="mt-8">{cta}</div>
    </div>
  );
};

export default HeroContent;
