import ProcessSteps from "@/app/components/ProcessSteps";
import Button from "@/app/components/Button";

const steps = [
  {
    numberOfStep: "01",
    alignment: "left" as const,
    title: {
      main: "Give It",
      emphasis: "Form",
    },
    text: "houghts, feelings, and embodied experiences take shape through movement,drawing, writing, and dialogue. The body and imagination become instruments, revealing what has remained unspoken and opening the first door to self-discovery.",
  },
  {
    numberOfStep: "02",
    alignment: "right" as const,
    title: {
      main: "Witness",
      emphasis: "What It Is",
    },
    text: "As expression unfolds, awareness deepens. Art, movement, and dialogue act as mirrors, revealing emotions, patterns, and themes that might otherwise remain unseen. Witnessing cultivates attunement to yourself, your relationships, and your life.",
  },
  {
    numberOfStep: "03",
    alignment: "left" as const,
    title: {
      main: "See It",
      emphasis: "Differently",
    },
    text: "With insight comes possibility. Through creative expression, we embody what we have discovered, experimenting with new ways of being. Movement, art, and reflection trans form understanding into action, creating space for embodiment, insight, and meaningful change.",
  },
];

const Process = () => {
  return (
    <section
      className="relative w-full py-32"
      style={{
        backgroundImage: "url(/process/process-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1920px 1700px",
        backgroundPosition: "center 200px",
      }}
    >
    

      <div className="mx-auto max-w-[1440px] px-6 ">
        {/* Intro */}
        <header className="text-center">
          <h2 className="h1-display">
            The Tamalta
            <br />
            <em>Process</em>
          </h2>
          <p className="p mt-8 mx-auto w-[466px]">
            The Tamalpa Life/Art Process, founded by Anna and Daria Halprin,
            blends movement, drawing, and writing to explore emotions and
            patterns, turning creativity into a path of reflection,
            transformation, and embodied presence.
          </p>
        </header>
        {/* Steps */}
        <div className="mt-20 w-[clamp(564px,68vw,980px)] mx-auto">
          {steps.map((step) => (
            <ProcessSteps
              key={step.numberOfStep}
              numberOfStep={step.numberOfStep}
              alignment={step.alignment}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="dark" href="#book">
            Book a consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
