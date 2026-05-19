import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import MeetElizabeth from "@/sections/MeetElizabeth";
import Process from "@/sections/Process";
import Workshops from "@/sections/Workshops";
import QuoteSection from "@/sections/QuoteSection";
import Sessions from "@/sections/Sessions";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission/>
      <MeetElizabeth />
      <Process/>
      <Workshops/>
      <QuoteSection />
      <Sessions/>
      <Footer/>
    </main>
  );
}
