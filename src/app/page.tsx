import Hero from "@/components/sections/Hero";
import Approach from "@/components/sections/Approach";
import Process from "@/components/sections/Process";
import Separator from "@/components/ui/Separator";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
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

      <Separator text="OUR CURRICULUM"/>
      <div className="w-full flex flex-col items-center justify-center gap-8 p-10 pt-0">
        <div className="w-[60svw] bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-bold text-black">Explore the Leagues</h2>
            <p className="text-lg" style={{ color: COLORS.grayText }}>
              A guided journey from beginner to elite. See where your student fits and what comes next.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {CONTENT.curriculum.leagues.map((league) => (
              <div
                key={league.id}
                className="flex items-center gap-3 px-4 py-3 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_#000000] bg-white"
              >
                <div
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: league.color }}
                >
                  {league.displayNumber}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold text-black">{league.name}</span>
                  <span className="text-sm" style={{ color: COLORS.grayText }}>{league.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button href="/curriculum">View full curriculum</Button>
          </div>
        </div>
      </div>

      <Separator text={CONTENT.sections.reviews}/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
