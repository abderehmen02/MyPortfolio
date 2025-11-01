export interface experienceType {
  title: string;
  technologies: string[];
  url?: string;
  company: string;
  logo?: string;
}

export const myExperiences: experienceType[] = [
  {
    title: "Full Stack Mern Developer | 2022-2023",
    technologies: [
      "react js",
      "node js ",
      "database management",
      "git",
      "material ui",
    ],

    company: "American Corner Oran",
    logo: "/acoLogo.jpg",
  },
  {
    title: "Next Js Developer | 2023-present",
    technologies: [
      "Next Js",
      "Cloudflare Tools",
      "State management",
      "Database Management",
      "git",
      "Tailwind Css",
    ],
    company: "Hexashield LTD",
  },
];
