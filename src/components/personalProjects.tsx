"use client"

import { personalProjectType, personalProjects } from "@/constants/personalProjects"
import { Text } from "@/ui/typography"
import { useState } from "react"

export const PersonalProjects : React.FC  = ()=>{
const [CurrentProject, setCurrentProject] = useState<number>(0)
const project : personalProjectType = personalProjects[CurrentProject]
return <div className="flex items-center px-10 gap-5 py-4 relative bg-black text-white w-full">
<div className="flex flex-col border-2  w-2/3" >
    <div className="flex" >
    <img  src={project.logo} />
    <Text>{project.name}</Text>
    </div>
    <Text>{project.ShortDescreption}</Text>
    <div>
    <Text>what i have learned</Text>
    <ul>
        {project.whatIHaveLearned.map((item , index)=><div key={index} >{item}</div>)}
    </ul></div>
    <div>
    <Text>Technologies</Text>
    <ul>
        {project.technologies.map(technology=><li key={technology} >{technology}</li>)}
    </ul></div>
    <Text>{project.LongDescreption}</Text>
    </div>
    <div className="w-1/3 flex gap-10   justify-center   flex-col items-center" >
        <Text className="text-3xl text-whiteYellwed uppercase text-center" >Projects</Text>


        <ul className=" flex  flex-col gap-4 px-10 py-6 rounded-xl projectsList w-fit " >
            {personalProjects.map(project=><li className="text-xl hover:text-secondaryDark cursor-pointer  text-start" > <img className="w-7 h-7 inline rounded-full" src={project.logo} /> {project.name}  </li>)}
        </ul>
    </div></div>

}

