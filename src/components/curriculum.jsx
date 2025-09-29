export default function Curriculum() {
  const leagues = [
    {
      title: 'League 5',
      description:
        'The beginning is a great place to start. This chapter introduces students to the fundamentals of programming using Scratch, a visual programming language. The interactive and visual nature of Scratch helps learners grasp core programming concepts through engaging projects and games. Developing these skills demands serious practice, that’s why we have over 200 practical problems ready to go.',
      topics: [
        'Understanding the Scratch interface',
        'Creating sprites and backdrops',
        'Using motion and looks blocks',
        'Working with sound and events',
        'Creating sequences of actions',
        'Using loops for repetition',
        'Implementing conditionals for decision-making',
        'Handling variables and simple data',
        'Developing interactive stories and animations',
        'Basic debugging and troubleshooting',
      ],
    },
    {
      title: 'League 4',
      description:
        'This chapter bridges the gap between visual programming in Scratch and text-based programming in Python. Students learn Python syntax and basics, comparing it with Scratch to ease the transition. They will replicate simple Scratch projects in Python to solidify their understanding.',
      topics: [
        'Introduction to Python and its Environment',
        'Python Syntax and Basic Commands',
        'Data Types and Variables in Python',
        'Input and Output Operations',
        'Conditional statements: if, elif, else',
        'Looping structures: for and while loops',
        'Simple function definitions',
      ],
    },
    {
      title: 'League 3',
      description:
        'This chapter builds on basic Python knowledge, introducing more programming concepts such as functions, lists, and dictionaries. Students will engage in problem-solving using algorithms and flowcharts, and get a primer on object-oriented programming.',
      topics: [
        'Functions: Definition and Usage',
        'Working with Lists and Dictionaries',
        'Basic File I/O Operations',
        'Introduction to Algorithms and Flowcharts',
        'Basics of Object-Oriented Programming (OOP)',
        'Creating and Using Simple Classes',
        'Developing Intermediate-Level Projects',
        'Error Handling Basics',
      ],
    },
    {
      title: 'League 2',
      description:
        'This chapter explores more advanced Python topics in a less challenging manner, focusing on data structures, algorithms, and more complex projects. Students will also get an introduction to competitive programming concepts.',
      topics: [
        'Advanced Functions and Recursion Basics',
        'Introduction to Data Structures: Stacks, Queues, and Linked Lists',
        'More on Object-Oriented Programming: Inheritance and Polymorphism',
        'Algorithm Basics: Searching and Sorting',
        'Intro to Dynamic Programming Concepts',
        'Practice with Simple Competitive Programming Problems',
        'Developing More Complex Projects and Games',
        'Regular Coding Practice Sessions and Peer Reviews',
      ],
    },
    {
      title: 'League 1',
      description:
        'Students in League 1 can count themselves amongst the top 3% of programmers in the world. In this final chapter, students focus on preparing for programming Olympiads and may transition to different programming languages used in competitions. They will practice extensively with Olympiad-style problems and learn strategies for excelling in competitive environments.',
      topics: [
        'Introduction to Olympiad Programming',
        'Transitioning to Competitive Programming Languages (e.g., C++)',
        'Advanced Algorithms and Data Structures',
        'Graph Theory and Network Flow',
        'Advanced Problem-Solving Techniques',
        'Practice with Real Olympiad Problems',
        'Time and Space Complexity Optimization',
        'Strategies for Different Types of Olympiad Challenges',
        'Mock Competitions and Timed Practices',
        'Reviewing and Analyzing Top Solutions',
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col items-center font-sans">
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          A progressive path from visual programming to Olympiad-level problem solving. Each league builds on the
          previous one with structured topics and lots of practice.
        </p>
      </div>

      {/* Curriculum list - single column */}
      <div className="w-[60svw]">
        <div className="flex flex-col gap-8">
          {leagues.map((league, index) => (
            <div
              key={league.title + index}
              className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out p-6 w-full"
            >
              {/* Title */}
              <h4 className="text-2xl font-bold text-[#1836CF] mb-3">{league.title}</h4>

              {/* Description */}
              <p className="text-lg text-[#626262] leading-relaxed mb-6">{league.description}</p>

              {/* Divider */}
              <div className="border-t-2 border-[#F4F4F4] pt-4">
                <h5 className="text-sm font-semibold tracking-wide uppercase text-[#626262] mb-3">
                  Topics per module
                </h5>
                <ul className="space-y-2">
                  {league.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-10 items-center justify-center rounded-md bg-[#F4F4F4] text-xs font-semibold text-[#3F3F3F]">
                        {String(tIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-slate-800">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}