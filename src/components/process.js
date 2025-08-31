import React from 'react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Child Assessment",
      description: "We engage in conversations with both you and your child, ensuring we understand and adapt to your unique requirements."
    },
    {
      number: "02",
      title: "Teacher Assignment",
      description: "Our experts carefully select a teacher who best fits your child's special learning style and needs."
    },
    {
      number: "03",
      title: "Free First Class",
      description: "Experience a no-obligation first class for free, providing a taste of the quality education we offer."
    },
    {
      number: "04",
      title: "Goal Setting",
      description: "Together, we define clear educational goals and develop a customised learning plan, schedule & tracking."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          How we create your<br/>
          personalised learning journey
        </h1>
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          Every child is unique, and we prioritise personalised education. We assess your child comprehensively to define a customised learning outcome, ensuring their success and growth.
        </p>
      </div>

      {/* Steps Section */}
      <div className="w-[60svw] flex flex-col gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-8 p-8 bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out">
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