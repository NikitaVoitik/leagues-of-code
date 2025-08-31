import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      text: "Alex began our private classes with a keen interest in studying math, despite struggling with his school-level understanding of the subject. Over the course of the year, not only has his enthusiasm for math grown, but he has also started delving into various other facets of the subject through our guidance.",
      author: "Alex",
      role: "13 years"
    },
    {
      text: "I'm very happy that my daughter who studies Python at your academy. She liked it and decided to enter a programming class at her school next year. She finds it useful, interesting and it can help her to find a job in Norway in the future; this is her dream. She also liked the teacher Nikolai.",
      author: "Anna",
      role: "Parent"
    },
    {
      text: "It's good that Leagues of Code appeared exactly when my son was interested in programming. Here he found his mentor to communicate with. He has also made new friends. Leagues of Code gives children an opportunity to learn from the best, and also learn from each other. Working in a team. To compete. To win. As a parent, it's amazing how programming can be better than Minecraft or Fortnite",
      author: "Irma",
      role: "Parent"
    },
    {
      text: "Innokentiy switched to private tutoring and began to grow rapidly in Codeforce — a competitive coding community. He is now one of the top competitive programmers in Spain and in the process of getting into the top world universities.",
      author: "Innokentiy",
      role: "17 Years"
    },
    {
      text: "As a Math and IT teacher I'm often disappointed with the standard school curriculum, but I was very positively surprised to finally find an excellent program. Great teachers and excellent challenging materials will definitely motivate students. Thank you for the great job you're doing. I will surely recommend it to my students.",
      author: "Susana",
      role: "Teacher & Parent"
    },
    {
      text: "Lily started her journey with Leagues of Code Summer Camp. She later on switched to group classes then eventually 1-on-1 classes. And with the help of our teachers, she's grown fast and is making her own games on the web!",
      author: "Lily",
      role: "9 years"
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          Success Stories
        </h1>
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          Don't take our word for it though, here are some of our parents and students loving our private tutoring classes.
        </p>
      </div>

      {/* Reviews Masonry Grid */}
      <div className="w-[60svw]">
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          style={{
            columnFill: 'balance'
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.author + index}
              className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out p-6 break-inside-avoid mb-8 inline-block w-full"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-[#1836CF] font-bold leading-none">"</div>

              {/* Review Text */}
              <p className="text-lg text-[#626262] leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Author Info */}
              <div className="border-t-2 border-[#F4F4F4] pt-4">
                <h4 className="text-xl font-bold text-[#1836CF] mb-1">
                  {review.author}
                </h4>
                <p className="text-lg text-[#626262]">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}