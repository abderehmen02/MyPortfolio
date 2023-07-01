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


export const personalProjects : personalProjectType[] =[{
    name : 'Day After Day' ,
    github  : "https://github.com/abderehmen02/Day-After-Day" ,
    whatIHaveLearned : ["building large complex web apps with typescript ,mern , redux " , "contributing to open source project and use git to manage app versions and branches" , "building great user interfaces with mui  and figma " , "implementing design patterns to make my code clean and manageble"   ] ,
    link : "https://marvelous-pie-441c92.netlify.app/"  ,
    ShortDescreption : " Productivity and day management app"    ,
    LongDescreption : "an app to manage your toughts , set your goals ,<br/>write your dailly journalings and toughts and <br/>how many hours you have been productive <br/>each day    " ,
    logo : '/dayAfterDayLogo.png' ,
    technologies : [ "mern stack" , "typescript"    , "redux"  , "design patterns"  , "git"  , "material ui"  , "figma"   ]
} , {
    name : "ChatX" , 
    logo : "/ChatXLogo.ico" ,
    github  : "https://github.com/abderehmen02/Chat-X"  ,
    link : "https://stellular-genie-c77a7c.netlify.app/" ,
    whatIHaveLearned : ["building complex web app with firebase as a database"  , "working with material ui and figma to build an outstanding ui and ux"  ] ,
    ShortDescreption :" a chat app similar to instagram"  ,
    LongDescreption : "a social media app where you can see your friend s posts , write comments , like posts , search for members and follow other people    "  ,
    technologies : ["firebase" , "react js" , "material ui  "  , "material ui"  , "figma" ] ,
}  , {
    logo : "travelWX.png"  ,
    name : "Travel App"  ,
    ShortDescreption : "an app that make travel easier for you " ,
    LongDescreption : "a web app where you can explore diffrent hotels in any city and see the hotel review and what other people are saying about this hotel , you can also see the weather in any city you want and explore the map    " , 
    github : "https://github.com/abderehmen02/Travel" ,
    link : "https://clinquant-queijadas-3a54ea.netlify.app/"  ,
    whatIHaveLearned : [ "integrating third party api to my app "] , 
    technologies : ["git"   , "third party api" , "react JS"  , "material ui"  , "figma "]
}]