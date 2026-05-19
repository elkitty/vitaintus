import React from "react";

type HeroStageProps = {
  top?: React.ReactNode;
  center?: React.ReactNode;
};

const HeroStage = ({ top, center }: HeroStageProps) => {
  return (
    <div className="relative z-10 mx-auto max-w-[1440px] px-10 xl:px-15">
      <div className="flex h-full flex-col">
        {/* Zona superior */}
        {top && <div>{top}</div>}

        {/* Zona central */}
        <div className="">{center}</div>
      </div>
    </div>
  );
};

export default HeroStage;
