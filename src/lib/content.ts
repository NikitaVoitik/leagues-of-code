/**
 * Content Management
 * All text content in one place for easy updates
 */
import { COLORS } from './constants';

type TwoLineTitle = {
  line1: string;
  line2: string;
};

type CTA = {
  text: string;
  url: string;
};

type Feature = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type Review = {
  text: string;
  author: string;
  role: string;
};

type Footer = {
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  company: {
    name: string;
    tagline: string;
    address: string;
    copyright: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  links: {
    terms: string;
    privacy: string;
  };
};

type CurriculumLeague = {
  id: string;
  name: string;
  displayNumber: string;
  level: string;
  color: string;
  tagline: string;
  description: string;
  practiceNote?: string;
  special?: string;
  modules: number;
  topics: string[];
};

type Content = {
  hero: {
    title: TwoLineTitle;
    description: string;
    cta: CTA;
  };
  sections: {
    approach: string;
    process: string;
    reviews: string;
  };
  approach: {
    title: TwoLineTitle;
    description: string;
    features: Feature[];
  };
  process: {
    title: TwoLineTitle;
    description: string;
    steps: ProcessStep[];
  };
  reviews: {
    title: string;
    description: string;
    testimonials: Review[];
  };
  footer: Footer;
  legal: {
    privacy: { lastUpdated: string; title: string };
    terms: { lastUpdated: string; title: string };
  };
  curriculum: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    placement: {
      title: string;
      description: string;
    };
    leagues: CurriculumLeague[];
  };
};

type ExternalLinks = {
  booking: string;
  instagram: string;
  facebook: string;
  email: string;
};

const DEFAULT_BOOKING_URL =
  'https://harbour-space.typeform.com/to/gxFFkidp?typeform-source=join.leaguesofcode.com';

