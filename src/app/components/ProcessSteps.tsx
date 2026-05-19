type ProcessStepsProps = {
  numberOfStep: string;
  alignment: "left" | "right";
  title: {
    main: string;
    emphasis: string;
  };
  text: string;
};

const ProcessSteps = ({
  numberOfStep,
  alignment,
  title,
  text,
}: ProcessStepsProps) => {
  const isRight = alignment === "right";
  return (
    <article
      className={[
        "process-step",
        isRight ? "is-right ml-auto text-right" : "is-left text-left",
      ].join(" ")}
    >
      {/* Número detrás */}
      <div
        aria-hidden
        className={[
          "process-step__number",
          isRight ? "right-0" : "left-0",
        ].join(" ")}
      >
        {numberOfStep}
      </div>
      <div className="process-step__content">
      {/* Contenido adelante */}
      <h3 className="process-step__title">
        {title.main}
        <br />
        <em>{title.emphasis}</em>
      </h3>
      <p className="process-step__text">{text}</p>
      </div>
    </article>
  );
};

export default ProcessSteps;
