const QuoteSection = () => {
  return (
    <section className="relative w-full py-30 bg-white flex items-center overflow-hidden"       style={{
      backgroundImage: "url(/quotesection/quotesection-bg.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "1920px 475px",
    }}>

 
      <div className="mx-auto max-w-[1440px] px-[40px] lg:px-[60px]">
        <blockquote className="max-w-[clamp(760px,70vw,1000px)]">
          <p className="quote-display">
            "The body holds stories the mind has forgotten. Through movement,
            they find a voice, and through art, they find healing."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
