import Hero from "../../components/hero";
import HeroText from "../../components/heroText";
import SectionOne from "../../components/sectionOne";
import SectionTwo from "../../components/sectionTwo";
import SectionThree from "../../components/sectionThree";
import SectionFour from "../../components/sectionFour";

export default function Home() {
  return (
    <div className="text-neutral-50 bg-brand-black">
      <Hero />
      <HeroText />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
