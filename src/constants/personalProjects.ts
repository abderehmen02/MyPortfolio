export interface personalProjectType {
 name : string , 
 github? : string  ,
 whatIHaveLearned : string[] ,
 link : string , 
 LongDescreption : string ,
 ShortDescreption : string  , 
 logo : string ,
 technologies : string[]  
} 


export const personalProjects: personalProjectType[] = [
  {
    name : "Stealthgram" ,
    technologies  : ["Next Js" , "Tailwind Css"  , "Figma UI / UX" , "Git" , "API integratioin" , "Typescript" ] ,
    link : "https://stealthgram.com" ,
    logo : "/stealthgram.ico" ,
    whatIHaveLearned: [
      'Building and scaling a project with thousands of users',
      'Integrating third party api to Next js app',
      'Testing features and making sure that features are running whiout problems',
      'implementing design patterns and writing a clean and a scalble code',
      ' ussing latest modern technologies such as Next js 13 app directory to build and scale the project',
      'ussing git and github to manage the app versions'
    ],
    ShortDescreption : "download instagram stories , reels , highlights , posts and medias " ,
    LongDescreption : "a web app that allows users to view and download instagram stories , reels , highlights , posts , medias ; the app will allow you to search for any instagram profile ussing his username or profile link and downlad any media in that profile , or you can download a media ussing it's link by pasting the link of the media"
}   ,
{
    name : "Roamio" ,
    technologies  : ["Next Js" , "Mongodb"  , "Tailwind Css"  , "Figma UI / UX" , "Git" , "API integratioin" , "Typescript"  ] ,
    link : "https://roamio-ieuj.vercel.app" ,
    logo : "/roamioLogo.png" ,
    github : "https://github.com/abderehmen02/Roamio" ,
    whatIHaveLearned: [
      'Integration authentication with google and jwt tokens',
      'implementing design patterns and write a clean code to scale large applications',
      'ussing tools such as zod ,useQuery and toast to write a clean and reusble code',
      'implementing design patterns and writing a clean and a scalble code',
      'ussing git and github to manage the app versions'
    ],
    ShortDescreption : "a web app to search for cities according to your prefrences" ,
    LongDescreption : "search and find cities according to your prefrences , you can find historical cities that includes a lot's of historic architecture , you can also find remantic cities ...etc , you can also like , dislike , leave a review for the city and save the city if you are loged in , also you can explore the landmarks of the city"
} ,

    {
      name: 'Day After Day',
      github: 'https://github.com/abderehmen02/Day-After-Day',
      whatIHaveLearned: [
        'building large complex web apps with typescript, MERN (MongoDB, Express.js, React.js, Node.js), and Redux',
        'contributing to open source projects and using Git to manage app versions and branches',
        'building great user interfaces with Material-UI and Figma',
        'implementing design patterns to make the code clean and manageable',
        'using tools such as TypeScript and design patterns to make a clean and optimizable code',
        'implementing authorization technologies such as JWT (JSON Web Tokens) to authenticate and authorize users'
      ],
      link: 'https://rad-starlight-a46690.netlify.app/',
      ShortDescreption: 'Productivity and day management app',
      LongDescreption: 'An app to manage your thoughts, set your goals, write your daily journalings and thoughts, and track your daily productivity.',
      logo: '/dayAfterDayLogo.png',
      technologies: ['MERN stack', 'TypeScript', 'Redux', 'Design patterns', 'Git', 'Material-UI', 'Figma']
    },
    {
      name : "Stellar Computing" ,
      technologies  : ["Next Js" , "Tailwind Css" , "Git" , "API integratioin"  ] ,
      link : "https://stellarcomputing.ca/" ,
      logo : "/stellarLogo.png" ,
      whatIHaveLearned: [
       "Implementing taiwnd css and material ui styles insuring responsiveness of the website" ,
      
      ],
      ShortDescreption : "a website for an IT team " ,
      LongDescreption : "a website that describes an IT computing team , their experiences , roles ...etc"
    }   ,
    {
      logo: 'travelWX.png',
      name: 'Travel App',
      ShortDescreption: 'An app that makes travel easier for you',
      LongDescreption: 'A web app where you can explore different hotels in any city, see hotel reviews, and what other people are saying about them. You can also check the weather in any city and explore the map.',
      github: 'https://github.com/abderehmen02/Travel',
      link: 'https://clinquant-queijadas-3a54ea.netlify.app/',
      whatIHaveLearned: [
        'integrating third-party APIs into my app',
        'working with Figma and Material-UI to build an elegant design'
      ],
      technologies: ['Git', 'Third-party API', 'React.js', 'Material-UI', 'Figma']
    }
  ];
  