import React from "react";

type HeroStageProps = {
  top?: React.ReactNode;
  center?: React.ReactNode;
};

const HeroStage = ({ top, center }: HeroStageProps) => {
  return (
    <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-15 h-full md:h-auto">
      <div className="flex h-full flex-col">
        {/* Zona superior */}
        {top && <div>{top}</div>}

        {/* Zona central */}
        <div className="flex-1 flex flex-col justify-center md:block">{center}</div>
      </div>
    </div>
  );
};

export default HeroStage;
