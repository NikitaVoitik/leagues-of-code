import Button from "@/components/ui/Button";
import { CONTENT } from "@/lib/content";
import { COLORS, STYLES, GRID_SIZES } from "@/lib/constants";

export default function Hero() {
  const { hero } = CONTENT;
  
  return (
    <div
      className="w-full h-[80svh] flex flex-col items-center justify-center gap-10"
      style={STYLES.gridBackground(COLORS.primary, COLORS.primaryHover, GRID_SIZES.medium)}
    >
      <div className="w-1/2 gap-10 flex flex-col items-center font-sans">
        <h1 className="text-6xl font-bold text-white text-center">
          {hero.title.line1} <br/>
          {hero.title.line2}
        </h1>
        <p className="text-xl text-white text-center">
          {hero.description}
        </p>
      </div>
      <div>
        <Button href={hero.cta.url}>
          {hero.cta.text}
        </Button>
      </div>
    </div>
  );
}