export const CONTENT: Content = {
  hero: {
    title: {
      line1: "Where Learning",
      line2: "Becomes Friendship"
    },
    description: "We go beyond teaching Programming & Math by fostering meaningful connections with your child. Our instructors are not just mentors; they're friends, creating a personalised and educational experience.",
    cta: {
      text: "BOOK A FREE CLASS",
      url: process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL
    }
  },

  sections: {
    approach: "OUR APPROACH",
    process: "OUR PROCESS",
    reviews: "SUCCESS STORIES"
  },

  approach: {
    title: {
      line1: "Inspiring the tech",
      line2: "leaders of tomorrow"
    },
    description: "Discover the art of programming, game development, algorithms, and math with our expert guidance. We are dedicated to nurturing young talents and inspiring future innovators.",
    features: [
      {
        title: "Enjoyable and Interactive Learning",
        description: "Our unique one-on-one teaching style with our awesome instructors and platform provide your child with the best chance of successful learning.",
        image: "/1.png",
        imageAlt: "Enjoyable and Interactive Learning"
      },
      {
        title: "Customised Learning Path",
        description: "No matter the case, if the goals are set up by you (the parent) or the child, we take care of all the assessments and planning to help you achieve them.",
        image: "/2.png",
        imageAlt: "Customised Learning Path"
      }
    ]
  },

  process: {
    title: {
      line1: "How we create your",
      line2: "personalised learning journey"
    },
    description: "Every child is unique, and we prioritise personalised education. We assess your child comprehensively to define a customised learning outcome, ensuring their success and growth.",
    steps: [
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
    ]
  },

  reviews: {
    title: "Success Stories",
    description: "Don't take our word for it though, here are some of our parents and students loving our private tutoring classes.",
    testimonials: [
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
      }
    ]
  },

  footer: {
    cta: {
      title: "Discover personalised learning with us. Book a free session",
      description: "Once a meeting is booked, our representative will reach out and offer direction for the next steps. Expect a response within 1-2 business days.",
      buttonText: "BOOK A FREE CLASS"
    },
    company: {
      name: "Leagues of Code",
      tagline: "Powered By Harbour.Space",
      address: "Carrer de Rosa Sensat, 9-11, 08005 Barcelona",
      copyright: "© 2025 Leagues of Code. All Rights Reserved"
    },
    contact: {
      email: "hello@leaguesofcode.com",
      phone: "+34 671 498 303"
    },
    links: {
      terms: "/terms",
      privacy: "/privacy"
    }
  },

  legal: {
    privacy: {
      lastUpdated: "August 16, 2023",
      title: "Privacy Policy"
    },
    terms: {
      lastUpdated: "October 17, 2022",
      title: "Terms of Service"
    }
  },

  curriculum: {
    hero: {
      title: "A personalized journey for every student",
      subtitle: "The Leagues",
      description: "Our program is organized in 5 Leagues. Once per 20 classes students take the exam in order to try to advance to the next League. Students start in the League that matches their current ability."
    },
    placement: {
      title: "Placement",
      description: "Each student is initially assigned to the League they choose. During the first class instructor will decide whether this League is suitable for this particular student or not, and if not, assign them to a different League. As a result, students are always placed in a group with peers at the same level and progress naturally."
    },
    leagues: [
      {
        id: "league-5",
        name: "League 5",
        displayNumber: "5",
        level: "Beginner",
        color: COLORS.green,
        tagline: "The beginning is a great place to start",
        description: "This chapter introduces students to the fundamentals of programming using Scratch, a visual programming language. The interactive and visual nature of Scratch helps learners grasp core programming concepts through engaging projects and games.",
        practiceNote: "Developing these skills demands serious practice, that's why we have over 200 practical problems ready to go.",
        modules: 10,
        topics: [
          "Understanding the Scratch interface",
          "Creating sprites and backdrops",
          "Using motion and looks blocks",
          "Working with sound and events",
          "Creating sequences of actions",
          "Using loops for repetition",
          "Implementing conditionals for decision-making",
          "Handling variables and simple data",
          "Developing interactive stories and animations",
          "Basic debugging and troubleshooting"
        ]
      },
      {
        id: "league-4",
        name: "League 4",
        displayNumber: "4",
        level: "Elementary",
        color: COLORS.skyBlue,
        tagline: "Learn the basics of programming, fundamental concepts",
        description: "This chapter bridges the gap between visual programming in Scratch and text-based programming in Python. Students learn Python syntax and basics, comparing it with Scratch to ease the transition. They will replicate simple Scratch projects in Python to solidify their understanding.",
        modules: 7,
        topics: [
          "Introduction to Python and its Environment",
          "Python Syntax and Basic Commands",
          "Data Types and Variables in Python",
          "Input and Output Operations",
          "Conditional statements: if, elif, else",
          "Looping structures: for and while loops",
          "Simple function definitions"
        ]
      },
      {
        id: "league-3",
        name: "League 3",
        displayNumber: "3",
        level: "Intermediate",
        color: COLORS.blue,
        tagline: "Enhance your Python skills and tackle more complex projects",
        description: "This chapter builds on basic Python knowledge, introducing more programming concepts such as functions, lists, and dictionaries. Students will engage in problem-solving using algorithms and flowcharts, and get a primer on object-oriented programming.",
        modules: 8,
        topics: [
          "Functions: Definition and Usage",
          "Working with Lists and Dictionaries",
          "Basic File I/O Operations",
          "Introduction to Algorithms and Flowcharts",
          "Basics of Object-Oriented Programming (OOP)",
          "Creating and Using Simple Classes",
          "Developing Intermediate-Level Projects",
          "Error Handling Basics"
        ]
      },
      {
        id: "league-2",
        name: "League 2",
        displayNumber: "2",
        level: "Advanced",
        color: COLORS.purple,
        tagline: "Master advanced concepts and competitive programming",
        description: "This chapter explores more advanced Python topics in a less challenging manner, focusing on data structures, algorithms, and more complex projects. Students will also get an introduction to competitive programming concepts.",
        modules: 8,
        topics: [
          "Advanced Functions and Recursion Basics",
          "Introduction to Data Structures: Stacks, Queues, and Linked Lists",
          "More on Object-Oriented Programming: Inheritance and Polymorphism",
          "Algorithm Basics: Searching and Sorting",
          "Intro to Dynamic Programming Concepts",
          "Practice with Simple Competitive Programming Problems",
          "Developing More Complex Projects and Games",
          "Regular Coding Practice Sessions and Peer Reviews"
        ]
      },
      {
        id: "league-1",
        name: "League 1",
        displayNumber: "1",
        level: "Elite",
        color: COLORS.red,
        tagline: "Learn advanced algorithms and data structures",
        description: "Students in League 1 can count themselves amongst the top 3% of programmers in the world. In this final chapter, students focus on preparing for programming Olympiads and may transition to different programming languages used in competitions. They will practice extensively with Olympiad-style problems and learn strategies for excelling in competitive environments.",
        special: "League 1 provides an ongoing learning journey, allowing for continuous growth and refinement in competitive programming skills without a defined end.",
        modules: 10,
        topics: [
          "Introduction to Olympiad Programming",
          "Transitioning to Competitive Programming Languages (e.g., C++)",
          "Advanced Algorithms and Data Structures",
          "Graph Theory and Network Flow",
          "Advanced Problem-Solving Techniques",
          "Practice with Real Olympiad Problems",
          "Time and Space Complexity Optimization",
          "Strategies for Different Types of Olympiad Challenges",
          "Mock Competitions and Timed Practices",
          "Reviewing and Analyzing Top Solutions"
        ]
      }
    ]
  }
};

export const EXTERNAL_LINKS = {
  booking: process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@leaguesofcode.com',
} satisfies ExternalLinks;

export type { Content, CurriculumLeague, CTA, Feature, ProcessStep, Review, Footer, ExternalLinks };
