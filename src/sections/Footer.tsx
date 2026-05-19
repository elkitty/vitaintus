const Footer = () => {
  return (
    <footer className="w-full  bg-[#fffff]">
      {/* Row principal */}
      <div className="flex mx-auto max-w-[1440px]  pb-[40px] px-[40px] lg:px-[60px] mt-24">
        {/* Columna izquierda */}
        <div className="w-1/2 flex flex-col gap-4">
          <img
            src="/hero/vitaintus-logo.svg"
            alt="Vitaintus"
            className="w-[140px]"
          />

          <p className="p">
            <strong>Elizabeth Badour</strong> — Educator, somatic therapist, and
            lifelong explorer of art and soul.
          </p>
          <p className="mt-[60px] text-sm opacity-70">
            © 2025 Vitaintus | Policies | Website by KISS | Photos: XX
          </p>
        </div>

        {/* Columna derecha */}
        <div className="w-1/2 flex flex-col gap-8 pl-[40px] justify-center ">
          <a href="#" className="swear-link">
            <em>About</em>
          </a>
          <a href="#" className="swear-link">
            <em>Sessions</em>
          </a>
          <a href="#" className="swear-link">
            <em>Contact</em>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
