import Image from "next/image";

type HeroCapsuleProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  clasName?: string;
};

const HeroCapsule = ({
  src,
  alt = "",
  width = 600,
  height = 490,
  className = "",
}: HeroCapsuleProps) => {
  return (
    <div
      className={["relative overflow-hidden rounded-full"].join("")}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes={`${width}px`}
      />
    </div>
  );
};

export default HeroCapsule;
