import Image from "next/image";
import Button from "@/app/components/Button";

type SessionCardProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
  imageSrc: string;
  reverse?: boolean;
};

const SessionCard = ({
  title,
  text,
  buttonLabel,
  href,
  imageSrc,
  reverse = false,
}: SessionCardProps) => {
  return (
    <div
      className={`flex items-center gap-[47px] px-[clamp(120px,11.7vw,160px)] ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col flex-1 gap-3">
        <h3 className="h3-display">{title}</h3>
        <p className="p">{text}</p>
        <Button href="" variant="dark" className="mt-3">
          {buttonLabel}
        </Button>
      </div>
      <div className="shrink-0">
        <div className="relative w-[306px] h-[388px] rounded-t-full overflow-hidden bg-[#faf7f3] ">
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
