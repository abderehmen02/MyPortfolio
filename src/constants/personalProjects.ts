export interface personalProjectType {
  name: string;
  github?: string;
  whatIHaveLearned: string[];
  link: string;
  LongDescreption: string;
  ShortDescreption: string;
  logo: string;
  technologies: string[];
}

export const personalProjects: personalProjectType[] = [
  {
    name: "Grimmy AI",
    technologies: [
      "Next Js",
      "Tailwind Css",
      "Git",
      "State management",
      "API integratioin",
      "Typescript",
      "State management",
    ],
    link: "https://create.grimmy.ai/",
    logo: "/grimmy.png",
    whatIHaveLearned: [
      "Building and scaling a project with thousands of users",
      "Integrating third party api to Next js app",
      "Testing features and making sure that features are running whiout problems",
      "implementing design patterns and writing a clean and a scalble code",
      " ussing latest modern technologies such as Next js 13 app directory to build and scale the project",
      "ussing git and github to manage the app versions",
    ],
    ShortDescreption: "Creft fairytales with AI",
    LongDescreption:
      "a web app that allows users to generate fairytailes with a prompt, the user can put his prompt and apply some filters such as the gender and the emotions, and the app will use AI in order to generate that fairytale, after that the user can print the fairytale or download it",
  },
  {
    name: "Exmonde",
    technologies: [
      "Next Js",
      "Mongodb",
      "Tailwind Css",
      "Figma UI / UX",
      "Git",
      "API integratioin",
      "Typescript",
    ],
    link: "exmonde.com",
    logo: "/exmonde.png",

    whatIHaveLearned: [
      "Integration authentication with google and jwt tokens",
      "implementing design patterns and write a clean code to scale large applications",
      "ussing tools such as zod ,useQuery and toast to write a clean and reusble code",
      "ussing git and github to manage the app versions",
    ],
    ShortDescreption:
      "a web app to explore palces, cities and traditions for countries",
    LongDescreption:
      "explore places, foods and traditions based on countries and prefrences, for example you select the country as france and you will see all the important places that you should visit on france, you choose any category or country",
  },
  {
    name: "Greenteam",
    technologies: ["Next Js", "Tailwind Css", "Figma to code"],
    link: "https://greenteam.nl/",
    logo: "/greenteam.svg",
    whatIHaveLearned: [
      "Implementing taiwnd css styles and insuring responsiveness of the website",
      "Fix ui and ux issues ",
    ],
    ShortDescreption: "a website for company products ",
    LongDescreption:
      "a website that showcase the services of the company and display it with images",
  },
  {
    name: "Neo Coupons",
    technologies: ["Next Js", "Tailwind Css", "Git", "API integratioin"],
    link: "https://neo.coupons/",
    logo: "/neocoupons.png",
    whatIHaveLearned: [
      "Working with the neo bockchain api in order to create and redeem tokens",
      "working with firebase as a database in order to store the tokens",
    ],
    ShortDescreption: "a website to generate coupons in the Neo blockchain",
    LongDescreption:
      "a website that allow users to generate coupons in the neo blockchain, the user can redeem that coupon later or give it to someone else with the token",
  },
  {
    name: "Stellar Computing",
    technologies: ["Next Js", "Tailwind Css", "Git", "API integratioin"],
    link: "https://stellarcomputing.ca/",
    logo: "/stellarLogo.png",
    whatIHaveLearned: [
      "Implementing taiwnd css and material ui styles insuring responsiveness of the website",
    ],
    ShortDescreption: "a website for an IT team ",
    LongDescreption:
      "a website that describes an IT computing team , their experiences , roles ...etc",
  },
  {
    name: "Day After Day",
    github: "https://github.com/abderehmen02/Day-After-Day",
    whatIHaveLearned: [
      "building large complex web apps with typescript, MERN (MongoDB, Express.js, React.js, Node.js), and Redux",
      "contributing to open source projects and using Git to manage app versions and branches",
      "building great user interfaces with Material-UI and Figma",
      "implementing design patterns to make the code clean and manageable",
      "using tools such as TypeScript and design patterns to make a clean and optimizable code",
      "implementing authorization technologies such as JWT (JSON Web Tokens) to authenticate and authorize users",
    ],
    link: "https://rad-starlight-a46690.netlify.app/",
    ShortDescreption: "Productivity and day management app",
    LongDescreption:
      "An app to manage your thoughts, set your goals, write your daily journalings and thoughts, and track your daily productivity.",
    logo: "/dayAfterDayLogo.png",
    technologies: [
      "MERN stack",
      "TypeScript",
      "Redux",
      "Design patterns",
      "Git",
      "Material-UI",
      "Figma",
    ],
  },

  // {
  //   logo: "travelWX.png",
  //   name: "Travel App",
  //   ShortDescreption: "An app that makes travel easier for you",
  //   LongDescreption:
  //     "A web app where you can explore different hotels in any city, see hotel reviews, and what other people are saying about them. You can also check the weather in any city and explore the map.",
  //   github: "https://github.com/abderehmen02/Travel",
  //   link: "https://clinquant-queijadas-3a54ea.netlify.app/",
  //   whatIHaveLearned: [
  //     "integrating third-party APIs into my app",
  //     "working with Figma and Material-UI to build an elegant design",
  //   ],
  //   technologies: [
  //     "Git",
  //     "Third-party API",
  //     "React.js",
  //     "Material-UI",
  //     "Figma",
  //   ],
  // },
];
