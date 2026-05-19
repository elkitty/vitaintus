import HeroNav from "@/app/components/HeroNav";
import HeroBackground from "@/app/components/HeroBackground";
import HeroStage from "@/app/components/HeroStage";
import HeroContent from "@/app/components/HeroContent";
import HeroCapsule from "@/app/components/HeroCapsule";
import LogoVitaintus from "@/app/components/LogoVitaintus";
import Button from "@/app/components/Button";

const navItems = [
  { label: "home", href: "#" },
  { label: "about", href: "#" },
  { label: "courses", href: "#" },
  { label: "blog", href: "#" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <HeroBackground />
      <HeroStage
        top={
          <div className="pt-[47px] pb-[47px]">
            <HeroNav
              items={navItems}
              logo={
                <LogoVitaintus className="h-14 w-auto text-white -translate-y-[9px]" />
              }
              cta={
                <button className="rounded-full border-2 border-white/40 px-6 py-2 text-white uppercase">
                  Book a Call
                </button>
              }
            />
          </div>
        }
        center={
          <div className="pt-24 pb-42">
            <HeroContent
              subtitle={<p className="hero-subtitle">vitaintus</p>}
              topTitle={
                <p className="hero-title">
                  <span className="hero-title__roman">A place</span>
                </p>
              }
              capsulePhoto={
                <HeroCapsule
                  src="/hero/hero-capsule.jpg"
                  width={300}
                  height={490}
                />
              }
              bottomTitle={
                <p className="hero-title">
                  <span className="hero-title__italic">for Becoming</span>
                </p>
              }
              cta={
                
                <Button variant="light" className="mt-9">discover more!</Button>
              }
            />
          </div>
        }
      />
    </section>
  );
};

export default Hero;
