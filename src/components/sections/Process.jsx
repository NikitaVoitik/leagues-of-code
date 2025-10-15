import React from 'react';
import { CONTENT } from "@/lib/content";

export default function Process() {
  const { process } = CONTENT;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          {process.title.line1}<br/>
          {process.title.line2}
        </h1>
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          {process.description}
        </p>
      </div>

      {/* Steps Section */}
      <div className="w-[60svw] flex flex-col gap-8">
        {process.steps.map((step, index) => (
          <div 
            key={index} 
            className="flex items-start gap-8 p-8 bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out"
          >
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold text-white bg-[#1836CF] border-2 border-black rounded-md w-16 h-16 flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                {step.number}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-xl text-[#626262] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}