const Mission = () => {
  return (
    <section
      className="relative w-full bg-white h-auto py-32"
      style={{
        backgroundImage: "url(/mission/mission-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "1920px 600px",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[40px] xl:px-[60px]">
        <div className="relative mx-auto flex max-w-[850px] flex-col items-center  text-center ">
          <h2 className="h1-display">
            Movement and creativity as <em>pathways</em> to <em>healing</em>.
          </h2>
          <p className="p mt-8 mx-auto">
            At <strong>Vitaintus</strong>, healing begins in the body. Through
            movement, art, and mindful presence, you reconnect with your
            emotions, release what holds you back, and open space for authentic
            growth. Each encounter is an invitation to transform gently, yet
            profoundly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
