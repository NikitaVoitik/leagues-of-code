import Image from "next/image";
import { CONTENT } from "@/lib/content";

export default function Approach() {
  const { approach } = CONTENT;
  
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col h-fit items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          {approach.title.line1}<br/>
          {approach.title.line2}
        </h1>
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          {approach.description}
        </p>
      </div>

      {/* Features Section */}
      {approach.features.map((feature, index) => (
        <div key={index} className="w-[60svw] h-[40svh]">
          <div className="w-full h-full grid grid-cols-2 gap-6 items-center">
            {/* Alternate layout: text-image, image-text */}
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-3xl font-bold text-black mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-[#626262]">
                    {feature.description}
                  </p>
                </div>
                <div className="relative w-full h-full">
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
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-[#626262]">
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
