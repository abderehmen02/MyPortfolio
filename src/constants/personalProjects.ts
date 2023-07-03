export interface personalProjectType {
 name : string , 
 github : string ,
 whatIHaveLearned : string[] ,
 link : string , 
 LongDescreption : string ,
 ShortDescreption : string  , 
 logo : string ,
 technologies : string[]  
} 


export const personalProjects: personalProjectType[] = [
    {
      name: 'Day After Day',
      github: 'https://github.com/abderehmen02/Day-After-Day',
      whatIHaveLearned: [
        'building large complex web apps with typescript, MERN (MongoDB, Express.js, React.js, Node.js), and Redux',
        'contributing to open source projects and using Git to manage app versions and branches',
        'building great user interfaces with Material-UI and Figma',
        'implementing design patterns to make code clean and manageable',
        'using tools such as TypeScript and design patterns to make code clean and optimized in the future',
        'implementing authorization technologies such as JWT (JSON Web Tokens) to authenticate and authorize users'
      ],
      link: 'https://marvelous-pie-441c92.netlify.app/',
      ShortDescreption: 'Productivity and day management app',
      LongDescreption: 'An app to manage your thoughts, set your goals, write your daily journalings and thoughts, and track your daily productivity.',
      logo: '/dayAfterDayLogo.png',
      technologies: ['MERN stack', 'TypeScript', 'Redux', 'Design patterns', 'Git', 'Material-UI', 'Figma']
    },
    {
      name: 'ChatX',
      logo: '/ChatXLogo.ico',
      github: 'https://github.com/abderehmen02/Chat-X',
      link: 'https://stellular-genie-c77a7c.netlify.app/',
      whatIHaveLearned: [
        'building complex web apps using Firebase as a database',
        'working with Material-UI and Figma to build an outstanding UI and UX',
        'using React Context API to manage state'
      ],
      ShortDescreption: 'A chat app similar to Instagram',
      LongDescreption: 'A social media app where you can see your friends\' posts, write comments, like posts, search for members, and follow other people.',
      technologies: ['Firebase', 'React.js', 'Material-UI', 'Figma']
    },
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
  