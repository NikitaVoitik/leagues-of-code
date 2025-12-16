import Button from "@/components/ui/Button";
import { CONTENT } from "@/lib/content";
import { COLORS, STYLES, GRID_SIZES } from "@/lib/constants";

export default function Hero() {
  const { hero } = CONTENT;
  
  return (
    <div
      className="w-full min-h-[80svh] flex flex-col items-center justify-center gap-12 px-6 py-16"
      style={STYLES.gridBackground(COLORS.primary, COLORS.primaryHover, GRID_SIZES.medium)}
    >
      <div className="w-full max-w-5xl gap-10 flex flex-col items-center font-sans">
        <h1 className="text-6xl md:text-7xl font-bold text-white text-center leading-tight">
          {hero.title.line1} <br/>
          {hero.title.line2}
        </h1>
        <p className="text-xl md:text-2xl text-white text-center max-w-4xl leading-relaxed">
          {hero.description}
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Button href={hero.cta.url}>
          {hero.cta.text}
        </Button>
        <a
          href="/curriculum"
          className="text-white underline text-lg hover:text-white/80"
        >
          View curriculum →
        </a>
      </div>
    </div>
  );
}
