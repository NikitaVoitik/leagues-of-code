import Hero from "@/components/sections/Hero";
import Approach from "@/components/sections/Approach";
import Process from "@/components/sections/Process";
import Separator from "@/components/ui/Separator";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";
import { CONTENT } from "@/lib/content";
import { COLORS, STYLES, GRID_SIZES } from "@/lib/constants";

export default function Home() {
  return (
    <div
      className="font-sans min-h-screen"
      style={STYLES.gridBackground(COLORS.background, COLORS.backgroundGrid, GRID_SIZES.medium)}
    >
      <Hero/>
      <Separator text={CONTENT.sections.approach}/>
      <Approach/>
      <Separator text={CONTENT.sections.process}/>
      <Process/>
      <Separator text={CONTENT.sections.reviews}/>
      <Reviews/>
      <Footer/>
    </div>
  );
}