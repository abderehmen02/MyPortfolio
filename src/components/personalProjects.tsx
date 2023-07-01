"use client"

import { personalProjectType, personalProjects } from "@/constants/personalProjects"
import { Text } from "@/ui/typography"
import { useState } from "react"

export const PersonalProject : React.FC  = ()=>{
const [CurrentProject, setCurrentProject] = useState<number>(0)
const project : personalProjectType = personalProjects[CurrentProject]
return <div className="flex " >
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
}