import Image from "next/image";
import { CONTENT } from "@/lib/content";
import { COLORS } from "@/lib/constants";

export default function Approach() {
  const { approach } = CONTENT;
  
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 px-6 py-16">
      {/* Header Section */}
      <div className="gap-10 flex flex-col h-fit items-center font-sans max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-black text-center">
          {approach.title.line1}<br/>
          {approach.title.line2}
        </h1>
        <p className="text-xl text-center" style={{ color: COLORS.grayText }}>
          {approach.description}
        </p>
      </div>

      {/* Features Section */}
      {approach.features.map((feature, index) => (
        <div key={index} className="w-full max-w-5xl">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Alternate layout: text-image, image-text */}
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-black">
                    {feature.title}
                  </h2>
                  <p className="text-xl" style={{ color: COLORS.grayText }}>
                    {feature.description}
                  </p>
                </div>
                <div className="relative w-full h-[320px] md:h-[380px]">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full h-[320px] md:h-[380px]">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-black">
                    {feature.title}
                  </h2>
                  <p className="text-xl" style={{ color: COLORS.grayText }}>
                    {feature.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
