import Button from "@/app/components/Button";
import Image from "next/image";

const MeetElizabeth = () => {
  return (
    <section
      className="relative w-full h-[570px] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, #F7F2E9 66.666%, transparent 66.666%), url(/meet_e/bg-meet_e.jpg)",
        backgroundSize: "auto, cover",
        backgroundPosition: "left, right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-[1440px] mx-auto h-full">
        <div className="h-full flex flex-col justify-center gap-6 pl-[40px] lg:pl-[60px] pr-[180px] max-w-[clamp(683px,66.7vw,960px)]">
          <h2 className="h1-display">
            —Meet
            <br />
            <em>Elizabeth</em>
          </h2>
          <p className="p">
            Elizabeth Badour is an educator and somatic therapist trained at the
            Tamalpa Institute in California. With over a decade of experience
            across the U.S., Latin America, and Europe, she brings an
            integrative, empathetic, and creative perspective. Her journey
            weaves teaching, psychology, and the expressive arts into a
            sensitive and deeply human practice.
          </p>
          <Button href="" variant="dark">
            Learn More
          </Button>
        </div>
      </div>
      {/* CÁPSULA centrada en 2/3 del marco */}
      <div className="absolute left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[306px] h-[388px] rounded-t-full overflow-hidden z-10">
        <Image
          src="/meet_e/elizabeth_badour.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
      </div>
    </section>
  );
};

export default MeetElizabeth;
