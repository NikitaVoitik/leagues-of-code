'use client'

import Button from "@/components/Button";
import React from "react";

export default function Main() {
  return (
    <div
      className="w-full h-[80svh] flex flex-col items-center justify-center gap-10"
      style={{
        backgroundColor: '#1E3CD9',
        backgroundImage: `
          linear-gradient(to right, #2644E0 1px, transparent 1px),
          linear-gradient(to bottom, #2644E0 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    >
      <div className="w-1/2 gap-10 flex flex-col items-center font-sans">
        <h1 className="text-6xl font-bold text-white text-center">
          Where Learning <br/>
          Becomes Friendship
        </h1>
        <p className="text-xl text-white text-center">
          We go beyond teaching Programming & Math by fostering meaningful connections with your child. Our instructors are not just mentors; they're friends, creating a personalised and educational experience.
        </p>
      </div>
      <div>
        <Button onClick={() => window.open('https://harbour-space.typeform.com/to/qaVsoIqp?typeform-source=join.leaguesofcode.com', '_blank')}>BOOK A FREE CLASS</Button>
      </div>
    </div>
  );
}